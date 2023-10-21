import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { ContIconTheme, ThemeButton } from "./styledToggleBtnTheme";
import { ThemeContext } from "../../../../../../themeContext/themeContext";
import { ThemeContextType } from "../../../../../../themeContext/types";

export const ToggleButtonTheme = () => {

    const themeContext = useContext<ThemeContextType>(ThemeContext);

    return (
        <ContIconTheme>
            <ThemeButton type="button" onClick={themeContext.changeTheme} >
                <FontAwesomeIcon
                    size="xl"
                    color="white"
                    icon={themeContext.currentTheme === "light" ? faSun : faMoon} />
            </ThemeButton>
        </ContIconTheme>
    );
};