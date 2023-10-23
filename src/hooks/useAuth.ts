import { useSelector } from "react-redux";
import { StoreType } from "redux/store";

export function useAuth() {
    const { email, token, id } = useSelector((state: StoreType) => state.userData);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
}