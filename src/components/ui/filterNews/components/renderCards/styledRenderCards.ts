import { styled } from "styled-components";
import { ThemeContextStyleProps } from "../../../../../contexts/themeContext/types";

export const ContainerCards = styled.div`
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContainerPagination = styled.div<ThemeContextStyleProps>`
    display: flex;
    justify-content: center;
    margin: 60px 0 40px 0; 
    color: ${({themestyles}) => themestyles.color };
`;