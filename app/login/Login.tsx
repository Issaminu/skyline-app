"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import logo from "../../public/1337.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GithubIcon from "@/components/icons/github-icon";
import GoogleIcon from "@/components/icons/google-icon";
import AlertIcon from "@/components/icons/alert-icon";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const loadingBarRef = useRef<LoadingBarRef>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsValid(true);
    if (loadingBarRef.current) {
      loadingBarRef.current.continuousStart();
    }
    if (emailRef.current && passwordRef.current) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res && res.error) {
        setIsLoading(false);
        if (loadingBarRef.current) {
          loadingBarRef.current.complete();
        }
        setIsValid(false);
      } else {
        router.push("/immeubles");
      }
    }
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
        <div className="mx-auto flex h-screen w-screen min-w-max flex-col justify-center bg-white px-12 shadow md:h-fit md:w-[27rem] md:rounded-2xl md:py-12">
          <LoadingBar height={3} color="#06b6d4" ref={loadingBarRef} />
          <div className="mb-10 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="flex justify-center">
              <Image
                className="mx-auto mb-6 h-8 w-auto"
                src={logo}
                alt="1337 logo"
                loading="eager"
              />
            </div>
            <h2
              className="mt-6 text-center text-3xl font-bold"
              style={{ color: "#1e212a" }}
            >
              Welcome!
            </h2>
            <p className="mt-2 text-center text-sm text-gray-900">
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
                    ? "focus:outline-cyan-600"
                    : "border-2 border-red-600 focus:outline-red-600"
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
                    ? "focus:outline-cyan-600"
                    : "border-2 border-red-600 focus:outline-red-600"
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
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-cyan-600 accent-cyan-700 hover:accent-cyan-700 focus:ring-cyan-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="h-12 w-full rounded-lg bg-cyan-700 hover:bg-cyan-800"
                >
                  <span className="w-full text-lg text-white">Continue</span>
                </Button>
                <div className="mt-3 text-sm">
                  Don&apos;t have an account? &nbsp;
                  <Link href="/signup">
                    <span className="cursor-pointer font-medium text-cyan-600 hover:text-cyan-800">
                      Sign up
                    </span>
                  </Link>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <hr className="w-[40%]" /> <span className="text-sm">OR</span>
                  <hr className="w-[40%]" />
                </div>
                <Button
                  variant="outline"
                  className="cursor-not-allowed h-12 w-full rounded-lg border-gray-400 bg-white hover:bg-gray-200"
                  disabled
                  title="Coming soon"
                >
                  <span className="flex w-full items-center justify-evenly">
                    <GoogleIcon />
                    <span className="h-full text-black">
                      Continue with Google
                    </span>
                    <span>{"  "}</span>
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="cursor-not-allowed h-12 w-full rounded-lg border-gray-400 bg-white hover:bg-gray-200"
                  disabled
                  title="Coming soon"
                >
                  <span className="flex w-full items-center justify-evenly">
                    <GithubIcon />
                    <span className="h-full text-black">
                      Continue with Github
                    </span>
                    <span>{"  "}</span>
                  </span>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
