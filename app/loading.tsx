"use client";

import { useEffect, useRef } from "react";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";

const Loading = () => {
  const loadingBarRef = useRef<LoadingBarRef>(null);
  useEffect(() => {
    const loadingBar = loadingBarRef.current;
    if (loadingBar) {
      setTimeout(() => loadingBar.continuousStart(), 100);
    }
    return () => {
      if (loadingBar) {
        loadingBar.complete();
      }
    };
  }, []);

  return <LoadingBar height={3} color="#06b6d4" ref={loadingBarRef} />;
};

export default Loading;
