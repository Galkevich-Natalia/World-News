import { styled } from "styled-components";
import { ThemeContextStyleProps } from "../../../themeContext/types";

export const Container = styled.div`
    border-bottom: 3px dotted black;
    padding: 20px;
    margin: 30px auto;
    
    max-width: 850px;
    width: 100%;
    // background-color: #efecec;
`;

export const Link = styled.link`
    
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TextContainer = styled.div`
    max-width: 40%;
`;

export const TextElements = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2<ThemeContextStyleProps>`
    margin-bottom: 40px;
    color: ${({themestyles}) => themestyles.color };
`;

export const Description = styled.h4`
    color: black;
`;

export const ImgContainer = styled.div`
    max-width: 50%;
    width: 100%;
    display: flex;
    justyfy-content: center;
    align-item: center;
`;

export const Img = styled.img`
    width: 100%;
`;