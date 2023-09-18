import { NavLink } from "react-router-dom"
import { ContainerHeader, Item } from "./styledHeader"
import './headerStyle.css'

export const Header = () => {
    return (
        <ContainerHeader>
            <NavLink 
                to="/firstItem" 
                className={({ isActive}) => ( isActive ? "active-link-class" : "link")}
            >
                <Item>First Item</Item>
            </NavLink>
            <NavLink 
                to="/secondItem"
                className={({ isActive}) => ( isActive ? "active-link-class" : "link")}
            >
                <Item>Second Item</Item>
            </NavLink>
            <NavLink 
                to="/thirdItem"
                className={({ isActive}) => ( isActive ? "active-link-class" : "link")}
            >
                <Item>Third Item</Item>
            </NavLink>
        </ContainerHeader>
    )
}