export type themeType = "light" | "dark";

export enum Colors {
    WHITE = "#FFFFFF",
    BLACK = "#000000",
    DARKGREY = "#303236",
    TRANSPARENT = "transparent",
    GREY = "rgba(0, 0, 0, 0.5)"
}

export interface Theme {
    body: Colors,
    color: Colors,
    backgroundForm: Colors,
    shapeForm: Colors
}

export type ThemesType = Record<themeType, Theme>;

export interface ThemeContextType {
    currentTheme: themeType,
    themeStyles: Theme,
    changeTheme: () => void,
}

export interface ThemeContextStyleProps {
    themestyles: Theme
}