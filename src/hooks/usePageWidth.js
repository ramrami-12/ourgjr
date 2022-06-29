import { useState, useEffect } from "react";

export const usePageWidth = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // using handler to retrieve window size
    function handleResize() {
      // initializer
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Adding Event listener
    window.addEventListener("resize", handleResize);

    // call handler right away so state gets updated with initial window size
    handleResize();

    // remove event listener once its been called
    // you can remove this statement to have it run all the time 
    // in the background
    return () => window.removeEventListener("resize", handleResize);
  }, []); // take [] to make the hook run incrementally
  return windowSize;
};
