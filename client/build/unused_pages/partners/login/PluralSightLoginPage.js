import React from 'react';
import './auth_style.css'
import buildBetterImg from './images/logo-build-better.png'
import buildSkillForBetterImg from './images/login-h1.png'
import {Link} from "react-router-dom";

function PluralSightLoginPage(props) {
    return (
        <React.Fragment>
            <section className="auth_body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 theme-alt-black vp-h-100">
                            <div className="container">
                                <div className="d-flex flex-column align-items-center">
                                    <a href="/"> <img src="logo_header.png" alt="" className="auth_logo align-self-center"/></a>
                                    <form action="/" className="signInForm" id="passwordSignInForm" method="post">
                                        <input id="RedirectUrl" name="RedirectUrl" type="hidden"
                                               value="https://app.pluralsight.com/library/" />
                                        <div>
                                            <label className="psds-text-input__label" htmlFor="Username">Email or
                                                Username</label>
                                            <input autoCapitalize="none" autoComplete="off" autoCorrect="off"
                                                   className="psds-text-input__field psds-text-input__field--appearance-subtle"
                                                   data-val="true"
                                                   data-val-required="The Email or Username field is required."
                                                   id="Username" name="Username" type="text"
                                            />
                                        </div>
                                        <div>
                                            <label className="psds-text-input__label"
                                                   htmlFor="Password">Password</label>
                                            <input autoComplete="off"
                                                   className="psds-text-input__field psds-text-input__field--appearance-subtle"
                                                   data-val="true"
                                                   data-val-maxlength="Password must not exceed 128 characters"
                                                   data-val-maxlength-max="128"
                                                   data-val-required="The Password field is required." id="Password"
                                                   maxLength="128" name="Password" type="password"/>
                                        </div>

                                        <input data-val="true"
                                               data-val-required="The ShowCaptcha field is required."
                                               id="ShowCaptcha" name="ShowCaptcha" type="hidden" value="False"/>
                                        <input id="ReCaptchaSiteKey" name="ReCaptchaSiteKey" type="hidden"
                                               value="6LeVIgoTAAAAAIhx_TOwDWIXecbvzcWyjQDbXsaV"/>
                                        <button type="submit"
                                                className="psds-button--appearance-primary psds-theme--dark psds-button psds-button--size-medium"
                                                id="login">
                                            Sign in
                                        </button>
                                        <input name="__RequestVerificationToken" type="hidden"
                                               value="CfDJ8BX3RPJrgS9MnkpeL6JXcxWw5N7bQDq_Sjm-Surdyx2ZlGBzXB7NK0-Mju9cHV_lbKfHwU8TPjH9hI7q1yRvUWDnikNGz5YPDatE4wK7SqYruYhGjqx68UvXt0GzIH77Q6AWDp7BB3MvfBt4mwl1-Y8"/>
                                    </form>
                                    <div className="links">
                                        <a className="psds-link psds-theme--dark psds-link--appearance-default"
                                           href="/signup">Forgot password?</a>
                                        <a className="psds-link psds-theme--dark psds-link--appearance-default"
                                           href="/signup">
                                            Sign in with company or school
                                        </a>
                                    </div>
                                    <div className="or">
                                        <hr className="bar"/>
                                    </div>
                                    <a href="/signup" id="create-account-link"
                                       className="psds-button--appearance-secondary  psds-button psds-theme--dark psds-button--size-medium">
                                        <span className="psds-button__text">Create an account</span>
                                    </a>
                                </div>

                            </div>
                            <footer id="footer">
                                Copyright © 2022 Code Den Initiative. All rights reserved.
                                <div>
                                    <a className="psds-link psds-theme--dark psds-link--appearance-subtle"
                                       href="/">Terms of Use</a>
                                    | <a className="psds-link psds-theme--dark psds-link--appearance-subtle"
                                         href="/">Privacy Policy</a>
                                </div>
                            </footer>
                        </div>
                        <div className="col-md-7 theme-alt-black auth-right">
                            <div className="banner at-element-marker">
                                <div className="marketing-banner">
                                    <div className="marketing-banner-text">
                                        <div className="marketing-banner-text-wrapper">
                                            <div className="marketing-banner-title">
                                                <img className="lockup" alt="Build Better"
                                                     src={buildBetterImg}/>
                                                <div className="live-text">
                                                    <img alt="Build the skills you need to deliver results"
                                                         src={buildSkillForBetterImg}/>
                                                </div>
                                            </div><br/>
                                            <Link to="/signup"
                                                  className="live-cta" data-aa-title="login-trial-cta">Try for free</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default PluralSightLoginPage;