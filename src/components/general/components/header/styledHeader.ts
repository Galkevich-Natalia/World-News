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

export const TopHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid white;
`;

export const TitleContainer = styled.div`
    margin: 15px 0;
`;
export const Title = styled.h1`
    font-size: 45px;
    color: white;
`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const ContLogIn = styled.div`
    color: white;
    margin-right: 30px;
    font-weight: 600;
    font-size: 20px;
    cursor: poinetr;
`;

export const ItemInfo = styled.p`
    color: white;
`;

export const ContSignUp = styled.div`
    color: white;
    margin-right: 30px;
    font-weight: 600;
    font-size: 20px;
`;

export const ContIconSearch = styled.div`
    color: white;
`;

export const ItemContainer = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`;

export const Item = styled.h1`
    color: white;
    font-size: 20px;
    margin-bottom: 10px;
`;