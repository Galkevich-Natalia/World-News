export const setUserDataToStorage = (data: any) => {
    localStorage.setItem("userData", JSON.stringify(data))
}

export const getUserDataFromStorage = () => {
    const userData = localStorage.getItem("userData")
    if (userData) {
        return JSON.parse(userData)
    } else {
        return null;
    }
}

export const removeUserDataFromStorage = () => {
    localStorage.removeItem("userData")
}