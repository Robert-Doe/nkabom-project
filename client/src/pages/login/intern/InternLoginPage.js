import React, {useRef} from 'react';
import style from './InternLoginPage.module.css'
import loginBranding from "../nkabom_login_dark_bg.png";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function InternLoginPage(props) {

    const studentIdRef = useRef()
    const passKeyRef=useRef()
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_API_URL;


    const loginHandler=(e)=>{
        e.preventDefault()

        axios.post(`http://localhost:9999/api/interns/login`, {
            studentId:studentIdRef.current.value,
            passKey: passKeyRef.current.value
        })
            .then(r => {
                if(r.status===200){
                    alert("Signing and Redirecting")
                    localStorage.setItem('accessToken',r.data.token)
                    localStorage.setItem('intern',JSON.stringify(r.data.intern))
                    navigate('/intern/dashboard')
                }
            })
    }


    return (
        <section className={style.loginBody}>
            <main className={style.loginContent}>
                <form className={style.signInForm} id="passwordSignInForm" method="post">
                    <img src={loginBranding} width={250} alt=""/>
                    <div>
                        <label className={style.label} htmlFor="Username">Email or Username</label>
                        <input className=""  ref={studentIdRef} id="Username" name="Username" type="text"/>
                    </div>
                    <div>
                        <label className={style.label} htmlFor="Password">Password</label>
                        <input id="Password" ref={passKeyRef} maxLength="128" name="Password" type="password"/>
                    </div>
                    <button type="submit" id="login" onClick={loginHandler} className={style.signinBtn}>Sign in</button>
                </form>
                <div className="forgot-password">
                    <Link to="/id/ForgotPassword">Forgot
                        password?</Link>
                </div>
                <div className={style.or}>
                    <hr className={style.bar}/>
                </div>
                <Link to="/intern/account-activation" id="create-account-link"
                   className={style.activateAccount}>
                    <span className="">Activate Account</span>
                </Link>
            </main>
        </section>
    );
}

export default InternLoginPage;