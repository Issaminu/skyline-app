import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../components/prisma";
import { Router } from "next/router";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "email",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
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
        if (user) {
          // const match = await bcrypt.compare(
          //   credentials.password,
          //   user.password
          // );
          // if (match) {
          //   delete user.password;
          //   return user;
          // } else {
          //   return null;
          // }
          return user;
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
  events: {
    async signIn(message) {
      // do stuff here
    },
    async signOut(message) {
      // do stuff here
    },
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
