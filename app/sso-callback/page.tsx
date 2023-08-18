import { AuthenticateWithRedirectCallback, clerkClient } from "@clerk/nextjs";

export const metadata = {
  title: "Loading",
};

const SSOCallback = () => {
  return (
    <div className="flex justify-center items-center text-center h-screen w-screen">
      <p className="font-bold text-2xl text-gray-800">Please wait...</p>
      <AuthenticateWithRedirectCallback />
    </div>
  );
};

export default SSOCallback;
