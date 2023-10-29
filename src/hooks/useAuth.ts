import { getUserDataFromStorage } from "../store/userStore/userStore";

export function useAuth() {
    const { email, token, id } = getUserDataFromStorage()

    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
}