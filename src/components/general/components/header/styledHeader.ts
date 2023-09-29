import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
`;

export const TitleContainer = styled.div`
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
`;

export const Title = styled.h1`
    margin: 15px 0;
    font-size: 45px;
    color: white;
    border-bottom: 2px solid white;
`;

export const ItemContainer = styled.div`
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

export const Item = styled.h1`
    color: white;
    font-size: 20px;
    margin-bottom: 10px;
`;