import { styled } from "styled-components";

export const Container = styled.div`
    padding: 50px 15px;
`;

export const Wrapper = styled.div`
    max-width: 450px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #1976d2;
    padding: 50px;

    @media screen and (max-width: 500px) {
        padding: 40px 20px;

`;

export const ContainerTitle = styled.div`
    padding-bottom: 20px;
`;

export const Title = styled.h2`
    font-size: 40px;
    color: black;

    @media screen and (max-width: 500px) {
        font-size: 35px;
`;

export const ContainerTextField = styled.div`
    padding-top: 30px;
`;

export const ErrorInput = styled.div`
    margin-top: 8px;
    color: red;
`;

export const ContainerFormControl = styled.div`
    padding-top: 30px;
`;

export const ContainerBtn = styled.div`
    // max-width: 100%;
    width: 100%;
    margin-top: 50px;

    @media screen and (max-width: 500px) {
        margin: 50px auto 0 auto;
        width: 150px;
    }
`;

export const Button = styled.button`
    width: 100%;
`;