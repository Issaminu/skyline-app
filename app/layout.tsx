"use client";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/my-components/Navbar/Navbar";
import Providers from "@/app/providers";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";
import { routeIsLoginOrSignup } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    session: Session;
  };
}) {
  const path = usePathname();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Skyline-app | 1337</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Providers session={params.session}>
          <Navbar />
          <div className={`${routeIsLoginOrSignup(path) ? "" : "sm:ml-36"}`}>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
