import "../styles/globals.css";
import Head from "next/head";
import { SessionProvider, useSession } from "next-auth/react";
// import { Router } from "next/router";
import Navbar from "../components/Navbar/Navbar";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <title>Skyline 1337</title>
        </Head>
        <div style={{ width: "fit-content" }}>
          <Navbar />
        </div>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
    </>
  );
}
function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <div></div>;
  }

  return children;
}
export default MyApp;
