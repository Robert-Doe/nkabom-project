import React from 'react';
import CoordinatorSideNav from "../CoordinatorSideNav";
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";
import style from './CoordinatorPartners.module.css'
import {MdAssignmentTurnedIn, MdViewList} from "react-icons/md";
import {BiUserPlus} from "react-icons/bi"
import {Link} from "react-router-dom";
import {FaChartBar, FaComments, FaFileUpload, FaHandshake, FaUserPlus, FaUserTie} from "react-icons/fa";
import useCoordinatorAuth from "../../../hooks/useCoordinatorAuth";
import {GiHouse} from "react-icons/gi";


function PartnersMenuPage(props) {
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
                                <Link to="#" className={style.menuLink}>
                                    <div className={`${style.internshipMenuContent}`}>
                                        <FaUserPlus size={24}/>
                                        <span className={`${style.menuTitle}`}>Manage Partners</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to={'#'} className={style.menuLink}>
                                    <div className={`${style.internshipMenuContent}`}>
                                        <FaHandshake size={24}/>
                                        <span className={`${style.menuTitle}`}>Partner Collaboration</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to={'#'} className={style.menuLink}>
                                    <div className={`${style.internshipMenuContent}`}>
                                        <FaComments size={24}/>
                                        <span className={`${style.menuTitle}`}>Partner Feedback</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to={'#'} className={style.menuLink}>
                                    <div className={`${style.internshipMenuContent}`}>
                                        <FaComments size={24}/>
                                        <span className={`${style.menuTitle}`}>Partner Feedback</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to={'#'} className={style.menuLink}>
                                    <div className={`${style.internshipMenuContent}`}>
                                        <FaFileUpload size={24}/>
                                        <span className={`${style.menuTitle}`}>Partner Resources</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to={'#'} className={style.menuLink}>
                                    <div className={`${style.internshipMenuContent}`}>
                                        <FaChartBar size={24}/>
                                        <span className={`${style.menuTitle}`}>Reports and Analytics</span>
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

export default PartnersMenuPage;