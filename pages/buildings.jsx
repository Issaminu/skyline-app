import { userState } from "../store/atoms";
import { useRecoilState } from "recoil";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useState, useRef } from "react";
import useWindowDimensions from "../components/windowDimensions";

const Buildings = () => {
  const { height, width } = useWindowDimensions();
  const [user, setUser] = useRecoilState(userState);
  const ref = useRef(null);
  const testFunc = (e) => {
    e.preventDefault();
    ref.current.staticStart();
    setTimeout(() => {
      ref.current.complete();
    }, 1000);
  };
  console.log(user);
  return (
    <main className="min-w-0 flex-1 border-t border-gray-200">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <LoadingBar
            containerStyle={width > 768 ? { left: "7rem", zIndex: 1 } : {}}
            height={4}
            color="#06b6d4"
            ref={ref}
          />
          <button onClick={testFunc}>Test</button>
          <div className="py-4">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          </div>
          {/* /End replace */}
        </div>
      </div>
    </main>
  );
};
Buildings.auth = true;
export default Buildings;
