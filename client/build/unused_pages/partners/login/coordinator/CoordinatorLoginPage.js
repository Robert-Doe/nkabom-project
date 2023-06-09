import React from 'react';
import './coordinator-login-page.css'
import loginBranding from '../nkabom_login_bg.png'

function CoordinatorLoginPage(props) {
    return <section className={'login-body'}>
        <aside className={'login-aside'}></aside>
        <main className={'login-content'}>
        <form action="/id" className="signInForm" id="passwordSignInForm" method="post">
            <img src={loginBranding}  width={250} alt=""/>
            <div>
                <label className="" htmlFor="Username">Email or Username</label>
                <input className="" id="Username" name="Username" type="text"/>
            </div>
            <div>
                <label className="" htmlFor="Password">Password</label>
                <input id="Password" maxLength="128" name="Password" type="password"/>
            </div>
            <button type="submit" id="login" className={'signin-btn'}>Sign in</button>
        </form>
        <div className="forgot-password">
            <a  href="/id/ForgotPassword">Forgot
                password?</a>
        </div>
        <div className="or">
            <hr className="bar"/>
        </div>
        <a href="https://www.pluralsight.com/get-started" id="create-account-link"
           className="create-account">
            <span className="psds-button__text">Create an account</span>
        </a>
        <div className="footer py-5">
            Copyright © 2023 Nkabom Project. All rights reserved.
        </div>
    </main>
    </section>
}

export default CoordinatorLoginPage;