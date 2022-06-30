// state
// [{mode: true of false}, {textColor: 'black' or 'white'}, {conceptColor: '#FFE69A' or '#92B4EC'}]
import { CHANGE_MODE } from "./actions";

const initialState = false;
export function setMode(previousState = initialState, action){
    if (action.type === CHANGE_MODE) {
        return action.mode;
    }

    return previousState;
}