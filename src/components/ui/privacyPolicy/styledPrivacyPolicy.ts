import { styled } from "styled-components";
import { ThemeContextStyleProps } from "../../../contexts/themeContext/types";

export const ContainerPrivacyPolice = styled.div`
    max-width: 950px;
    width: 100%;
    margin: 0 auto;
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