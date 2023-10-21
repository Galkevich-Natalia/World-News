import { useContext } from "react";
import { ContainerBody } from "./styledBody";
import { ThemeContext } from "../../../themeContext/themeContext";
import { ThemeContextType } from "../../../themeContext/types";

export const Body = ({ children }: any) => {

    const themeContext = useContext<ThemeContextType>(ThemeContext);

    return (
        <ContainerBody themestyles={themeContext.themeStyles}>
            {children}
        </ContainerBody>
    );
};