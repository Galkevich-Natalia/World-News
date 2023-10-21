import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { ContIconTheme, ThemeButton } from "./styledToggleBtnTheme";

export const ToggleButtonTheme = () => {

    const [isIconTheme, setIsIconTheme] = useState<boolean>(false)

    const handleTheme = () => {
        setIsIconTheme(!isIconTheme)
    }

    return (
        <ContIconTheme>
            <ThemeButton type="button" onClick={handleTheme} >
                <FontAwesomeIcon
                    size="xl"
                    color="white"
                    icon={isIconTheme ? faSun : faMoon} />
            </ThemeButton>
        </ContIconTheme>
    );
};