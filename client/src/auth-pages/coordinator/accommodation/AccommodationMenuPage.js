import React from 'react';
import CoordinatorSideNav from "../CoordinatorSideNav";
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";
import style from './CoordinatorAccommodation.module.css'
import {MdAssignmentTurnedIn, MdViewList} from "react-icons/md";
import {BiUserPlus} from "react-icons/bi"
import {Link} from "react-router-dom";
import {FaUserTie} from "react-icons/fa";
import useCoordinatorAuth from "../../../hooks/useCoordinatorAuth";
import {GiHouse} from "react-icons/gi";


function AccommodationMenuPage(props) {
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
                                <Link to="/coordinator/accommodation/upload-facilities" className={style.menuLink}>
                                    <div className={`${style.internshipMenuContent}`}>
                                        <GiHouse size={24}/>
                                        <span className={`${style.menuTitle}`}>Upload Accommodation</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to="/coordinator/accommodation/add-facility" className={style.menuLink}>
                                    <div className={`${style.internshipMenuContent}`}>
                                        <GiHouse size={24}/>
                                        <span className={`${style.menuTitle}`}>Add Facility</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to={'/coordinator/facilities'} className={style.menuLink}>
                                    <div className={`${style.internshipMenuContent}`}>
                                        <MdViewList size={24} />
                                        <span className={`${style.menuTitle}`}>View All</span>
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

export default AccommodationMenuPage;