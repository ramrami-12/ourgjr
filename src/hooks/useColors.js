import { useState } from "react";
import { useReduxState } from "./useReduxState";

/* MAINCOLOR(LIGHT) : #92B4EC */
/* MAINCOLOR(DARK) : #FFE69A: */
export function useColors() {
    const state = useReduxState();
    const [textColor, setTextColor] = useState("black");
    const [pointColor, setPointColor] = useState("");

}