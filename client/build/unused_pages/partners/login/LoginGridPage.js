import React from 'react';
import OpaqueNav from "../../template/reusables/OpaqueNav";
import loginBackground from '../assets/ktu_login_background.png'
import './login-page.css'
import {FaUserGraduate, FaUsers, FaUserTie} from "react-icons/fa";
import {Link} from "react-router-dom";

function LoginGridPage(props) {
    return (
        <section>
            <OpaqueNav title={'Login'}/>
            <main>
                <article className="login-background">
                    <img className={'school-image'} src={loginBackground} alt=""/>
                </article>
                <section className={'login-links-block py-5'}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 login-link">
                                <div className="content">
                                    <div className="icon-border">
                                        <FaUserTie color={'#f90'} fontSize={80}/>
                                    </div>
                                    <h6 className={'title'}>Coordinator</h6>
                                    <Link to={'/login/coordinator'} className={'btn login-btn'}>Go</Link>
                                </div>
                            </div>
                            <div className="col-md-4 login-link">
                                <div className="content">
                                    <div className="icon-border">
                                        <FaUsers color={'#f90'} fontSize={80}/>
                                    </div>
                                    <h6 className={'title'}>Supervisor</h6>
                                    <Link to={'/login/supervisor'} className={'btn login-btn'}>Go</Link>
                                </div>
                            </div>
                            <div className="col-md-4 login-link">
                                <div className="content">
                                    <div className="icon-border">
                                        <FaUserGraduate color={'#f90'} fontSize={80}/>
                                    </div>
                                    <h6 className={'title'}>Intern</h6>
                                    <Link to={'/login/intern'} className={'btn login-btn'}>Go</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </section>
    );
}

export default LoginGridPage;