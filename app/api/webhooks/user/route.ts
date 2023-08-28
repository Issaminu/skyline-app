import { db } from "@/drizzle";
import { user } from "@/drizzle/schema";

import { IncomingHttpHeaders } from "http";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook, WebhookRequiredHeaders } from "svix";

const webhookSecret = process.env.WEBHOOK_SECRET || "";

async function handler(request: Request) {
  const payload = await request.json();
  const headersList = headers();

  const heads = {
    "svix-id": headersList.get("svix-id"),
    "svix-timestamp": headersList.get("svix-timestamp"),
    "svix-signature": headersList.get("svix-signature"),
  };
  const wh = new Webhook(webhookSecret);
  let evt: Event | null = null;

  try {
    evt = wh.verify(
      JSON.stringify(payload),
      heads as IncomingHttpHeaders & WebhookRequiredHeaders
    ) as Event;
  } catch (err) {
    console.error((err as Error).message);
    return NextResponse.json({}, { status: 400 });
  }

  const eventType: EventType = evt.type;
  if (eventType === "user.created" || eventType === "user.updated") {
    const { email_addresses, ...attributes } = evt.data;
    const emails = email_addresses as unknown as Array<{
      email_address: string;
      verification: {
        status: string;
      };
    }>;
    const email = emails[0].email_address;
    const isEmailVerified = emails[0].verification.status === "verified";
    const dbuser = await db
      .insert(user)
      .values({
        id: attributes.id as string,
        name: attributes.first_name + " " + attributes.last_name,
        email,
        image: attributes.profile_image_url as string,
        phone: "TEST",
        isEmailVerified,
      })
      .onConflictDoUpdate({
        target: user.id,
        set: {
          name: attributes.first_name + " " + attributes.last_name,
          email,
          image: attributes.profile_image_url as string,
          phone: "TEST",
          isEmailVerified,
        },
      });
  }
  return NextResponse.json({}, { status: 200 });
}

type EventType = "user.created" | "user.updated" | "*";

type Event = {
  data: Record<string, string | number>;
  object: "event";
  type: EventType;
};

export const GET = handler;
export const POST = handler;
export const PUT = handler;
