import { useEffect, useState, useContext } from "react";
import ReduxContext from "../contexts/ReduxContext";

export function useReduxState() {
    const display = useContext(ReduxContext); 
    const [state, setState] = useState(display.getState);
    useEffect(() => {
      const unsubscribe = display.subscribe(() => {
        setState(display.getState());
      });
      return () => {
        unsubscribe();
      };
    }, [display]);
    return state;
  }