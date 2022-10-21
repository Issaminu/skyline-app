import "../styles/globals.css";
import Head from "next/head";
import { SessionProvider, useSession } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar/Navbar";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Skyline 1337</title>
      </Head>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          {Component.auth ? (
            <Auth>
              <Navbar />
              <Toaster />
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
          <ReactQueryDevtools position="bottom-right" />
        </QueryClientProvider>
      </RecoilRoot>
    </SessionProvider>
  );
}
function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <></>;
  }

  return children;
}
export default MyApp;
