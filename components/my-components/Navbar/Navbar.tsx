"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const navigation = [
    {
      name: "Immeubles",
      href: "/immeubles",
      icon: HomeRoundedIcon,
      current: "/immeubles" === path,
    },
    {
      name: "Cotisations",
      href: "/cotisations",
      icon: MonetizationOnRoundedIcon,
      current: "/cotisations" === path,
    },
    {
      name: "Dépenses",
      href: "/depenses",
      icon: EngineeringRoundedIcon,
      current: "/depenses" === path,
    },
    {
      name: "Invitations",
      href: "/invitations",
      icon: EmailRoundedIcon,
      current: "/invitations" === path,
    },
  ];
  return (
    <div>
      {/* Desktop menu */}
      <div className="hidden sm:block">
        <div className="select-none flex flex-col w-32 bg-primary-dark h-screen fixed items-center">
          <Image
            src="/1337 white.png"
            alt="logo"
            width={60}
            height={80}
            className="mt-6 select-none"
          />
          <div className="h-screen flex flex-col justify-between">
            <div className="py-2 px-2 gap-6">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <Button
                    type="button"
                    className={cn(
                      item.current
                        ? "shadow-md text-primary-foreground bg-primary-dark brightness-125 rounded-lg"
                        : "shadow-none text-primary-foreground/60 bg-primary-dark hover:brightness-110 active:brightness-70 hover:text-primary-foreground/80",
                      "w-28 mb-2 h-28 hover:bg-primary-dark"
                    )}
                  >
                    <div className="flex flex-col justify-center items-center gap-1">
                      <item.icon />
                      <div>{item.name}</div>
                    </div>
                  </Button>
                </Link>
              ))}
            </div>
            <div className="py-2 px-2 justify-center items-center">
              <Button
                type="button"
                className="gap-6 w-28 flex flex-col mb-4 py-2 h-28 hover:bg-primary-dark shadow-none text-primary-foreground/60 bg-primary-dark hover:brightness-110 active:brightness-70 hover:text-primary-foreground/80"
              >
                <Image
                  src="/1337 white.png"
                  alt="logo"
                  width={90}
                  height={90}
                />
                Issam Boubcher
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="sm:hidden">
        <div className="bg-primary-dark h-16 flex items-center justify-between px-4">
          <div className="flex justify-between items-center">
            <Link href="/immeubles">
              <Image src="/1337 white.png" alt="logo" width={90} height={90} />
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
  );
};

export default Navbar;
