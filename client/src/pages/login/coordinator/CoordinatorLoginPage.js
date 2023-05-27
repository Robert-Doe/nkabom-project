import React from 'react';
import style from './CoordinatorLoginPage.module.css'
import loginBranding from '../nkabom_login_bg.png'

function CoordinatorLoginPage(props) {
    return <section className={style.loginBody}>
        <aside className={style.loginAside}></aside>
        <main className={style.loginContent}>
        <form action="/id" className="signInForm" id="passwordSignInForm" method="post">
            <img src={loginBranding}  width={250} alt=""/>
            <div>
                <label className={style.label} htmlFor="Username">Email or Username</label>
                <input className="" id="Username" name="Username" type="text"/>
            </div>
            <div>
                <label className={style.label} htmlFor="Password">Password</label>
                <input id="Password" maxLength="128" name="Password" type="password"/>
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
    </section>
}

export default CoordinatorLoginPage;