import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContainerHeader = styled.header`
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
    font-weight: 500;
    color: white;
`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ContIconTheme = styled.div`
    margin-right: 30px;
`;

export const ThemeButton = styled.button`

`;

export const ContLogIn = styled.div`
    margin-right: 30px;
    font-weight: 600;
    font-size: 20px;
    cursor: poinetr;
`;

export const ItemInfo = styled(Link)`
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
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
`;

// export const StyleNavLink = styled(NavLink)`
//     color: white;
//     font-size: 20px;
//     font-weight: 500;
//     border-bottom: 5px solid transparent;
// `;