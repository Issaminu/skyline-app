import prisma from "prisma/prisma";
import { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { CustomError } from "@/lib/utils";
import { JWT } from "next-auth/jwt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

interface Credentials extends Record<"email" | "password", string> {}

export type LoggedInUser = {
  id: number;
  email: string;
  name: string;
  phone: string;
  image: string;
};

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "string" },
        password: { label: "Password", type: "password" },
      },
      // @ts-ignore
      async authorize(credentials?: Credentials): Promise<LoggedInUser | null> {
        try {
          if (!credentials) return null;
          const user = await prisma.user
            .findUniqueOrThrow({
              where: {
                email: credentials.email,
              },
              select: {
                id: true,
                email: true,
                name: true,
                password: true,
                phone: true,
                image: true,
              },
            })
            .catch((error) => {
              throw CustomError(error, 400);
            });
          if (!user) throw CustomError("User not found", 404);
          const isMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isMatch) {
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              phone: user.phone,
              image: user.image,
            } as LoggedInUser;
          }
          return null;
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // @ts-ignore
    async jwt({ token, user }: { token: JWT; user: User }) {
      // const dbUser = await prisma.user.findUnique({
      //   where: {
      //     email: token.user.email,
      //   },
      //   select: {
      //     id: true,
      //     email: true,
      //     name: true,
      //     role: true,
      //   },
      // });
      const dbUser = null; //TEMP
      if (!dbUser) {
        if (user) {
          token.user = { ...user };
        }
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      return {
        ...session,
        user: {
          ...token.user,
        },
      };
    },
  },
};
