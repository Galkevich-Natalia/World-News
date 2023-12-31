import { ContainerHeader, WrapperHeader, TopHeader, InfoContainer } from "./styledHeader"
import './headerStyle.css'

import { useContext, useEffect, useState } from "react";
import { AuthorizedContext, AuthorizedContextType } from "../../../../contexts/authContext/authContext";
import { BtnBurgerMenu, BtnLogin, BtnSearch, BtnSignUp, BtnUser,
    ModalUser, NavMenu, SideBar, Title, ToggleButtonTheme } from ".";

export const Header = () => {

    // console.log("auth_context", isAuthorized)
    const { isAuthorized } = useContext<AuthorizedContextType>(AuthorizedContext)

    const [showContentWhenUserAuth, setShowContentWhenUserAuth] = useState<boolean>(false);
    const [showModalUser, setShowModalUser] = useState<boolean>(false);
    const [showSideBar, setShowSideBar] = useState<boolean>(false);

    useEffect(() => {
        setShowContentWhenUserAuth(isAuthorized)
    }, [isAuthorized])

    return (
        <ContainerHeader>
            <WrapperHeader>
                <TopHeader>
                    < Title />
                    <InfoContainer>
                        < ToggleButtonTheme />
                        {!showContentWhenUserAuth ?
                            <>
                                < BtnLogin />
                                < BtnSignUp />
                            </>
                            : null
                        }
                        {showContentWhenUserAuth ? < BtnUser setShowModalUser={setShowModalUser} /> : null}
                        < BtnSearch />
                    </InfoContainer>
                </TopHeader>
                < NavMenu />
                < BtnBurgerMenu setShowSideBar={setShowSideBar} />
                {showSideBar ? < SideBar setShowSideBar={setShowSideBar} /> : null}
                {showModalUser ? < ModalUser closeModal={setShowModalUser} /> : null}
            </WrapperHeader>
        </ContainerHeader >
    )
}