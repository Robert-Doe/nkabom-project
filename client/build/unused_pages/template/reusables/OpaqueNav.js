import logo from "../about-us/logo.png";
import {GiHamburgerMenu} from "react-icons/gi";
import React from "react";
import {NavLink} from 'react-router-dom';

function OpaqueNav({title}) {
    return (
        <nav className={'navbar navbar-expand-lg navbar-light bg-warning'}>
            <div className="navbar-brand brand">
                <img src={logo} alt="Nkabom Project Logo" className={'nkabom-logo'}/> <span
                className={'font-weight-bold'}>Nkabom Project</span>
            </div>
        </nav>
    )
}

export default OpaqueNav;