import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { prisma } from "../../../components/prisma";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "email",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const bcrypt = require("bcrypt");
        const user = await prisma.users.findUnique({
          where: {
            email: credentials.email,
          },
          select: {
            id: true,
            email: true,
            name: true,
            password: true,
            image: true,
            accountStatus: true,
            notificationCount: true,
          },
        });
        prisma.$disconnect();
        if (user) {
          const match = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (match) {
            delete user.password;
            return user;
          } else {
            return null;
          }
        } else {
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
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          ...account,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
        };
      }

      return token;
    },

    async session({ session, token }) {
      session.user = token;
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.accessTokenExpires = token.accessTokenExpires;
      return session;
    },
  },
};

export default NextAuth(authOptions);
