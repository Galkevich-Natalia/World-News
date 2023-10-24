import { Dispatch, SetStateAction } from "react";
import { ContUser, UserBtn } from "./styledBtnUser";

interface BtnUserProps {
    setShowModalUser: Dispatch<SetStateAction<boolean>>;
}

export const BtnUser = ({ setShowModalUser }: BtnUserProps) => {

    const toggleModalUser = () => setShowModalUser((prev: boolean) => !prev)

    return (
        <ContUser>
            <UserBtn onClick={toggleModalUser}>
                User
            </UserBtn>
        </ContUser>
    );
};