import { styled } from "styled-components";
import { ThemeContextStyleProps } from "../../../themeContext/types";

export const ContainerAbout = styled.div`
    max-width: 950px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
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
    font-size: 28px;
    color: ${({themestyles}) => themestyles.color };
`;