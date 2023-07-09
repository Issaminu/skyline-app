import type { LoggedInUser as ZodUser } from "@/lib/auth";
import type { JWT } from "next-auth/jwt";
import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & ZodUser;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    user: ZodUser;
  }
}
