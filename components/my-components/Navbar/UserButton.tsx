"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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
import { useRouter } from "next/navigation";
import Brightness7RoundedIcon from "@mui/icons-material/Brightness7Rounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";
import type { UserResource } from "@clerk/types";
import { useClerk } from "@clerk/nextjs";

const UserButton = ({
  user,
  setOpenProfile,
}: {
  user: UserResource;
  setOpenProfile: any;
}) => {
  const { openUserProfile, signOut } = useClerk();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const logout = () => {
    signOut();
    router.push("/login");
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            id="UserButton"
            type="button"
            variant={"ghost"}
            onClick={() => setOpen(!open)}
            className="focus-visible:ring-0 gap-6 w-28 h-fit py-2"
          >
            <div className="flex flex-col items-center gap-3">
              <Image
                src={user.imageUrl}
                alt={`${user.firstName} ${user.lastName}'s profile picture`}
                width={90}
                height={90}
                priority={true}
                className="rounded-full"
              />
              {user.firstName + " " + user.lastName}
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56 py-2 rounded-xl ml-1 shadow-none"
          side="left"
        >
          <DropdownMenuLabel className="pb-2">
            <div>
              {user.firstName + " " + user.lastName}
              <p className="font-normal">
                {user.emailAddresses[0].emailAddress}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <button
              onClick={() => openUserProfile()}
              className="w-full h-full cursor-pointer active:bg-primary/40"
            >
              <AccountCircleRoundedIcon className="h-4 mr-1" />
              Profile
            </button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            asChild
            className="cursor-pointer active:bg-primary/40"
          >
            <Link
              target="_blank"
              href="https://github.com/Issaminu/skyline-app"
            >
              <GitHubIcon className="h-4 mr-1" />
              Repository
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="cursor-pointer active:bg-primary/40"
          >
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
                      : "mb-1 cursor-pointer active:bg-primary/40"
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
                      ? "bg-primary/70 active:bg-primary mt-1 text-primary-foreground hover:pointer-events-none"
                      : "mt-1 cursor-pointer active:bg-primary/40"
                  }
                >
                  <DarkModeIcon className="h-4 mr-1" />
                  Dark
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <button onClick={logout} className="w-full h-full cursor-pointer">
              <LogoutRoundedIcon className="h-4 mr-1" />
              Log Out
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserButton;
