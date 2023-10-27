import { styled } from "styled-components";

export const ContainerModal = styled.div`
    max-width: 365px;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #211e1e;
    position: fixed;
    border: 2px solid black;
    z-index: 3;
`;

export const Wrapper = styled.div`
    padding: 20px 40px;
`;

export const ContTitle = styled.div`
    margin: 20px 0 30px 0;
    color: white;
`;

export const ContBtnCLose = styled.div`
    width: fit-content;
    margin-left: auto;
`;

export const ContainerItems = styled.ul`
    padding: 15px 0 !important;
    color: black;
`;

export const Item = styled.li`
    padding: 10px 0;
`;