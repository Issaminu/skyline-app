"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useRef } from "react";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import Logo from "@/components/icons/1337-logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GithubIcon from "@/components/icons/github-icon";
import GoogleIcon from "@/components/icons/google-icon";
import AlertIcon from "@/components/icons/alert-icon";
import { Card } from "@/components/ui/card";
import { useSignUp } from "@clerk/nextjs";
import { OAuthStrategy } from "@clerk/nextjs/dist/types/server/clerkClient";

export default function Singup() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const loadingBarRef = useRef<LoadingBarRef>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (!isLoaded) {
        return;
      }
      setIsLoading(true);
      setIsValid(true);
      if (loadingBarRef.current) {
        loadingBarRef.current.continuousStart();
      }
      if (
        emailRef.current &&
        passwordRef.current &&
        nameRef.current &&
        phoneRef.current
      ) {
        const userInfo = {
          email: emailRef.current.value,
          name: nameRef.current.value,
          password: passwordRef.current.value,
          phone: phoneRef.current.value,
          //TEMP image
          image:
            "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
        };

        await signUp.create({
          emailAddress: userInfo.email,
          password: userInfo.password,
          firstName: userInfo.name.split(" ")[0],
          lastName: userInfo.name.split(" ")[1],
          unsafeMetadata: {
            phone: userInfo.phone,
            image: userInfo.image,
          },
        });

        await signUp.prepareEmailAddressVerification({
          strategy: "email_code",
        });

        setIsValid(true);
        // change the UI to our pending section.
        setPendingVerification(true);
      }
      setIsLoading(false);
      setIsValid(true);
      if (loadingBarRef.current) {
        loadingBarRef.current.complete();
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setIsValid(false);
      if (loadingBarRef.current) {
        loadingBarRef.current.complete();
      }
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async (e: any) => {
    e.preventDefault();
    console.log("hey");
    if (!isLoaded) {
      return;
    }
    setIsLoading(true);
    setIsValid(true);
    try {
      console.log("hey");

      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status !== "complete") {
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        setIsLoading(false);
        setIsValid(false);
        if (loadingBarRef.current) {
          loadingBarRef.current.complete();
        }
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/immeubles ");
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      setIsLoading(false);
      setIsValid(false);
      if (loadingBarRef.current) {
        loadingBarRef.current.complete();
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
    return signUp.authenticateWithRedirect({
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
          background: "url('/login-bg.webp') no-repeat center center",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <Card className="mx-auto pt-12 px-12 w-[27rem]">
          <LoadingBar height={3} color="#06b6d4" ref={loadingBarRef} />
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="flex justify-center">
              <Logo />
            </div>
            {!pendingVerification && (
              <div className="pb-12">
                <div className="pb-8">
                  <h2 className="mt-6 text-center text-3xl font-bold">
                    Welcome!
                  </h2>
                  <p className="mt-2 text-center text-sm">
                    Please sign up to continue
                  </p>
                </div>
                <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
                  <div>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Full name"
                      ref={nameRef}
                      minLength={8}
                      maxLength={100}
                      autoFocus
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Email"
                      ref={emailRef}
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
                        This email is already in use
                      </span>
                    </div>
                  )}
                  <div>
                    <Input
                      type="text"
                      id="phone"
                      placeholder="Phone number"
                      ref={phoneRef}
                      minLength={8}
                      maxLength={12}
                      required
                      className=""
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
                    />
                  </div>
                  <div className="flex w-full justify-between gap-16">
                    <div className="flex w-full flex-col gap-3">
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="h-12 w-full rounded-lg"
                      >
                        <span className="w-full text-lg text-white">
                          Continue
                        </span>
                      </Button>
                    </div>
                  </div>
                </form>
                <div className="flex flex-col w-full">
                  <div className="mt-3 text-sm">
                    Already have an account? &nbsp;
                    <Link href="/login">
                      <Button variant={"link"} className="pl-0 py-0">
                        Sign in
                      </Button>
                    </Link>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-4 mb-4">
                    <hr className="w-[40%]" />{" "}
                    <span className="text-sm">OR</span>
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
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {pendingVerification && (
            <div className="pb-12">
              <div className="pb-10">
                <h2
                  className="mt-6 text-center text-3xl font-bold"
                  style={{ color: "#1e212a" }}
                >
                  Almost there!
                </h2>
                <p className="mt-2 text-center text-sm text-gray-900">
                  Please enter the verification code sent to your email
                </p>
              </div>
              <form>
                <div className="flex flex-row gap-6">
                  <div className="flex flex-col gap-4">
                    <Input
                      type="text"
                      id="verificationCode"
                      required
                      value={code}
                      placeholder="Verification code..."
                      onChange={(e) => setCode(e.target.value)}
                      className={`${
                        isValid
                          ? ""
                          : "border-2 border-red-600 focus:outline-red-600 focus-visible:ring-1 focus-visible:ring-red-300"
                      }`}
                    />
                    {!isValid && (
                      <div className="flex items-center">
                        <AlertIcon />
                        <span className="text-sm font-semibold text-red-600">
                          The verification code is incorrect
                        </span>
                      </div>
                    )}
                  </div>
                  <Button disabled={isLoading} onClick={onPressVerify}>
                    Verify
                  </Button>
                </div>
              </form>
            </div>
          )}
        </Card>
      </div>
    </>
  );
}
