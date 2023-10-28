import { styled } from "styled-components";

export const ContainerNews = styled.div`
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
    min-height: 60vh;
`;

export const WrapperNews = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 20px;

    @media screen and (max-width: 640px) {
        display: flex;
        flex-direction: column;
    }
`;