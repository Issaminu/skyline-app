import { useSession, signIn, signOut, getCsrfToken } from "next-auth/react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import logo1337 from "../public/1337.jpg";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  if (session) {
    router.push("/buildings");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("/api/signupAPI", {
        email: email,
        name: name,
        phone: phone,
        password: password,
      })
      .then(async (res) => {
        if (res.status === 200) {
          const res = await signIn("credentials", {
            redirect: false,
            email: email,
            password: password,
            callbackUrl: `${window.location.origin}`,
          });
          if (res.ok) {
            Router.push("/buildings");
          }
        }
      });
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
                Welcome!
              </h2>
              <p className="mt-2 text-center text-sm text-gray-900">
                Please sign up with your email below
              </p>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                />
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Full name *"
                    autoComplete="name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  />
                </div>
              </div>
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
                    placeholder="Email address *"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Password *"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                />
                <div className="mt-1">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Phone number *"
                    defaultValue={"+212"}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    autoComplete="phone"
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
                  <div className="flex items-center h-full">Sign up</div>
                </button>
              </div>
              <div className="text-sm">
                Already have an account? &nbsp;
                <Link href="/login">
                  <span className="font-medium cursor-pointer text-cyan-600 hover:text-cyan-500">
                    Sign in
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
