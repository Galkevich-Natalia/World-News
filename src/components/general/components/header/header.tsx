import { ContainerHeader, WrapperHeader, TopHeader, InfoContainer } from "./styledHeader"
import './headerStyle.css'
import { Title } from "./components/title/title";
import { ToggleButtonTheme } from "./components/toggleBtnTheme/toggleBtnTheme";
import { BtnLogin } from "./components/btnLogin/btnLogin";
import { BtnSignUp } from "./components/btnSignUp/btnSignUp";
import { BtnSearch } from "./components/btnSearch/btnSearch";
import { NavMenu } from "./components/navMenu/navMenu";

export const Header = () => {

    return (
        <ContainerHeader>
            <WrapperHeader>
                <TopHeader>
                    < Title />
                    <InfoContainer>
                        < ToggleButtonTheme />
                        < BtnLogin />
                        < BtnSignUp />
                        < BtnSearch />
                    </InfoContainer>
                </TopHeader>
                < NavMenu />
            </WrapperHeader>
        </ContainerHeader >
    )
}