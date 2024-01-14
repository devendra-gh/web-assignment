import * as types from "../../types";
import { setHandleRTL } from "../../../utility/helpers";

// ** Handles RTL (Bool)
export const handleRTL = (value: string) => {
    return (dispatch: any) => {
        dispatch({ type: types.HANDLE_RTL, value });
        setHandleRTL(value);
    }
}