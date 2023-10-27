import styled from "styled-components";

export const ContainerHeader = styled.header`
    display: flex;
    flex-direction: column;
    background-color: black;
    padding: 0 15px;
`;

export const WrapperHeader = styled.div`
    max-width: 1110px;
    width: 100%;
    margin: 0 auto;
    position: relative;
`;

export const TopHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid white;

    @media screen and (max-width: 640px) {
        flex-direction: column;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 640px) {
       margin-bottom: 15px;
       justify-content: space-around;
    }
`;