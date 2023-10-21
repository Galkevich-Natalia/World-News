
import {
    ContIconSearch, ContIconTheme, ContLogIn, ContSignUp, ContainerHeader, InfoContainer,
    ItemContainer, ItemInfo, ThemeButton, Title, TitleContainer, TopHeader, WrapperHeader
} from "./styledHeader"
import './headerStyle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {

    const [isIconTheme, setIsIconTheme] = useState<boolean>(false)

    const handleTheme = () => {
        setIsIconTheme(!isIconTheme)
    }

    return (
        <ContainerHeader>
            <WrapperHeader>
                <TopHeader>
                    <TitleContainer>
                        <Title>World News</Title>
                    </TitleContainer>
                    <InfoContainer>
                        <ContIconTheme>
                            <ThemeButton type="button" onClick={handleTheme}>
                                <FontAwesomeIcon size="xl" color="white" icon={ isIconTheme ? faSun : faMoon } />
                            </ThemeButton>
                        </ContIconTheme>
                        <ContLogIn>
                            <ItemInfo to="/login">
                                Log in
                            </ItemInfo>
                        </ContLogIn>
                        <ContSignUp>
                            <ItemInfo to="/signup">
                                Sign up
                            </ItemInfo>
                        </ContSignUp>
                        <ContIconSearch>
                            <ItemInfo to="/search">
                                <FontAwesomeIcon size="xl" color="white" icon={faSearch} />
                            </ItemInfo>
                        </ContIconSearch>
                    </InfoContainer>
                </TopHeader>
                <ItemContainer>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "navLink active-link-class" : "navLink link-home")}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/category/Society"
                        className={({ isActive }) => (isActive ? "navLink active-link-class" : "navLink link-society")}
                    >
                        Society
                    </NavLink>
                    <NavLink
                        to="/category/Business"
                        className={({ isActive }) => (isActive ? "navLink active-link-class" : "navLink link-business")}
                    >
                        Business
                    </NavLink>
                    <NavLink
                        to="/category/Science"
                        className={({ isActive }) => (isActive ? "navLink active-link-class" : "navLink link-science")}
                    >
                        Science
                    </NavLink>
                    <NavLink
                        to="/category/Arts"
                        className={({ isActive }) => (isActive ? "active-link-class" : "navLink link-arts")}
                    >
                        Arts
                    </NavLink>
                    <NavLink
                        to="/category/Sports"
                        className={({ isActive }) => (isActive ? "navLink active-link-class" : "navLink link-sports")}
                    >
                        Sports
                    </NavLink>
                    <NavLink
                        to="/category/Health"
                        className={({ isActive }) => (isActive ? "navLink active-link-class" : "navLink link-health")}
                    >
                        Health
                    </NavLink>
                    <NavLink
                        to="/category/Games"
                        className={({ isActive }) => (isActive ? "active-link-class" : "navLink link-games")}
                    >
                        Games
                    </NavLink>
                </ItemContainer>
            </WrapperHeader>
        </ContainerHeader >
    )
}