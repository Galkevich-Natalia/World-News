import { NavLink } from "react-router-dom";
import { ItemContainer } from "./styledNavMenu";

export const NavMenu = () => {
    return (
        <ItemContainer>
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link-class" : "navLink link-home")}
            >
                Home
            </NavLink>
            <NavLink
                to="/category/Society"
                className={({ isActive }) => (isActive ? " active-link-class" : "navLink link-society")}
            >
                Society
            </NavLink>
            <NavLink
                to="/category/Business"
                className={({ isActive }) => (isActive ? "active-link-class" : "navLink link-business")}
            >
                Business
            </NavLink>
            <NavLink
                to="/category/Science"
                className={({ isActive }) => (isActive ? "active-link-class" : "navLink link-science")}
            >
                Science
            </NavLink>
            <NavLink
                to="/category/Arts"
                className={({ isActive }) => (isActive ? " active-link-class" : "navLink link-arts")}
            >
                Arts
            </NavLink>
            <NavLink
                to="/category/Sports"
                className={({ isActive }) => (isActive ? "active-link-class" : "navLink link-sports")}
            >
                Sports
            </NavLink>
            <NavLink
                to="/category/Health"
                className={({ isActive }) => (isActive ? " active-link-class" : "navLink link-health")}
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
    );
};