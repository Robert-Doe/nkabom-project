import React, {useRef} from 'react';
import style from './CoordinatorLoginPage.module.css'
import loginBranding from '../nkabom_login_bg.png'
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import useCoordinatorAuth from "../../../hooks/useCoordinatorAuth";

function CoordinatorLoginPage(props) {

    const staffIdRef = useRef()
    const passKeyRef=useRef()
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_API_URL;


    const loginHandler=(e)=>{
        e.preventDefault()

        axios.post(`http://localhost:9999/api/coordinators/login`, {
            staffId:staffIdRef.current.value,
            passKey: passKeyRef.current.value
        })
            .then(r => {
                if(r.status===200){
                    alert("Signing and Redirecting")
                    localStorage.setItem('accessToken',r.data.token)
                    localStorage.setItem('coordinator',JSON.stringify(r.data.coordinator))
                    navigate('/coordinator/dashboard')
                }
            })
    }

    return <section className={style.loginBody}>
        <aside className={style.loginAside}></aside>
        <main className={style.loginContent}>
        <form className="signInForm" id="passwordSignInForm" >
            <img src={loginBranding}  width={250} alt=""/>
            <div>
                <label className={style.label} htmlFor="Username">Staff ID</label>
                <input className={style.input} ref={staffIdRef} id="Username" name="Username" type="text"/>
            </div>
            <div>
                <label className={style.label} htmlFor="Password">Password</label>
                <input className={style.input} id="Password" ref={passKeyRef} maxLength="128" name="Password" type="password"/>
            </div>
            <button type="submit" onClick={loginHandler} id="login" className={style.signinBtn}>Sign in</button>
        </form>
        <div className="forgot-password">
            <a  href="#">Forgot
                password?</a>
        </div>
        <div className={style.or}>
            <hr className={style.bar}/>
        </div>
        <a href="" id="create-account-link"
           className={style.createAccount}>
            <span className="">Create an account</span>
        </a>
        <div className={`${style.footer} py-5`}>
            Copyright © 2023 Nkabom Project. All rights reserved.
        </div>
    </main>
    </section>
}

export default CoordinatorLoginPage;