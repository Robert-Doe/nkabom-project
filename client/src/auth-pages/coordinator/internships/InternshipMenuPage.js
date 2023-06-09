import React from 'react';
import CoordinatorSideNav from "../CoordinatorSideNav";
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";
import style from './CoordinatorInternships.module.css'
import {BsBriefcaseFill, BsFillMegaphoneFill} from "react-icons/bs";
import {MdViewList} from "react-icons/md";
import {BiUserPlus} from "react-icons/bi"
import {Link} from "react-router-dom";
import useCoordinatorAuth from "../../../hooks/useCoordinatorAuth";


function InternshipMenuPage(props) {
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
                                        <BsBriefcaseFill size={24} />
                                        <span className={`${style.menuTitle}`}>Create Theme</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to={'#'} className={style.menuLink}>
                                    <div className={`${style.internshipMenuContent}`}>
                                        <MdViewList size={24} />
                                        <span className={`${style.menuTitle}`}>View All Themes</span>
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
                                        <BsFillMegaphoneFill size={24} />
                                        <span className={`${style.menuTitle}`}>Advertise Opportunity</span>
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

export default InternshipMenuPage;