import logo from "../about-us/logo.png";
import {GiHamburgerMenu} from "react-icons/gi";
import React, {useContext, useEffect} from "react";
import {NavLink, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import {AuthContext} from "../../hooks/AuthContext";

function SupervisorNav({firstName,photoUrl}){
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
                        <img src={photoUrl} className={'intern-nav-photo'}
                             alt={'profile-pic'}/>&nbsp;&nbsp;{firstName}</span>
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

export default SupervisorNav;