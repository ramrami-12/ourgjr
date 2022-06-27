import { useEffect } from "react";
import React from "../pages/react";

export default function useWindowWidth() {
  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  
  return width;
}
