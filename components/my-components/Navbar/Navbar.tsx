"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { cn, routeIsPublic } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Separator } from "@/components/ui/separator";
import UserButton from "@/components/my-components/Navbar/UserButton";
import LoadingUserButton from "@/components/my-components/Navbar/LoadingUserButton";
import lightLogo from "@/public/1337 white.png";
import darkLogo from "@/public/1337.png";
import { useTheme } from "next-themes";
import { useUser } from "@clerk/nextjs";

const Navbar = () => {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(lightLogo);
  const { user } = useUser();
  const { theme } = useTheme();

  const navigation = [
    {
      name: "Buildings",
      href: "/buildings",
      icon: HomeRoundedIcon,
      current: "/buildings" === path,
    },
    {
      name: "Dues",
      href: "/dues",
      icon: MonetizationOnRoundedIcon,
      current: "/dues" === path,
    },
    {
      name: "Expenses",
      href: "/expenses",
      icon: EngineeringRoundedIcon,
      current: "/expenses" === path,
    },
    {
      name: "Invitations",
      href: "/invitations",
      icon: EmailRoundedIcon,
      current: "/invitations" === path,
    },
  ];

  useEffect(() => {
    if (theme === "dark") {
      setImageUrl(lightLogo);
    } else {
      setImageUrl(darkLogo);
    }
  }, [theme]);
  if (routeIsPublic(path)) return null;

  return (
    <>
      <div>
        {/* Desktop menu */}
        <div className="hidden sm:block">
          <div className="select-none flex flex-col w-32 bg-appBackground h-screen fixed items-center border-r border-r-border">
            <Image
              src={imageUrl}
              alt="logo"
              width={60}
              priority={true}
              loading="eager"
              className="mt-6 mb-6 select-none"
            />
            <div className="h-screen flex flex-col justify-between">
              <div className="py-2 px-2 gap-6">
                {navigation.map((item) => (
                  <Link href={item.href} key={item.name}>
                    <Button
                      type="button"
                      variant={"ghost"}
                      className={cn(
                        item.current
                          ? "shadow-sm rounded-lg bg-black/10 hover:bg-dark/20 dark:bg-white/10"
                          : "shadow-none active:bg-black/20 dark:active:bg-white/20",
                        "w-28 mb-2 h-28 transition-none"
                      )}
                    >
                      <div className="flex flex-col justify-center items-center gap-1">
                        <div>
                          <item.icon />
                        </div>
                        <div>{item.name}</div>
                      </div>
                    </Button>
                  </Link>
                ))}
              </div>
              <div className="py-2 px-2 justify-center items-center">
                {user != null ? (
                  <UserButton user={user} />
                ) : (
                  <LoadingUserButton />
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className="sm:hidden">
          <div className="bg-primary-dark h-16 flex items-center justify-between px-4">
            <div className="flex justify-between items-center">
              <Link href="/buildings">
                <Image
                  src="/1337 white.png"
                  alt="logo"
                  width={90}
                  height={90}
                />
              </Link>
            </div>
            <div className="h-full">
              <Button
                type="button"
                className="rounded-md h-full shadow-none text-white bg-primary-dark hover:bg-primary-dark active:bg-primary-dark active:brightness-90 py-4"
                onClick={() => setOpen(!open)}
              >
                <MenuRoundedIcon />
              </Button>
            </div>
          </div>
          {open && (
            <div className="h-screen fixed w-full px-4 overflow-x-hidden bg-primary-dark">
              <div>
                {navigation.map((item) => (
                  <Link href={item.href} key={item.name}>
                    <Button
                      type="button"
                      className="w-full justify-start  h-16 hover:bg-primary-dark shadow-none text-primary-foreground/60 bg-primary-dark hover:brightness-110 active:brightness-70 hover:text-primary-foreground/80"
                    >
                      <div className="flex flex-row items-center text-lg gap-3 h-8">
                        <item.icon />
                        <div>{item.name}</div>
                      </div>
                    </Button>
                    <Separator className="bg-primary brightness-75 h-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
