import { useSession, signIn, signOut, getCsrfToken } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Router from "next/router";

export default function Home() {
  const { data: session, status } = useSession();
  if (session) {
    Router.push("/buildings");
  }
  if (status != "loading") {
    return (
      <>
        <div className="text-3xl text-green-600 p-2">Hello !</div>
        {session ? (
          <div
            className="text-3xl text-green-600 p-2"
            style={{ cursor: "pointer" }}
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            You are signed in, click here to sign out
          </div>
        ) : (
          <div
            className="text-3xl text-red-600 p-2"
            style={{ cursor: "pointer" }}
            onClick={() => {
              Router.push("/login");
            }}
          >
            You are not signed in, click here to sign in
          </div>
        )}
      </>
    );
  }
}
