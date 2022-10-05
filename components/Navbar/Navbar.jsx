import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { useSession, signOut } from "next-auth/react";
import logo from "../../public/1337.png";
import Image from "next/image";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { XIcon, MenuAlt2Icon } from "@heroicons/react/outline";
const navigation = [
  {
    name: "Immeubles",
    href: "/buildings",
    icon: HomeRoundedIcon,
    current: true,
  },
  {
    name: "Cotisations",
    href: "#",
    icon: MonetizationOnRoundedIcon,
    current: false,
  },
  { name: "Dépenses", href: "#", icon: EngineeringRoundedIcon, current: false },
  { name: "Invitations", href: "#", icon: EmailRoundedIcon, current: false },
  // { name: "Documents", href: "#", icon: InboxIcon, current: false },
  // { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const router = useRouter();
  const { data: session, status } = useSession();
  if (!session) {
    return null;
  }
  if (status != "loading") {
    return (
      <>
        <div className="h-full min-h-screen float-left flex">
          {/* Narrow sidebar */}
          <div className="hidden w-28 bg-cyan-900 overflow-y-auto md:block">
            <div
              style={{ height: "100%" }}
              className="flex flex-col justify-between"
            >
              <div className="w-full py-6 flex flex-col items-center">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                    alt="Workflow"
                  />
                </div>
                <div className="flex-1 mt-6 w-full px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-cyan-800 text-white"
                          : "text-cyan-100 hover:bg-cyan-800 hover:text-white",
                        "group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-white"
                            : "text-cyan-500 group-hover:text-white",
                          "h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      <span className="mt-2">{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center flex-col mt-20 w-full px-2 space-y-1 mb-2">
                <a
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  key={session.user.name}
                  href="#"
                  className={classNames(
                    "text-cyan-100 hover:bg-cyan-800 hover:text-white",
                    "group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
                  )}
                >
                  <Image
                    src={session.user.picture}
                    class="block mx-auto h-10 w-10 rounded-full"
                    width={50}
                    height={50}
                  />
                  <div className="flex text-center">
                    <span className="mt-2">{session.user.name}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Transition.Root show={mobileMenuOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-40 flex md:hidden"
              onClose={setMobileMenuOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="relative max-w-xs w-full bg-cyan-900 pt-5 pb-4 flex-1 flex flex-col">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-1 right-0 p-1">
                      <button
                        type="button"
                        className="h-12 w-12 focus:rounded-lg flex items-center justify-center focus:outline-none "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                        <span className="sr-only">Close sidebar</span>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-shrink-0 px-4 flex items-center">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                      alt="1337 logo"
                    />
                  </div>

                  <div
                    style={{ height: "100%" }}
                    className="flex flex-col justify-between"
                  >
                    <div className="flex-1 mt-6 w-full px-2 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          style={{ height: "3rem" }}
                          className={classNames(
                            item.current
                              ? "bg-cyan-800 text-white"
                              : "text-cyan-100 hover:bg-cyan-800 hover:text-white",
                            "group py-2 px-3 rounded-md flex items-center text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-white"
                                : "text-cyan-500 group-hover:text-white",
                              "mr-3 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          <span>{item.name}</span>
                        </a>
                      ))}
                    </div>
                    <div>
                      <a
                        onClick={() => signOut({ callbackUrl: "/login" })}
                        key={session.user.name}
                        href="#"
                        className={classNames(
                          "text-cyan-100 hover:bg-cyan-800 hover:text-white",
                          "group w-full p-3 rounded-md flex items-center text-sm font-medium"
                        )}
                      >
                        <Image
                          src={session.user.picture}
                          class="block mx-auto h-4 w-4 rounded-full"
                          width={35}
                          height={35}
                        />
                        <div>
                          <span className="ml-4">{session.user.name}</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </Dialog>
          </Transition.Root>
        </div>
        <div className="flex-1 flex flex-col md:hidden overflow-hidden">
          <header className="w-full">
            <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
              <button
                type="button"
                className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </header>
        </div>
      </>
    );
  }
}
