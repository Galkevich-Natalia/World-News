import { NavLink } from "react-router-dom"
import { ContainerHeader, Item, ItemContainer, Title, TitleContainer, WrapperHeader } from "./styledHeader"
import './headerStyle.css'

export const Header = () => {
    return (
        <ContainerHeader>
            <WrapperHeader>
                <TitleContainer>
                    <Title>World News</Title>
                </TitleContainer>
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