import { styled } from "styled-components";
import { ThemeContextStyleProps } from "../../../../contexts/themeContext/types";

export const ContainerSingleCard = styled.div`
    padding: 20px;
    margin: 30px auto;
    max-width: 900px;
    width: 100%;
    min-height: 60vh;
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
    width: 100%;
    max-height: 500px;
    margin: 50px 0;
    display: flex;
`;

export const Img = styled.img`
    width: 100%;
    object-fit: cover;
`;