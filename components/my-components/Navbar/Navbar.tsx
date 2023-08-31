"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef, use } from "react";
import Image from "next/image";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Separator } from "@/components/ui/separator";
import UserButton from "@/components/my-components/Navbar/UserButton";
import LoadingUserButton from "@/components/my-components/Navbar/LoadingUserButton";
import lightLogo from "@/public/1337 white.png";
import darkLogo from "@/public/1337.png";
import { useTheme } from "next-themes";
import { useClerk, useUser } from "@clerk/nextjs";
import { CloseRounded } from "@mui/icons-material";
import useMenu from "@/components/my-components/Navbar/useMenu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

const Navbar = () => {
  const { signOut } = useClerk();
  const path = usePathname();
  const [imageUrl, setImageUrl] = useState(lightLogo);
  const { user } = useUser();
  const { theme, setTheme } = useTheme();
  const { isMenuOpen, toggleMenu } = useMenu();
  const router = useRouter();
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

  const logOut = async () => {
    await signOut(() => router.push("/login"));
  };

  return (
    <div>
      <div>
        {/* Desktop menu */}
        <aside className="hidden sm:block">
          <div className="select-none flex flex-col w-32 h-screen fixed items-center border-r border-r-border">
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
        </aside>
      </div>
      {/* Mobile menu */}
      <div
        className={`sm:hidden bg-background  w-full flex flex-col ${
          isMenuOpen && "inset-0 fixed"
        }`}
      >
        <header
          className={cn(
            isMenuOpen ? "" : "border-b border-b-border",
            "select-none h-16 flex items-center justify-between pl-4 fixed w-full bg-background"
          )}
        >
          <div className="flex justify-between items-center">
            <Link href="/buildings">
              <Image
                src={imageUrl}
                alt="logo"
                width={60}
                priority={true}
                loading="eager"
                className="py-4 select-none"
              />
            </Link>
          </div>
          <div className="h-full">
            <Button
              type="button"
              variant={"ghost"}
              className="h-full shadow-none text-foreground bg-background hover:bg-background"
              onClick={() => {
                toggleMenu();
              }}
            >
              {isMenuOpen ? (
                <div className="rounded-full border p-2 hover:bg-black/10 shadow-lg">
                  <CloseRounded />
                </div>
              ) : (
                <div className="rounded-full border p-2 hover:bg-black/10">
                  <MenuRoundedIcon />
                </div>
              )}
            </Button>
          </div>
        </header>
        {isMenuOpen && (
          <div className="px-6 flex flex-col justify-between select-none grow mt-16">
            <nav>
              {user && (
                <>
                  <div className="flex flex-col justify-between items-center  rounded-md pt-4 px-4 mt-4">
                    <div className="flex flex-row w-full justify-between items-center">
                      <div className="flex flex-col">
                        <p className="font-semiBold">
                          {user.firstName + " " + user.lastName}
                        </p>
                        <p className="font-light">
                          {user.emailAddresses[0].emailAddress}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={user.imageUrl}
                          alt={`${user.firstName} ${user.lastName}'s profile picture`}
                          width={30}
                          height={30}
                          priority={true}
                          className="rounded-full"
                        />
                      </div>
                    </div>
                    <Button
                      onClick={logOut}
                      variant={"ghost"}
                      className="h-12 w-full flex justify-center text-md font-normal mt-4 border text-foreground active:bg-black/20 dark:active:bg-white/20"
                    >
                      Sign out
                    </Button>
                  </div>
                </>
              )}
              <p className="text-2xl font-semibold mt-6 mb-2">Navigation</p>
              {navigation.map((item) => (
                <Link href={item.href} key={item.name} onClick={toggleMenu}>
                  <Button
                    type="button"
                    variant={"ghost"}
                    className={cn(
                      item.current ? "font-semibold" : "font-normal",
                      "h-12 w-full flex justify-start text-md text-foreground active:bg-black/20 dark:active:bg-white/20"
                    )}
                  >
                    {/* <item.icon /> */}
                    {item.name}
                  </Button>
                  <Separator className="bg-black/20 dark:bg-gray-700" />
                </Link>
              ))}
            </nav>

            <div className="flex flex-col">
              <p className="text-2xl font-semibold mt-6 mb-2">Ressources</p>
              <div className="flex flex-row justify-between items-center h-12 font-normal text-foreground pl-4">
                Theme
                <Select
                  onValueChange={(value) => setTheme(value)}
                  defaultValue={theme}
                >
                  <SelectTrigger className="w-36">
                    <SelectValue placeholder={theme} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator className="bg-black/20 dark:bg-gray-700" />
              <Button
                asChild
                variant={"ghost"}
                className="h-12 w-full flex justify-start text-md font-normal text-foreground active:bg-black/20 dark:active:bg-white/20"
              >
                <Link
                  target="_blank"
                  href="https://github.com/Issaminu/skyline-app"
                  className="flex flex-row justify-between items-center"
                >
                  Repository
                  <OpenInNewRoundedIcon
                    className="text-black/50 dark:text-white/70"
                    fontSize="small"
                  />
                </Link>
              </Button>
              <Separator className="bg-black/20 dark:bg-gray-700" />
              <Button
                asChild
                variant={"ghost"}
                className="h-12 w-full flex justify-start text-md font-normal text-foreground active:bg-black/20 dark:active:bg-white/20"
              >
                <Link
                  target="_blank"
                  href="https://github.com/Issaminu/skyline-app/blob/main/Rapport%20de%20Projet%20de%20Stage%201337.pdf"
                  className="flex flex-row justify-between items-center"
                >
                  Report
                  <OpenInNewRoundedIcon
                    className="text-black/50 dark:text-white/70"
                    fontSize="small"
                  />
                </Link>
              </Button>
              <Separator className="bg-black/20 dark:bg-gray-700" />
              <Button
                asChild
                variant={"ghost"}
                className="h-12 w-full flex justify-start text-md font-normal text-foreground active:bg-black/20 dark:active:bg-white/20"
              >
                <Link
                  target="_blank"
                  href="mailto:boubcher.issam@gmail.com"
                  className="flex flex-row justify-between items-center"
                >
                  Contact
                  <OpenInNewRoundedIcon
                    className="text-black/50 dark:text-white/70"
                    fontSize="small"
                  />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
