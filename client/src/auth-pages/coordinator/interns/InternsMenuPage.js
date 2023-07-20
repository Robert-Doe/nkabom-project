import React from 'react';
import CoordinatorSideNav from "../CoordinatorSideNav";
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";
import style from './CoordinatorIntern.module.css'
import {BsBriefcaseFill} from "react-icons/bs";
import {MdViewList} from "react-icons/md";
import {BiUserPlus} from "react-icons/bi"
import {Link} from "react-router-dom";
import {FaUserTie} from "react-icons/fa";
import useCoordinatorAuth from "../../../hooks/useCoordinatorAuth";


function InternsMenuPage(props) {
    useCoordinatorAuth()
    return (
        <section>
            <CoordinatorNav/>
            <main className={'coordinator-main'}>
                <CoordinatorSideNav/>
                <aside className={'main-body'}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <Link to="/coordinator/intern-upload" className={style.menuLink}>
                                    <div className={`${style.internshipMenuContent}`}>
                                        <FaUserTie size={24} />
                                        <span className={`${style.menuTitle}`}>Upload Interns</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to={'#'} className={style.menuLink}>
                                    <div className={`${style.internshipMenuContent}`}>
                                        <MdViewList size={24} />
                                        <span className={`${style.menuTitle}`}>View All Interns</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to={'/coordinator/add-intern'} className={style.menuLink}>
                                    <div className={`${style.internshipMenuContent}`}>
                                        <BiUserPlus size={24} />
                                        <span className={`${style.menuTitle}`}>Add Interns</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </aside>
            </main>
        </section>
    );
}

export default InternsMenuPage;