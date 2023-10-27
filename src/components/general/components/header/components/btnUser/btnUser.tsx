import { Dispatch, SetStateAction } from "react";
import { ContUser, UserBtn } from "./styledBtnUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface BtnUserProps {
    setShowModalUser: Dispatch<SetStateAction<boolean>>;
}

export const BtnUser = ({ setShowModalUser }: BtnUserProps) => {

    const toggleModalUser = () => setShowModalUser((prev: boolean) => !prev)

    return (
        <ContUser>
            <UserBtn onClick={toggleModalUser}>
                <FontAwesomeIcon icon={faUser} />
            </UserBtn>
        </ContUser>
    );
};