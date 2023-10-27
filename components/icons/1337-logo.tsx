"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import lightLogo from "@/public/1337 white.png";
import darkLogo from "@/public/1337.png";
import Image from "next/image";

const Logo = () => {
  const [themeState, setThemeState] = useState<"dark" | "light">("light");
  const { theme } = useTheme();

  useEffect(() => {
    if (theme) {
      setThemeState(theme === "dark" ? "dark" : "light");
    }
  }, [theme]);
  return (
    <Image
      className="mx-auto mb-6 h-8 w-auto"
      src={themeState === "dark" ? lightLogo : darkLogo}
      alt="1337 logo"
      loading="eager"
    />
  );
};

export default Logo;
