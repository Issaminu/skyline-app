import { createTheme, NextUIProvider, globalCss } from "@nextui-org/react"
import AuthWrapper from "../components/AuthWrapper";
import { UserProvider, useUser } from '@auth0/nextjs-auth0';
import MyUser from '../components/MyUserProvider';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import '../styles/globals.css';
import Navbar from "../components/Navbar/Navbar";
import toast, { Toaster } from 'react-hot-toast';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
let user = null;
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  // let user = [];
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
      <QueryClientProvider client={queryClient}>
        {/* {user = useUser()} */}
        {/* <MyUser.Provider> */}
        <NextUIProvider theme={theme}>

          <RecoilRoot>
            <AuthWrapper>
              <Navbar />
              <Toaster />
              <Component {...pageProps} />
            </AuthWrapper>
          </RecoilRoot>
        </NextUIProvider>

        {/* </MyUser.Provider> */}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </UserProvider>
  );
}

export default MyApp;
