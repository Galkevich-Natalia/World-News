import { ContBtnCLose, ContTitle, ContainerItems, ContainerModal, Item, Wrapper } from "./styledSideBar";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

interface SideBarProps {
    setShowSideBar: (value: boolean) => void
}

export const SideBar = ({ setShowSideBar }: SideBarProps) => {

    const closeSideBar = () => setShowSideBar(false);

    return (
        <ContainerModal>
            <Wrapper>
                <ContBtnCLose>
                    <button onClick={closeSideBar}>
                        <FontAwesomeIcon icon={faXmark} color="white" />
                    </button>
                </ContBtnCLose>
                <ContTitle>
                    <h2>Category</h2>
                </ContTitle>
                <ContainerItems>
                    <Item>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "active-link-class active-link-home" : "navLink link-home")}
                            onClick={closeSideBar}
                        >
                            Home
                        </NavLink>
                    </Item>
                    <Item>
                        <NavLink
                            to="/category/Society"
                            className={({ isActive }) => (isActive ? "active-link-class active-link-society" : "navLink link-society")}
                            onClick={closeSideBar}
                        >
                            Society
                        </NavLink>
                    </Item>
                    <Item>
                        <NavLink
                            to="/category/Business"
                            className={({ isActive }) => (isActive ? "active-link-class active-link-business" : "navLink link-business")}
                            onClick={closeSideBar}
                        >
                            Business
                        </NavLink>
                    </Item>
                    <Item>
                        <NavLink
                            to="/category/Science"
                            className={({ isActive }) => (isActive ? "active-link-class active-link-science" : "navLink link-science")}
                            onClick={closeSideBar}
                        >
                            Science
                        </NavLink>
                    </Item>
                    <Item>
                        <NavLink
                            to="/category/Arts"
                            className={({ isActive }) => (isActive ? "active-link-class active-link-arts" : "navLink link-arts")}
                            onClick={closeSideBar}
                        >
                            Arts
                        </NavLink>
                    </Item>
                    <Item>
                        <NavLink
                            to="/category/Sports"
                            className={({ isActive }) => (isActive ? "active-link-class active-link-sports" : "navLink link-sports")}
                            onClick={closeSideBar}
                        >
                            Sports
                        </NavLink>
                    </Item>
                    <Item>
                        <NavLink
                            to="/category/Health"
                            className={({ isActive }) => (isActive ? "active-link-class active-link-health" : "navLink link-health")}
                            onClick={closeSideBar}
                        >
                            Health
                        </NavLink>
                    </Item>
                    <Item>
                        <NavLink
                            to="/category/Games"
                            className={({ isActive }) => (isActive ? "active-link-class active-link-games" : "navLink link-games")}
                            onClick={closeSideBar}
                        >
                            Games
                        </NavLink>
                    </Item>
                </ContainerItems>
            </Wrapper>
        </ContainerModal>
    );
};