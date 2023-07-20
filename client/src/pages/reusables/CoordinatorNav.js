/*
import logo from "../about-us/logo.png";
import {GiHamburgerMenu} from "react-icons/gi";
import React, {useState} from "react";
import {NavLink} from 'react-router-dom';
import CoordinatorSideNav from "../../auth-pages/coordinator/CoordinatorSideNav";
import CoordinatorSideMdNav from "../../auth-pages/coordinator/CoordinatorSideMdNav";

function CoordinatorNav(){

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className={'navbar navbar-expand-lg navbar-light bg-warning'}>
            <div className="navbar-brand brand">
                <img src={logo} alt="Nkabom Project Logo" className={'nkabom-logo'}/> &nbsp;&nbsp; <span className={'font-weight-bold'}>Nkabom Project</span>
            </div>
            <button className="navbar-toggler" type="button"  onClick={toggleNav} data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><GiHamburgerMenu/></button>
            <div className={`sidenav ${isNavOpen ? 'active' : ''}`}>
               {/!* <button className="close-btn" onClick={toggleNav}>
                    <span className="close-icon"></span>
                </button>*!/}
               <CoordinatorSideMdNav/>
            </div>
        </nav>
    )
}


export default CoordinatorNav;*/
import logo from "../about-us/logo.png";
import {GiHamburgerMenu, GiPerson} from "react-icons/gi";
import React, {useContext, useState} from "react";
import {NavLink, useNavigate} from 'react-router-dom';
import CoordinatorSideNav from "../../auth-pages/coordinator/CoordinatorSideNav";
import CoordinatorSideMdNav from "../../auth-pages/coordinator/CoordinatorSideMdNav";
import './CoordinatorNav.css'
import {MdOutlineVerifiedUser} from "react-icons/md";
import {AiOutlineProfile} from "react-icons/ai";
import {AuthContext} from "../../hooks/AuthContext";

function CoordinatorNav() {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate()

    const { logout } = useContext(AuthContext);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    const logoutHandler=()=>{
        logout()
        navigate('/login')
    }

    return (
        <nav className={'navbar navbar-expand-lg navbar-light bg-warning justify-content-between'}>
            <div className="navbar-brand brand">
                <img src={logo} alt="Nkabom Project Logo" className={'nkabom-logo'}/> &nbsp;&nbsp; <span
                className={'font-weight-bold'}>Nkabom Project</span>
            </div>
            <div className="justify-content-end">
                <div className="profile-dropdown">
                    <button className="profile-icon" >
                        <AiOutlineProfile/>&nbsp;
                    </button>
                    <div className="profile-options">
                        <ul>
                            <li className={'link'} onClick={()=>navigate('/coordinator/edit-profile')}>
                                Edit Profile
                            </li>
                            <li className={'link'} onClick={logoutHandler}>
                                Sign Out
                            </li>
                        </ul>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" onClick={toggleNav} data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <GiHamburgerMenu/></button>
                <div className={`sidenav ${isNavOpen ? 'active' : ''}`}>
                    {/* <button className="close-btn" onClick={toggleNav}>
                    <span className="close-icon"></span>
                </button>*/}
                    <CoordinatorSideMdNav/>
                </div>
            </div>

        </nav>
    )
}

export default CoordinatorNav;
