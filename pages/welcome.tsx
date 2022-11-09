import { useSession, signIn, signOut } from "next-auth/react";
import Router from "next/router";
const Welcome = () => {
  const { data: session } = useSession();
  if (session) {
    // Router.push("/buildings");
    console.log(session);
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut({ callbackUrl: "/login" })}>
          Sign out
        </button>
      </>
    );
  }
};
Welcome.auth = true;
export default Welcome;
