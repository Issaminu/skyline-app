"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Session } from "next-auth";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Brightness7RoundedIcon from "@mui/icons-material/Brightness7Rounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";

const UserButton = ({ session }: { session: Session }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            id="UserButton"
            type="button"
            onClick={() => setOpen(!open)}
            className="bg-appBackground dark:text-white focus-visible:ring-0 gap-6 w-28 h-fit py-2 shadow-none text-black hover:bg-primary/20"
          >
            <div className="flex flex-col items-center gap-3">
              <Image
                src={session.user.image}
                alt={`${session.user.name}'s profile picture`}
                width={90}
                height={90}
                priority={true}
                className="rounded-full"
              />
              {session.user.name}
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56 py-2 rounded-xl ml-1 shadow-none text-foreground"
          side="left"
        >
          <DropdownMenuLabel className="pb-2">
            <div>
              {session.user.name}
              <p className="font-normal">{session.user.email}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <AccountCircleRoundedIcon className="h-4 mr-1" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link
              target="_blank"
              href="https://github.com/Issaminu/skyline-app"
            >
              <GitHubIcon className="h-4 mr-1" />
              Repository
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link
              target="_blank"
              href="https://github.com/Issaminu/skyline-app/blob/main/Rapport%20de%20Projet%20de%20Stage%201337.pdf"
            >
              <ArticleRoundedIcon className="h-4 mr-1" />
              Report
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="hover:text-primary">
              <Brightness7RoundedIcon className="h-4 mr-1" />
              Theme
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  onClick={() => {
                    setTheme("light");
                  }}
                  className={
                    theme == "light"
                      ? "bg-primary/70 text-primary-foreground hover:pointer-events-none"
                      : "mb-1 cursor-pointer"
                  }
                >
                  <LightModeIcon className="h-4 mr-1 hover:pointer-events-none" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setTheme("dark");
                  }}
                  className={
                    theme == "dark"
                      ? "bg-primary/70 mt-1 text-primary-foreground hover:pointer-events-none"
                      : "mt-1 cursor-pointer"
                  }
                >
                  <DarkModeIcon className="h-4 mr-1" />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    setTheme("system");
                  }}
                  className={
                    theme == "system"
                      ? "bg-primary/70 mt-1 text-primary-foreground hover:pointer-events-none"
                      : "mt-1 cursor-pointer"
                  }
                >
                  <DesktopWindowsRoundedIcon className="h-4 mr-1" />
                  System
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              signOut({ callbackUrl: `${window.location.origin}/login` });
            }}
            className="cursor-pointer"
          >
            <LogoutRoundedIcon className="h-4 mr-1" />
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserButton;
