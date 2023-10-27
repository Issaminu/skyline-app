import "@/styles/globals.css";
import Providers from "@/app/providers";
import { headers } from "next/headers";
import localFont from "next/font/local";
import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { prettifyPathname } from "@/lib/utils";

const inter = localFont({
  src: "../public/fonts/Inter.ttf",
  display: "swap",
  variable: "--font-inter",
});
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const headersList = headers();
  const pathname = headersList.get("x-url") || "DefaultTitle";
  const title = prettifyPathname(pathname);
  return { title: title };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning is used to prevent a warning when using next-themes */}
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <ClerkProvider>
        <body className={`${inter.className}`}>
          <Providers>{children}</Providers>
        </body>
      </ClerkProvider>
    </html>
  );
}
