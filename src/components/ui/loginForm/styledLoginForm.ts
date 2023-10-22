import { styled } from "styled-components";
import { ThemeContextStyleProps } from "../../../themeContext/types";

export const Container = styled.div`
    padding: 50px 15px;
`;

export const Wrapper = styled.div<ThemeContextStyleProps>`
    max-width: 400px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #1976d2;
    border: ${({themestyles}) => `2px solid ${themestyles.color}` };
    padding: 50px;
    background-color: ${({themestyles}) => themestyles.backgroundForm };
    @media screen and (max-width: 500px) {
        padding: 40px 30px;
    }    
`;

export const ContainerTitle = styled.div`
    padding-bottom: 20px;
`;

export const Title = styled.h2`
    font-size: 35px;
    font-weight: 500;
    color: black;

    @media screen and (max-width: 500px) {
        font-size: 28px;
    }
`;

export const Description = styled.div`
    text-align: center;
    color: black;
`;

export const ContainerTextField = styled.div`
    padding-top: 30px;
`;

export const ErrorInput = styled.div`
    font-size: 12px;
    margin-top: 8px;
    color: red;
`;

export const ContainerFormControl = styled.div`
    padding-top: 30px;
`;

export const ContainerBtn = styled.div`
    width: 100%;
    margin-top: 30px;
    font-size: 15px;

    @media screen and (max-width: 500px) {
        margin: 30px auto 0 auto;
    }
`;

export const Button = styled.button`
    width: 100%;
`;

export const ContainerText = styled.div`
    margin: 25px auto 0 auto;
`;

export const TextAboutSignUp = styled.p`
    font-size: 14px;
    font-weight: 400;
    text-align: center;
`;

export const LinkOnSignUp = styled.a`
    font-weight: 700;
    cursor: pointer;
`;