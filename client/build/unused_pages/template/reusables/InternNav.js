import logo from "../about-us/logo.png";
import {GiHamburgerMenu} from "react-icons/gi";
import React, {useContext, useEffect} from "react";
import {NavLink, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './nav.css'
import '../reusables/dropdown-library'
import {AuthContext} from "../../partners/AuthContext";

function InternNav() {



    const navigate= useNavigate()

    const { logout } = useContext(AuthContext);

    const logoutHandler=()=>{
        logout()
        navigate('/login')
    }

    useEffect(()=>{

    },[])


    return (
        <nav className={'navbar navbar-expand-lg navbar-light bg-warning'}>
            <div className="navbar-brand brand">
                <img src={logo} alt="Nkabom Project Logo" className={'nkabom-logo'}/> Nkabom Project
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <GiHamburgerMenu/></button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                {/*  <ul className="navbar-nav">*/}
                <div className={'cdropdown pr-4'} data-dropdown="1">
                    <span className="link" data-dropdown-button="1">
                        <img src={logo} className={'intern-nav-photo'}
                             alt={'profile-pic'}/>&nbsp;&nbsp;Robert Doe</span>
                    <div className="cdropdown-menu">
                        <div className="profile-pic-menu">
                            <ul className={'list-group list-unstyled'}>
                                <li onClick={()=>navigate('/profile/edit')} className={'list-item nav-drop-option p-1'}>Edit Profile</li>
                                <li onClick={logoutHandler} className={'list-item nav-drop-option p-1'}>Sign out</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* </ul>*/}
            </div>
        </nav>
    )
}


/*
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                       aria-expanded="false">
                        Dropdown
                    </a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
*/

export default InternNav;