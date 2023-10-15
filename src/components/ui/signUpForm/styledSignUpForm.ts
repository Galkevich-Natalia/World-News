import { styled } from "styled-components";

export const Container = styled.div`
    
    padding: 50px 15px;
`;

export const Wrapper = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 50px 0 50px;
    max-width: 450px;
    margin: 0 auto;
    width: 100%;
`;

export const ContainerTitle = styled.div`
    padding-bottom: 40px;
`;

export const Title = styled.h2`
    font-size: 40px;
`;

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContainerTextField = styled.div`
    padding-top: 15px;
`;

export const TextField = styled.input`
    max-width: 100%;
    width: 100%;
`;

export const ErrorEmail = styled.div`
    margin-left: 8px;
    color: red;
`;

export const ContainerFormControl = styled.div`
    padding-top: 15px;
`;

export const ErrorPassword = styled.div`
    margin: 8px 0;
    color: red;
`;

export const ContainerCheckBoxAndHref = styled.div`
    width: 100%;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
`;

export const ContainerCheckBox = styled.div`
    display: flex;
    align-items: center;
`;

export const Span = styled.span`
    text-decoration: none;
`;

export const ContainerBtn = styled.div`
    // max-width: 100%;
    width: 100%;
    margin: 50px 0;
`;

export const Button = styled.button`
    width: 100%;
`;