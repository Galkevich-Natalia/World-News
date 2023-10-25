import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ContainerFooter = styled.div`
    background-color: black;
    padding: 0 15px;
`;

export const WrapperFooter = styled.div`
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
`;

export const TitleContainer = styled.div`
    padding-top: 15px;
    margin-bottom: 15px;
    border-bottom: 2px solid white;
`;
export const Title = styled.h1`
    font-size: 35px;
    color: white;
`;

export const ContainerInfoFooter = styled.div`
    padding-bottom: 20px;
`;

export const ListInfoFooter = styled.ul`
    display: flex;
    justify-content: space-around;
`;

export const ItemInfoFooter = styled(Link)`
    font-size: 20px;
    color: white;
    cursor: pointer;
`;

export const CopyrightFooter = styled.div`
    text-align: center;
    padding-bottom: 10px;
`;

export const ItemCopyrightFooter = styled.p`
    font-size: 15px;
    color: white;
    cursor: pointer;
`;