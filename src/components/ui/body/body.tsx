import { useContext } from "react";
import { ContainerBody } from "./styledBody";
import { ThemeContext } from "../../../themeContext/themeContext";
import { ThemeContextType } from "../../../themeContext/types";

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