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
                            <Link to="/login">
                                <ItemInfo>Log in</ItemInfo>
                            </Link>
                        </ContLogIn>
                        <ContSignUp>
                            <Link to="/signup">
                                <ItemInfo>Sign up</ItemInfo>
                            </Link>
                        </ContSignUp>
                        <ContIconSearch>
                            <FontAwesomeIcon size="xl" color="white" icon={faMagnifyingGlass} />
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
                        to="/category/Politics"
                        className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                    >
                        <Item>Politics</Item>
                    </NavLink>
                    <NavLink
                        to="/category/Sports"
                        className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                    >
                        <Item>Sports</Item>
                    </NavLink>
                    <NavLink
                        to="/category/Society"
                        className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                    >
                        <Item>Society</Item>
                    </NavLink>
                    <NavLink
                        to="/category/Technology"
                        className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                    >
                        <Item>Technology</Item>
                    </NavLink>
                    <NavLink
                        to="/category/Science"
                        className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                    >
                        <Item>Science</Item>
                    </NavLink>
                    <NavLink
                        to="/category/Business"
                        className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                    >
                        <Item>Business</Item>
                    </NavLink>
                    <NavLink
                        to="/category/Arts"
                        className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                    >
                        <Item>Arts</Item>
                    </NavLink>
                </ItemContainer>
            </WrapperHeader>
        </ContainerHeader>
    )
}