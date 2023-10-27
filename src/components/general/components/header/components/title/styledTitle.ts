import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const TitleContainer = styled.div`
    margin: 15px 0;

    @media screen and (max-width: 640px) {
        border-bottom: 2px solid white;
    }
`;
export const AppTitle = styled(Link)`
    font-size: 45px;
    font-weight: 500;
    color: white;

    @media screen and (max-width: 640px) {
        font-size: 35px;
    }
`;