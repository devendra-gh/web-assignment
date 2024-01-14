import { useSelector } from "react-redux";
import { getUserData } from "../../../utility/helpers";

export function useUserData() {
    let auth = getUserData();
    auth = JSON.stringify(auth);
    auth = auth && JSON.parse(auth);
    return useSelector((state: { [Key: string]: any }) => ({
        auth: state?.auth?.token ? state?.auth : auth
    }));
}
