import { useSession } from "next-auth/react";
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
        <div className="text-3xl text-green-600 p-2">Hello Geeks!</div>
      </>
    );
  }
}
