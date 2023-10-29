import { styled } from "styled-components";

export const Container = styled.div`
    position: absolute;
    z-index: 20;
    background-color: white;
    width: 100%;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const Wrapper = styled.div`
    position: absolute;
    padding-top: 60px;
    top:50%;
    left:50%;
    transform:translate(-50%, -80%);
`;

export const TitlePage = styled.h2`
    text-align: center;
    font-size: 80px;
`;

export const Description = styled.h4`
    text-align: center;
    font-size: 40px;
`;