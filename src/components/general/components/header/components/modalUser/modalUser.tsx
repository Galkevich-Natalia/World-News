import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { AuthorizedContext, AuthorizedContextType } from "../../../../../../contexts/authContext/authContext";
import { useContext } from "react";
import { getUserDataFromStorage } from "../../../../../../store/userStore/userStore";
import { ContBtnCLose, ContTitle, ContainerBtnLogOut, ContainerModal, DataUser } from "./styledModalUser";

interface ModalUserProps {
    closeModal: (value: boolean) => void;
}

export const ModalUser = ({ closeModal }: ModalUserProps) => {

    // const getCloseModal = () => closeModal(false)
    const authContext = useContext<AuthorizedContextType>(AuthorizedContext)
    // const { logoutF } = useContext(AuthorizedContext)

    const dataUserFromStorage = getUserDataFromStorage();

    const logOut = () => {
        authContext.logoutF()
        closeModal(false)
    }

    return (
        <ContainerModal>
            <ContBtnCLose>
                <button onClick={() => closeModal(false)}>
                    <FontAwesomeIcon icon={faXmark} size="lg"/>
                </button>
            </ContBtnCLose>
            <ContTitle>
                <h2>User account</h2>
            </ContTitle>
            <div>
                <h3>E-mail: <DataUser>{dataUserFromStorage.email}</DataUser> </h3>
            </div>
            <ContainerBtnLogOut>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: "100%", textTransform: "none" }}
                    onClick={logOut}>
                    Logout
                </Button>
            </ContainerBtnLogOut>
        </ContainerModal>
    );
};