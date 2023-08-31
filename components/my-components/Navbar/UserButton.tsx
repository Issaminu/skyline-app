"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Link from "next/link";
import Brightness7RoundedIcon from "@mui/icons-material/Brightness7Rounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import { useTheme } from "next-themes";
import type { UserResource } from "@clerk/types";
import { useClerk } from "@clerk/nextjs";
import { dark as darkProfile } from "@clerk/themes";
import { useRouter } from "next/navigation";

const UserButton = ({ user }: { user: UserResource }) => {
  const { openUserProfile, signOut } = useClerk();
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const logOut = async () => {
    await signOut(() => router.push("/login"));
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
            <Button
              variant={"ghost"}
              className="w-full h-full flex justify-start cursor-pointer"
              onClick={() =>
                openUserProfile(
                  theme === "dark"
                    ? {
                        appearance: {
                          baseTheme: darkProfile,
                        },
                      }
                    : undefined
                )
              }
            >
              <AccountCircleRoundedIcon className="h-4 mr-1" />
              Profile
            </Button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Button
              asChild
              variant={"ghost"}
              className="w-full h-full flex justify-start cursor-pointer"
            >
              <Link
                target="_blank"
                href="https://github.com/Issaminu/skyline-app"
              >
                <GitHubIcon className="h-4 mr-1" />
                Repository
              </Link>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Button
              asChild
              variant={"ghost"}
              className="w-full h-full flex justify-start cursor-pointer"
            >
              <Link
                target="_blank"
                href="https://github.com/Issaminu/skyline-app/blob/main/Rapport%20de%20Projet%20de%20Stage%201337.pdf"
              >
                <ArticleRoundedIcon className="h-4 mr-1" />
                Report
              </Link>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Brightness7RoundedIcon className="h-4 mr-1" />
              Theme
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="space-y-1">
                <DropdownMenuItem
                  onClick={() => {
                    setTheme("light");
                  }}
                  className="bg-primary/80 dark:bg-transparent text-white cursor-pointer"
                >
                  <LightModeIcon className="h-4 mr-1 hover:pointer-events-none" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setTheme("dark");
                  }}
                  className="dark:bg-primary/50 bg-transparent dark:text-white cursor-pointer"
                >
                  <DarkModeIcon className="h-4 mr-1 hover:pointer-events-none" />
                  Dark
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Button
              onClick={logOut}
              variant={"ghost"}
              className="w-full h-full flex justify-start cursor-pointer"
            >
              <LogoutRoundedIcon className="h-4 mr-1" />
              Sign out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserButton;
