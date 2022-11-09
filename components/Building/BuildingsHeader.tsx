import {
  CheckCircleIcon,
  OfficeBuildingIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import { userState } from "../../store/atoms";
import { NextPage } from "next";
import { atom } from "recoil";

interface Props {
  user: userState;
}

const BuildingsHeader: NextPage<Props> = (props) => {
  const user = props.user;
  return (
    <header className="md:fixed md:top-0 box-border w-full flex-shrink-0 flex flex-col bg-white border-b border-gray-200 lg:border-none">
      {/* Search bar */}
      <div className="hidden md:flex flex-1 px-4 h-24 mt-4 md:mt-4 lg:mt-0 justify-center sm:px-6 lg:p-4 w-full lg:max-w-6xl lg:mx-auto">
        <div className="flex justify-center w-full">
          <form className="w-full flex md:ml-0" action="#" method="GET">
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div
                className="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                aria-hidden="true"
              >
                <SearchIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <input
                id="search-field"
                name="search-field"
                className="w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                placeholder="Search transactions"
                type="search"
              />
            </div>
          </form>
        </div>
      </div>
      {/* Page Header */}
      <div className="bg-white shadow sm:px-6 xl:pl-0 ">
        <div className="xl:mr-24 xl:ml-6">
          <div className="py-6 md:mx-0 lg:max-w-6xl sm:flex sm:items-center sm:justify-between md:mr-24 xl:mx-auto lg:border-t lg:border-gray-200">
            {/* <div className="md:flex md:items-center md:justify-between py-6"> */}
            {/* Profile */}
            <div className="flex items-center">
              <Image
                className="object-cover hidden h-16 w-16 rounded-full sm:block"
                height={64}
                width={64}
                quality={100}
                src={user.image}
                alt="User image"
              />
              <div>
                <div className="ml-3 flex items-center">
                  <Image
                    className="object-cover h-16 w-16 rounded-full sm:hidden"
                    height={64}
                    width={64}
                    quality={100}
                    src={user.image}
                    alt="User image"
                  />
                  <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                    Buildings
                  </h1>
                </div>
                <dl className="mt-6 sm:w-64 md:w-auto flex flex-col ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                  <dt className="sr-only">Company</dt>
                  <dd className="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
                    <OfficeBuildingIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    Duke street studio
                  </dd>
                  <dt className="sr-only">Account status</dt>
                  <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                    <CheckCircleIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                      aria-hidden="true"
                    />
                    Verified account
                  </dd>
                </dl>
              </div>
            </div>
            <div className="mt-6 flex space-x-3 ml-3 sm:ml-0 sm:my-6">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Add money
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Send money
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BuildingsHeader;
