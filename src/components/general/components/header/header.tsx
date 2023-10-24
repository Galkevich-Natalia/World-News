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

export const Header = () => {

    // console.log("auth_context", isAuthorized)

    const [visibleBtns, setvisibleBtns] = useState<boolean>(false);

    const { isAuthorized } = useContext<AuthorizedContextType>(AuthorizedContext)

    useEffect(() => {
        setvisibleBtns(isAuthorized)
    }, [isAuthorized])

    return (
        <ContainerHeader>
            <WrapperHeader>
                <TopHeader>
                    < Title />
                    <InfoContainer>
                        < ToggleButtonTheme />
                        {!visibleBtns ?
                            <>
                                < BtnLogin />
                                < BtnSignUp />
                            </>
                            : null
                        }
                        < BtnSearch />
                    </InfoContainer>
                </TopHeader>
                < NavMenu />
            </WrapperHeader>
        </ContainerHeader >
    )
}