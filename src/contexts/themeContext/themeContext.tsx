import React, { useEffect, useState } from "react";
import { ThemeContextType, themeType } from "./types";
import { Themes } from "./themes";
import { getThemeToLocalStorage, setThemeToLocalStorage } from "../../store/themeStore/themeStore";

const initialThemeContext: ThemeContextType = {
    currentTheme: "light",
    themeStyles: Themes["light"],
    changeTheme: () => { }
}

interface BodyProps {
    children: React.ReactNode
}

export const ThemeContext = React.createContext<ThemeContextType>(initialThemeContext);

export const ThemeContextProvider = ({ children }: BodyProps) => {

    const [theme, setTheme] = useState<themeType>("light");

    const changeTheme = () => {
        setTheme((prev) => prev === "light" ? "dark" : "light")
    }

    useEffect(() => {
        const themeFromLocalStorage = getThemeToLocalStorage()

        themeFromLocalStorage && setTheme(themeFromLocalStorage as themeType)

    }, [])

    useEffect(() => {
        setThemeToLocalStorage(theme)
    }, [theme])

    return (
        <ThemeContext.Provider
            value={{
                currentTheme: theme,
                themeStyles: Themes[theme],
                changeTheme: changeTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};