import logo from "../landing/logo.png";
import {GiHamburgerMenu} from "react-icons/gi";
import React from "react";
import {NavLink} from "react-router-dom";

function LandingPageNav(){
    return (
        <nav className={'navbar navbar-expand-lg navbar-light bg-warning'} style={{position:'absolute'}}>
            <div className="navbar-brand brand">
                <img src={logo} alt="Nkabom Project Logo" className={'nkabom-logo'}/>&nbsp;&nbsp; <span className={'font-weight-bold'}>Nkabom Project</span>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><GiHamburgerMenu/></button>
            <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent" >
                <ul className="navbar-nav navbar-links ">
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/'}>Home</NavLink></li>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/about-us'}>About Us</NavLink></li>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/partners'}>Partners</NavLink></li>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/scholars'}>Scholars</NavLink></li>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/contact'}>Contact</NavLink></li>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/projects'}>Projects</NavLink></li>
                </ul>
            </div>
        </nav>
        /*<nav className={'navbar navbar-expand-lg navbar-light bg-warning'}>
            <div className="brand">
                <img src={logo} alt="Nkabom Project Logo" className={'nkabom-logo'}/>
            </div>
            <button className="nav-toggler"><GiHamburgerMenu/></button>
            <div className="navbar-links-block">
                <ul className="navbar-links">
                    <li><a href={'#'}>Home</a></li>
                    <li><a href={'#'}>About Us</a></li>
                    <li><a href={'#'}>Partners</a></li>
                    <li><a href={'#'}>Scholars</a></li>
                    <li><a href={'#'}>Contact</a></li>
                    <li><a href={'#'}>Projects</a></li>
                </ul>
            </div>
        </nav>*/
    )
}
export default LandingPageNav;