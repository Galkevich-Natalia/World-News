import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    padding: 0 15px;
`;

export const WrapperHeader = styled.div`
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
`;

export const TitleContainer = styled.div`
    margin: 15px 0;
    border-bottom: 2px solid white;
`;
export const Title = styled.h1`
    font-size: 45px;
    color: white;
`;

export const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Item = styled.h1`
    color: white;
    font-size: 20px;
    margin-bottom: 10px;
`;