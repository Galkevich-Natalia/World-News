import { styled } from "styled-components";

export const ContainerSearch = styled.div`
    padding: 20px;
    margin: 30px auto;
    max-width: 850px;
    width: 100%;
    min-height: 60vh;
`;

export const Input = styled.input`
    width: 100%;
    padding: 8px;
    border-radius: 5px;

    &::-webkit-search-cancel-button {
        -webkit-appearance: none;
        appearance: none;
        display: none;
      }
`;

export const ButtonSearch = styled.button`
    left: 90%;
    background-color: transparent;
    border: none;
    position: relative;
    right: 15%;
    bottom: 33px;
    height: 0;
    display: block;

    @media screen and (max-width: 500px) {
        left: 85%;
    }
`;