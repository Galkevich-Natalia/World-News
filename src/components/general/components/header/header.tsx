import { NavLink } from "react-router-dom"
import { ContainerHeader, Item, ItemContainer, Title, TitleContainer } from "./styledHeader"
import './headerStyle.css'

export const Header = () => {
    return (
        <ContainerHeader>
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
                    to="/category/politics"
                    className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                >
                    <Item>Politics</Item>
                </NavLink>
                <NavLink
                    to="/category/sports"
                    className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                >
                    <Item>Sports</Item>
                </NavLink>
                <NavLink
                    to="/category/entertainment"
                    className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                >
                    <Item>Entertainment</Item>
                </NavLink>
                <NavLink
                    to="/category/technology"
                    className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                >
                    <Item>Technology</Item>
                </NavLink>
                <NavLink
                    to="/category/science"
                    className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                >
                    <Item>Science</Item>
                </NavLink>
                <NavLink
                    to="/category/business"
                    className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                >
                    <Item>Business</Item>
                </NavLink>
                <NavLink
                    to="/category/tourism"
                    className={({ isActive }) => (isActive ? "active-link-class" : "link")}
                >
                    <Item>Tourism</Item>
                </NavLink>
            </ItemContainer>
        </ContainerHeader>
    )
}