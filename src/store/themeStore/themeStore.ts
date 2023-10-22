export const setThemeToLocalStorage = (value: string) => {
    localStorage.setItem("theme", value)
}

export const getThemeToLocalStorage = () => {
    return localStorage.getItem("theme")
}