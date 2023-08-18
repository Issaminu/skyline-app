"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import darkLogo from "../../public/1337.png";
import lightLogo from "../../public/1337 white.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GithubIcon from "@/components/icons/github-icon";
import GoogleIcon from "@/components/icons/google-icon";
import AlertIcon from "@/components/icons/alert-icon";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { useSignIn } from "@clerk/nextjs";
import { OAuthStrategy } from "@clerk/nextjs/dist/types/server/clerkClient";

export default function Login() {
  const router = useRouter();
  const { isLoaded, signIn, setActive } = useSignIn();
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const loadingBarRef = useRef<LoadingBarRef>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }
    setIsLoading(true);
    setIsValid(true);
    if (loadingBarRef.current) {
      loadingBarRef.current.continuousStart();
    }
    if (emailRef.current && passwordRef.current) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      try {
        const result = await signIn.create({
          identifier: email,
          password,
        });

        if (result.status === "complete") {
          await setActive({ session: result.createdSessionId });
          router.push("/immeubles");
        } else {
          /*Investigate why the login hasn't completed */
          console.log("result", result);
        }
      } catch (err: any) {
        setIsLoading(false);
        setIsValid(false);
        if (loadingBarRef.current) {
          loadingBarRef.current.complete();
        }
        console.error("error", err.errors[0].longMessage);
      }
    }
  };

  const signInWith = (strategy: OAuthStrategy) => {
    if (!isLoaded) {
      return;
    }
    setIsLoading(true);
    if (loadingBarRef.current) {
      loadingBarRef.current.continuousStart();
    }
    return signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/immeubles",
    });
  };

  return (
    <>
      <div
        className="flex h-full w-full flex-col justify-center sm:px-6 lg:px-8"
        style={{
          background: "url('/login-bg.webp') no-repeat center center fixed",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <Card className="mx-auto py-12 px-12 w-[27rem]">
          <LoadingBar height={3} color="#06b6d4" ref={loadingBarRef} />
          <div className="mb-10 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="flex justify-center">
              <Image
                className="mx-auto mb-6 h-8 w-auto"
                src={theme === "dark" ? lightLogo : darkLogo}
                alt="1337 logo"
                loading="eager"
              />
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold">Welcome!</h2>
            <p className="mt-2 text-center text-sm">
              Please sign in to your account
            </p>
          </div>
          <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                ref={emailRef}
                required
                autoFocus
                className={
                  isValid
                    ? ""
                    : "border-2 border-red-600 focus:outline-red-600 focus-visible:ring-1 focus-visible:ring-red-300"
                }
              />
            </div>
            <div>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                ref={passwordRef}
                minLength={8}
                maxLength={100}
                required
                className={
                  isValid
                    ? ""
                    : "border-2 border-red-600 focus:outline-red-600 focus-visible:ring-1 focus-visible:ring-red-300"
                }
              />
            </div>
            {!isValid && (
              <div className="flex items-center">
                <AlertIcon />
                <span className="text-sm font-semibold text-red-600">
                  Email or password is incorrect
                </span>
              </div>
            )}
            <div className="flex w-full justify-between gap-16">
              <div className="flex w-full flex-col gap-3">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="h-12 w-full rounded-lg"
                >
                  <span className="w-full text-lg text-white">Continue</span>
                </Button>
              </div>
            </div>
          </form>
          <div className="flex flex-col w-full">
            <div className="mt-3 text-sm">
              Don&apos;t have an account? &nbsp;
              <Link href="/signup">
                <Button variant={"link"} className="pl-0 py-0">
                  Sign up
                </Button>
              </Link>
            </div>
            <div className="flex flex-row items-center justify-between mt-4 mb-4">
              <hr className="w-[40%]" /> <span className="text-sm">OR</span>
              <hr className="w-[40%]" />
            </div>
            <div className="space-y-4">
              <Button
                onClick={() => signInWith("oauth_google")}
                disabled={isLoading}
                variant="outline"
                className="h-12 w-full rounded-lg"
              >
                <span className="flex w-full items-center justify-evenly">
                  <GoogleIcon />
                  <span className="h-full">Continue with Google</span>
                  <span>{"  "}</span>
                </span>
              </Button>
              <Button
                onClick={() => signInWith("oauth_github")}
                disabled={isLoading}
                variant="outline"
                className="h-12 w-full rounded-lg"
              >
                <span className="flex w-full items-center justify-evenly">
                  <GithubIcon />
                  <span className="h-full">Continue with Github</span>
                  <span>{"  "}</span>
                </span>
              </Button>{" "}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
