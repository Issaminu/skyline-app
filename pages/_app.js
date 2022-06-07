import { createTheme, NextUIProvider, globalCss } from "@nextui-org/react"
import AuthWrapper from "../components/AuthWrapper";
import { UserProvider, useUser } from '@auth0/nextjs-auth0';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import '../styles/globals.css';
import Navbar from "../components/Navbar/Navbar";
import toast, { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();
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
    <UserProvider>
      <NextUIProvider theme={theme}>
        <AuthWrapper>
          <QueryClientProvider client={queryClient}>
            <Navbar />
            <Toaster />
            <Component {...pageProps} />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </AuthWrapper>
      </NextUIProvider>
    </UserProvider>
  );
}

export default MyApp;
