import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../../style/sideBar.css";
import logo from "../../assets/logo.svg";


const Backdrop = ({ onClick }) => {
    return <div onClick={onClick} className="backdrop" />
}


const SidebarOverlay = ({ openSidebar, setOpenSidebar }) => {


    return (
        <aside className={openSidebar ? "open-sidebar sidebar" : "sidebar"}>
            <div className="sidebar-header">
            <div className="sidebar-logo">
                <img src={logo} alt="logo" />
            </div>
                <div className='sidebar-arrowback'>
                    <FaArrowLeft onClick={() => setOpenSidebar(false)} style={{ color: "#fff", fontSize: "35px" }} />
                </div>
            </div>
            <ul>
                <li>
                    <NavLink to="/home" className={`nav-link $({ isActive }) => (!isActive ? "unselected" : "active")}`}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={`nav-link $({ isActive }) => (!isActive ? "unselected" : "active")}`}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={`nav-link $({ isActive }) => (!isActive ? "unselected" : "active")}`}>
                        projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={`nav-link $({ isActive }) => (!isActive ? "unselected" : "active")}`}>
                        contact
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}

const Sidebar = ({ setOpenSidebar, openSidebar }) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={() => setOpenSidebar(false)} />, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(
                <SidebarOverlay openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />,
                document.getElementById("modal-root"))}
        </Fragment>
    )
}

export default Sidebar;