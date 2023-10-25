import { NavLink } from "react-router-dom";
import { ItemContainer } from "./styledNavMenu";

export const NavMenu = () => {
    return (
        <ItemContainer>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active-link-class active-link-home" : "navLink link-home")}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/category/Society"
                    className={({ isActive }) => (isActive ? "active-link-class active-link-society" : "navLink link-society")}
                >
                    Society
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/category/Business"
                    className={({ isActive }) => (isActive ? "active-link-class active-link-business" : "navLink link-business")}
                >
                    Business
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/category/Science"
                    className={({ isActive }) => (isActive ? "active-link-class active-link-science" : "navLink link-science")}
                >
                    Science
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/category/Arts"
                    className={({ isActive }) => (isActive ? "active-link-class active-link-arts" : "navLink link-arts")}
                >
                    Arts
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/category/Sports"
                    className={({ isActive }) => (isActive ? "active-link-class active-link-sports" : "navLink link-sports")}
                >
                    Sports
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/category/Health"
                    className={({ isActive }) => (isActive ? "active-link-class active-link-health" : "navLink link-health")}
                >
                    Health
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/category/Games"
                    className={({ isActive }) => (isActive ? "active-link-class active-link-games" : "navLink link-games")}
                >
                    Games
                </NavLink>
            </li>
        </ItemContainer>
    );
};