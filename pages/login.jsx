import { useSession, signIn, signOut, getCsrfToken } from "next-auth/react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import logo1337 from "../public/1337.jpg";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (session) {
    router.push("/buildings");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("entered handleSubmit()");
    const res = await signIn("credentials", {
      redirect: false,
      email: e.target.email.value,
      password: e.target.password.value,
      callbackUrl: `${window.location.origin}`,
    });
    if (res.ok) {
      Router.push("/buildings");
    }
  };

  return (
    <>
      <div
        className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"
        style={{
          layout: "fit",
          background: "url('/login-bg.webp') no-repeat center center fixed",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <div className="mt-8 sm:mx-auto sm:w-96 sm:max-w-md">
          <div className="bg-white pt-14 pb-6 px-4 shadow sm:rounded-2xl sm:px-12">
            <div className="sm:mx-auto mb-10 sm:w-full sm:max-w-md">
              <div className="flex justify-center">
                <Image
                  className="mx-auto h-12 w-auto"
                  src={logo1337}
                  width="50%"
                  height="18%"
                  alt="1337 logo"
                />
              </div>
              <h2
                className="mt-6 text-center text-3xl font-semibold "
                style={{ color: "#1e212a" }}
              >
                Welcome
              </h2>
              <p className="mt-2 text-center text-sm text-gray-900">
                Please sign in to your account
              </p>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                />
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                />
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:text-cyan-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full h-11 flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-cyan-700 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  <div className="flex items-center h-full">Sign in</div>
                </button>
              </div>
              <div className="text-sm">
                Don&apos;t have an account? &nbsp;
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:text-cyan-500"
                >
                  Sign up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
