import { styled } from "styled-components";
import { ThemeContextStyleProps } from "../../../contexts/themeContext/types";

export const ContainerContactUs = styled.div`
    max-width: 950px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
    min-height: 70vh;
`;

export const Wrapper = styled.div`
    padding: 50px 0;
`;

export const Title = styled.h1<ThemeContextStyleProps>`
    text-align: center;
    color: ${({themestyles}) => themestyles.color };
    padding-bottom: 30px;
`;

export const TextItem = styled.p<ThemeContextStyleProps>`
    line-height: 32px;
    font-size: 20px;
    color: ${({themestyles}) => themestyles.color };
`;