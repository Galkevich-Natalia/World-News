export type themeType = "light" | "dark";

export enum Colors {
    WHITE = "#FFFFFF",
    BLACK = "#3c4556",
}

export interface Theme {
    body: Colors,
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