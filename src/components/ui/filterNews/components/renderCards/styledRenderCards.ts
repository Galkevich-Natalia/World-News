import { styled } from "styled-components";
import { ThemeContextStyleProps } from "../../../../../themeContext/types";

export const ContainerPagination = styled.div<ThemeContextStyleProps>`
    display: flex;
    justify-content: center;
    margin: 60px 0 40px 0; 
    color: ${({themestyles}) => themestyles.color };
`;