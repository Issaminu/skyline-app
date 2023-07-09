import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/my-components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="ml-36">{children}</div>
      </body>
    </html>
  );
}
