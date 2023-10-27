import { styled } from "styled-components";

export const ContainerItems = styled.ul`
    padding: 15px 0 !important;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 640px) {
        display: none;
    }
`;