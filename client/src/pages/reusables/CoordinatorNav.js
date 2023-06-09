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
               {/* <button className="close-btn" onClick={toggleNav}>
                    <span className="close-icon"></span>
                </button>*/}
               <CoordinatorSideMdNav/>
            </div>
        </nav>
    )
}


export default CoordinatorNav;