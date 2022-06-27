import { useEffect } from "react";
import React from "../pages/react";

export default function useWindowHeight() {
  const [height, setHeight] = React.useState(window.innerHeight);

  useEffect(() => {
    const resize = () => {
      setHeight(window.innerWidth);
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  
  return height;
}
