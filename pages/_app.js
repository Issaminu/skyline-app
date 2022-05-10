// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { UserProvider } from '@auth0/nextjs-auth0';
function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <UserProvider>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </UserProvider>

  );
}

export default MyApp;
