import { Link, NavLink } from "react-router-dom"
import {
    ContIconSearch, ContLogIn, ContSignUp, ContainerHeader, InfoContainer, Item,
    ItemContainer, ItemInfo, Title, TitleContainer, TopHeader, WrapperHeader
} from "./styledHeader"
import './headerStyle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    return (
        <ContainerHeader>
            <WrapperHeader>
                <TopHeader>
                    <TitleContainer>
                        <Title>World News</Title>
                    </TitleContainer>
                    <InfoContainer>
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
                                <FontAwesomeIcon size="xl" color="white" icon={faMagnifyingGlass} />
                            </ItemInfo>
                        </ContIconSearch>
                    </InfoContainer>
                </TopHeader>
                <ItemContainer>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                    >
                        <Item>Home</Item>
                    </NavLink>
                    <NavLink
                        to="/category/Society"
                        className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                    >
                        <Item>Society</Item>
                    </NavLink>
                    <NavLink
                        to="/category/Business"
                        className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                    >
                        <Item>Business</Item>
                    </NavLink>
                    <NavLink
                        to="/category/Science"
                        className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                    >
                        <Item>Science</Item>
                    </NavLink>
                    <NavLink
                        to="/category/Arts"
                        className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                    >
                        <Item>Arts</Item>
                    </NavLink>
                    <NavLink
                        to="/category/Sports"
                        className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                    >
                        <Item>Sports</Item>
                    </NavLink>
                    <NavLink
                        to="/category/Health"
                        className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                    >
                        <Item>Health</Item>
                    </NavLink>
                    <NavLink
                        to="/category/Games"
                        className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                    >
                        <Item>Games</Item>
                    </NavLink>
                </ItemContainer>
            </WrapperHeader>
        </ContainerHeader >
    )
}