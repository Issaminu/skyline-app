"use client";
import { routeIsPublic } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/my-components/Navbar/Navbar";
import { usePathname } from "next/navigation";
import useMenu from "@/components/my-components/Navbar/useMenu";

function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isMenuOpen } = useMenu();
  return (
    <>
      <ThemeProvider enableSystem={false} attribute="class">
        {routeIsPublic(pathname) ? (
          <div>{children}</div>
        ) : (
          <>
            <Navbar />
            <div className="sm:ml-32 mt-16 sm:mt-0">
              {!isMenuOpen && children}
            </div>
          </>
        )}
      </ThemeProvider>
    </>
  );
}

export default Providers;
