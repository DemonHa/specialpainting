"use client";

import { useState, useEffect } from "react";

const useSmallScreenMenuHeight = (navBarHeight: number) => {
  const [height, setHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight - navBarHeight : 0,
  );

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight - navBarHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [navBarHeight]);

  return `${height}px`;
};

export default useSmallScreenMenuHeight;
