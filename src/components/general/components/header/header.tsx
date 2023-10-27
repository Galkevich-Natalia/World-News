import { ContainerHeader, WrapperHeader, TopHeader, InfoContainer } from "./styledHeader"
import './headerStyle.css'
import { Title } from "./components/title/title";
import { ToggleButtonTheme } from "./components/toggleBtnTheme/toggleBtnTheme";
import { BtnLogin } from "./components/btnLogin/btnLogin";
import { BtnSignUp } from "./components/btnSignUp/btnSignUp";
import { BtnSearch } from "./components/btnSearch/btnSearch";
import { NavMenu } from "./components/navMenu/navMenu";
import { useContext, useEffect, useState } from "react";
import { AuthorizedContext, AuthorizedContextType } from "contexts/authContext/authContext";
import { BtnUser } from "./components/btnUser/btnUser";
import { ModalUser } from "./components/modalUser/modalUser";
import { SideBar } from "./components/sideBar/sideBar";
import { BtnBurgerMenu } from "./components/btnBurgerMenu/btnBurgerMenu";

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