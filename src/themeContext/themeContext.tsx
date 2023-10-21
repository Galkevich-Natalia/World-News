import React, { useState } from "react";
import { ThemeContextType, themeType } from "./types";
import { Themes } from "./themes";

const initialThemeContext: ThemeContextType = {
    currentTheme: "light",
    themeStyles: Themes["light"],
    changeTheme: () => { }
}

export const ThemeContext = React.createContext<ThemeContextType>(initialThemeContext);

export const ThemeContextProvider = ({ children }: any) => {

    const [theme, setTheme] = useState<themeType>("light");

    const changeTheme = () => {
        setTheme((prev) => prev === "light" ? "dark" : "light")
    }

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