import { styled } from "styled-components";
import { ThemeContextStyleProps } from "../../../../contexts/themeContext/types";

export const ContainerSingleCard = styled.div`
    padding: 20px;
    margin: 30px auto;
    max-width: 900px;
    width: 100%;
`;

export const TitleNews = styled.h1<ThemeContextStyleProps>`
    color: ${({themestyles}) => themestyles.color };
`;

export const TextBody = styled.p<ThemeContextStyleProps>`
    line-height: 32px;
    font-size: 18px;
    color: ${({themestyles}) => themestyles.color };
`;

export const ContainerImg = styled.div`
    max-width: 100%;
    width: 100%;
    margin: 50px auto 50px auto;
    display: flex;
    justyfy-content: center;
    align-item: center;
`;

export const Img = styled.img`
    width: 100%;
`;