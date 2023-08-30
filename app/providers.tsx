"use client";
import { routeIsPublic } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/my-components/Navbar/Navbar";
import { usePathname } from "next/navigation";

function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <ThemeProvider enableSystem={false} attribute="class">
        <Navbar />
        <div className={`${routeIsPublic(pathname) ? "" : "sm:ml-32"}`}>
          {children}
        </div>
      </ThemeProvider>
    </>
  );
}

export default Providers;
