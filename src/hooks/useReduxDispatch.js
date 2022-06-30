import { useContext } from "react";
import ReduxContext from "../contexts/ReduxContext";

export function useReduxDispatch() {

    const display = useContext(ReduxContext);
    return display.dispatch;
  }