import { styled } from "styled-components";
import { Theme, ThemeContextStyleProps } from "../../../../contexts/themeContext/types";
import { Link } from "react-router-dom";

interface CardStyleProps {
    type?: string,
    themestyles?: Theme
}

export const Container = styled.div<CardStyleProps>`
    border-bottom: ${(props) => props.type === 'homeCard' ? '0' : `3px dotted ${props.themestyles?.color}`};
    padding: 20px 0;
    // margin: 30px auto;
    max-width: 850px;
    width: 100%;

    @media screen and (max-width: 640px) {
        margin: 0;
    }
`;

export const CardLink = styled(Link)`
    text-decoration: none;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Wrapper = styled.div<CardStyleProps>`
    display: flex;
    flex-direction:${({type}) => type === 'homeCard' ? 'column' : ''};
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 640px) {
        align-items: start;
        flex-direction: column;
    }
`;

export const TextContainer = styled.div<CardStyleProps>`
    max-width: ${({type}) => type === 'homeCard' ? '100%' : '40%'};

    @media screen and (max-width: 640px) {
        max-width: 100%;
    }
`;

export const TextElements = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h3<CardStyleProps>`
    font-size: ${({type}) => type === 'homeCard' ? '20px' : '25px'};
    margin: 10px 0;
    color: ${({themestyles}) => themestyles?.color };

    @media screen and (max-width: 540px) {
        font-size: 20px;
    }

    @media screen and (max-width: 360px) {
        font-size: 18px;
    }
`;

export const Description = styled.h4`
    color: black;
`;

export const ImgContainer = styled.div<CardStyleProps>`
    max-width: ${({type}) => type === 'homeCard' ? '100%' : '50%'};
    width: 100%;
    min-height: ${({type}) => type === 'homeCard' ? '300px' : ' '};
    max-height: ${({type}) => type === 'homeCard' ? '300px' : ' '};
    height: 100%;
    display: flex;

    @media screen and (max-width: 640px) {
        min-height: auto;
        // max-height: 100%;
        max-width: 100%;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 640px) {
        height: auto;
    }
`;