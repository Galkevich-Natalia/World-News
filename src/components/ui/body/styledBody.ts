import { styled } from "styled-components";
import { ThemeContextStyleProps } from "../../../contexts/themeContext/types";

export const ContainerBody = styled.div<ThemeContextStyleProps>`
    background-color: ${({themestyles}) => themestyles.body };
`;