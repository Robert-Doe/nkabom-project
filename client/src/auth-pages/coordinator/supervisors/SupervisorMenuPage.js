import React from 'react';
import CoordinatorSideNav from "../CoordinatorSideNav";
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";
import style from './CoordinatorSupervisor.module.css'
import {MdAssignmentTurnedIn, MdViewList} from "react-icons/md";
import {BiUserPlus} from "react-icons/bi"
import {Link} from "react-router-dom";
import {FaUserTie} from "react-icons/fa";
import useCoordinatorAuth from "../../../hooks/useCoordinatorAuth";


function SupervisorMenuPage(props) {
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
                                        <FaUserTie size={24} />
                                        <span className={`${style.menuTitle}`}>Upload Supervisors</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to={'#'} className={style.menuLink}>
                                    <div className={`${style.internshipMenuContent}`}>
                                        <MdViewList size={24} />
                                        <span className={`${style.menuTitle}`}>View All Supervisors</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to={'#'} className={style.menuLink}>
                                    <div className={`${style.internshipMenuContent}`}>
                                        <BiUserPlus size={24} />
                                        <span className={`${style.menuTitle}`}>Assign Supervisors</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to={'#'} className={style.menuLink}>
                                    <div className={`${style.internshipMenuContent}`}>
                                        <MdAssignmentTurnedIn size={24} />
                                        <span className={`${style.menuTitle}`}>Visitation Report</span>
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

export default SupervisorMenuPage;