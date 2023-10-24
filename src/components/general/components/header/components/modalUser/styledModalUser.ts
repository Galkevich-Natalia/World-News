import { styled } from "styled-components";

export const ContainerModal = styled.div`
    max-width: 365px;
    width: 100%;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: 0;
    top: 62%;
    background-color: white;
    position: absolute;
    border: 2px solid black;
`;

export const ContTitle = styled.div`
    margin: 20px 0 30px 0;
`;

export const ContBtnCLose = styled.div`
    margin-left: auto;
`;

export const ContainerBtnLogOut = styled.div`
    margin: 40px 0 10px 0;
`;