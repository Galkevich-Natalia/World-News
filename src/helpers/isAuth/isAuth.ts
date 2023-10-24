import { getUserDataFromStorage } from "store/userStore/userStore"

export const isAuth = () => {
    const userDataFromLocalStorage = getUserDataFromStorage()

    if(userDataFromLocalStorage) {
        return true
    } else {
        return false
    }

    // userDataFromLocalStorage ? true : false;
}