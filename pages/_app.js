import { createTheme, NextUIProvider, Text } from "@nextui-org/react"
// import { SessionProvider } from "next-auth/react";
import AuthWrapper from "../components/AuthWrapper";
// import { NextUIProvider } from '@nextui-org/react';
import { UserProvider } from '@auth0/nextjs-auth0';

import '../styles/globals.css';
import Navbar from "../components/Navbar/Navbar";
function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      space: {},
      fonts: {
        sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        mono: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace'
        // }

      }
    }
  })
  return (
    // 2. Use at the root of your app
    // <SessionProvider session={pageProps.session}>
    <UserProvider>
      <NextUIProvider theme={theme}>
        <AuthWrapper>
          <Navbar />
          <Component {...pageProps} />
        </AuthWrapper>
      </NextUIProvider>
    </UserProvider>

    /* // </SessionProvider> */

  );
}

export default MyApp;
