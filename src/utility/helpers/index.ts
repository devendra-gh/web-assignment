import { ISignup } from "../../types";

export const setUserData = (user: ISignup) => {
    sessionStorage.setItem("auth", JSON.stringify(user));
}

export const clearUserData = () => {
    sessionStorage.removeItem("auth");
}

export const getUserData = () => {
    const auth = sessionStorage.getItem("auth");
    return auth ? JSON.parse(auth) : null;
}

export const setHandleRTL = (dir: string) => {
    sessionStorage.setItem("isRTL", dir);
}