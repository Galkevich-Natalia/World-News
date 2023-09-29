import { styled } from "styled-components";

export const Container = styled.div`
    border-bottom: 3px dotted black;
    padding: 20px;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 950px;
    width: 100%;
    // background-color: #efecec;
`;

export const TextContainer = styled.div`
    max-width: 40%;
`;

export const TextElements = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    margin-bottom: 40px;
    color: black;
`;

export const Description = styled.h4`
    color: black;
`;

export const ImgContainer = styled.div`
    max-width: 50%;
    display: flex;
    justyfy-content: center;
    align-item: center;
`;

export const Img = styled.img`
    width: 100%;
`;