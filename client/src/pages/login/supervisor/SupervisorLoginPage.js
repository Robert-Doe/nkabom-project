import React,{useRef} from 'react';
import style from './SupervisorLoginPage.module.css'
import loginBranding from '../nkabom_login_dark_bg.png'
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

function SupervisorLoginPage(props) {
    const staffIdRef=useRef()
    const passKeyRef=useRef()
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_API_URL;

    const loginHandler=(e)=>{
        e.preventDefault()

        axios.post(`http://localhost:9999/api/supervisors/login`, {
            staffId:staffIdRef.current.value,
            passKey: passKeyRef.current.value
        })
            .then(r => {
                alert("Returned from Server")

                if(r.status===200){
                    alert("Signing and Redirecting")
                    localStorage.setItem('accessToken',r.data.token)
                    localStorage.setItem('supervisor',JSON.stringify(r.data.supervisor))
                    navigate('/supervisor/dashboard')
                }
        }).catch(error=>{
            console.log("Catching Error in the Catch Block")
        })
    }


    return <section className={style.loginBody}>
        <main className={`${style.loginContent}`}>
            <form className={style.signInForm} id="passwordSignInForm">
                <img src={loginBranding}  width={250} alt=""/>
                <div>
                    <label className="" htmlFor="Username">Email or Username</label>
                    <input className="" id="Username" ref={staffIdRef} name="Username" type="text"/>
                </div>
                <div>
                    <label className="" htmlFor="Password">Password</label>
                    <input id="Password" maxLength="128" ref={passKeyRef} name="Password" type="password"/>
                </div>
                <button id="login" onClick={loginHandler} className={style.signinBtn}>Sign in</button>
            </form>
            <div className="forgot-password">
                <a  href="/id/ForgotPassword">Forgot
                    password?</a>
            </div>
            <div className={style.or}>
                <hr className={style.bar}/>
            </div>
            <Link href="" id="create-account-link"
               className={style.createAccount}>
                <span className="">Activate account</span>
            </Link>
            <div className={`${style.footer} py-5`}>
                Copyright © 2023 Nkabom Project. All rights reserved.
            </div>
        </main>
        <aside className={style.loginAside}></aside>
    </section>
}

export default SupervisorLoginPage;