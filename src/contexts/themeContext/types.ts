export type themeType = "light" | "dark";

export enum Colors {
    WHITE = "#FFFFFF",
    BLACK = "#000000",
    DARKGREY = "#3c4556",
    TRANSPARENT = "transparent"
}

export interface Theme {
    body: Colors,
    color: Colors,
    backgroundForm: Colors
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