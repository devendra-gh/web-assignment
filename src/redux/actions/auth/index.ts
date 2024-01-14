import * as types from "../../types";
import { setUserData, clearUserData } from "../../../utility/helpers";
import { ISignup } from "../../../types";

// ** Handle User Signup
export const handleSignup = (data: ISignup) => {
  return (dispatch: any) => {
    dispatch({ type: types.SIGNUP, data });
    setUserData(data);
  }
}

// ** Handle User Login
export const handleLogin = (data: ISignup) => {
  return (dispatch: any) => {
    dispatch({ type: types.LOGIN, data });
    setUserData(data);
  }
}

// ** Handle User Logout
export const handleLogout = () => {
  return (dispatch: any) => {
    dispatch({ type: types.LOGOUT })
    clearUserData();
  }
}
