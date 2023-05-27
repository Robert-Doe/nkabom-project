import React,{useRef} from 'react';
import style from './SupervisorLoginPage.module.css'
import loginBranding from '../nkabom_login_dark_bg.png'
import axios from "axios";

function SupervisorLoginPage(props) {
    const staffIdRef=useRef()
    const passKeyRef=useRef()

    const apiUrl = process.env.REACT_APP_API_URL;

    const loginHandler=()=>{
        axios.post(`${apiUrl}/supervisors/login/`, {
            staffId:staffIdRef.current.value,
            passKey: passKeyRef.current.value
        })
            .then(r => {

        })
    }


    return <section className={style.loginBody}>
        <main className={`${style.loginContent}`}>
            <form className={style.signInForm} id="passwordSignInForm" method="post">
                <img src={loginBranding}  width={250} alt=""/>
                <div>
                    <label className="" htmlFor="Username">Email or Username</label>
                    <input className="" id="Username" ref={staffIdRef} name="Username" type="text"/>
                </div>
                <div>
                    <label className="" htmlFor="Password">Password</label>
                    <input id="Password" maxLength="128" ref={passKeyRef} name="Password" type="password"/>
                </div>
                <button type="submit" id="login" className={style.signinBtn}>Sign in</button>
            </form>
            <div className="forgot-password">
                <a  href="/id/ForgotPassword">Forgot
                    password?</a>
            </div>
            <div className={style.or}>
                <hr className={style.bar}/>
            </div>
            <a href="https://www.pluralsight.com/get-started" id="create-account-link"
               className={style.createAccount}>
                <span className="">Create an account</span>
            </a>
            <div className={`${style.footer} py-5`}>
                Copyright © 2023 Nkabom Project. All rights reserved.
            </div>
        </main>
        <aside className={style.loginAside}></aside>
    </section>
}

export default SupervisorLoginPage;