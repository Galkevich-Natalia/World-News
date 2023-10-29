import { Dispatch, SetStateAction } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { ContBtnBurgerMenu } from "./styledBtnBurgerMenu";


interface BtnBurgerMenuProps {
    setShowSideBar: Dispatch<SetStateAction<boolean>>;
}

export const BtnBurgerMenu = ({ setShowSideBar }: BtnBurgerMenuProps) => {

    const toggleSideBar = () => {
        setShowSideBar(prev => !prev)
    }

    return (
        <ContBtnBurgerMenu>
            <FontAwesomeIcon icon={faBars} onClick={toggleSideBar} />
        </ContBtnBurgerMenu>
    );
};