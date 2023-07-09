import prisma from "prisma/prisma";
import bcrypt from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";
import { CustomError, isCustomError } from "@/lib/utils";
import { ZodError } from "zod";
import { UserCreateInputObjectSchema } from "@/prisma/generated/schemas";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedBody = UserCreateInputObjectSchema.parse(body);
    const { name, email, password, image, phone } = validatedBody;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user
      .create({
        data: {
          name: name,
          email: email,
          image: image,
          phone: phone,
          password: hashedPassword,
        },
      })
      .catch((error) => {
        throw CustomError("This email is already in use", 400);
      });
    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    if (isCustomError(error)) {
      return NextResponse.json(
        { message: error.message },
        { status: error.status }
      );
    }
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
