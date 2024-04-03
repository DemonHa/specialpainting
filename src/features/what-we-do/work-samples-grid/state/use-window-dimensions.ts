import { useEffect, useState } from "react";

export const useWindowDimensions = () => {
  // Initialize state with undefined or a fallback value
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    // Ensure window is defined before setting up the event listener
    if (typeof window === "undefined") {
      return;
    }

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return dimensions;
};
