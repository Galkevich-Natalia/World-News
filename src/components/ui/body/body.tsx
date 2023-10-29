import { useContext } from "react";

import { ThemeContext } from "../../../contexts/themeContext/themeContext";
import { ThemeContextType } from "../../../contexts/themeContext/types";

import { ContainerBody } from "./styledBody";

interface BodyProps {
    children: React.ReactNode
}

export const Body = ({ children }: BodyProps) => {

    const themeContext = useContext<ThemeContextType>(ThemeContext);

    return (
        <ContainerBody themestyles={themeContext.themeStyles}>
            {children}
        </ContainerBody>
    );
};