import CoordinatorNav from "../../pages/reusables/CoordinatorNav";
import 'bootstrap/dist/css/bootstrap.css'
import './coordinator.css'
import {BiBulb} from "react-icons/bi";
import {NavLink} from "react-router-dom";
import CoordinatorSideNav from "./CoordinatorSideNav";
import {AiFillBulb} from "react-icons/ai";
import {GiGraduateCap} from "react-icons/gi";
import {MdMessage, MdSettingsApplications} from "react-icons/md";
import {CgTrack} from "react-icons/cg";
import style from './css/Coordinator.module.css'
import useCoordinatorAuth from "../../hooks/useCoordinatorAuth";



function CoordinatorDashboard(){
    useCoordinatorAuth()
    return (
        <section>
            <CoordinatorNav/>
            <main className={'coordinator-main'}>
                <CoordinatorSideNav link={'/dashboard'}/>
                <aside className={'main-body'}>
                    <section className={'container'}>
                        <div className="row mt-3">
                            <div className="col-md-4 d-flex justify-content-between py-2 border">
                                <CgTrack fontSize={25}/> <span className={'text'}> Internships</span> <span className={'count'}>20</span>
                            </div>
                            <div className="col-md-4 d-flex justify-content-between py-2 border">
                                <MdSettingsApplications fontSize={25}/> <span className={'text'}>Application Tracker</span> <span className={'count'}>22</span>
                            </div>
                            <div className="col-md-4 d-flex justify-content-between py-2 border">
                                <MdMessage  fontSize={25}/> <span className={'text'}>Updates</span> <span className={'count'}>1</span>
                            </div>
                        </div>
                    </section>
                    <section className={'my-5'}>
                        <div className="container d-flex justify-content-between">
                            <span className={'h6-inline'}>Interns</span>
                            <input type="search" className={`w-25 form-control-sm ${style.searchBox}`} placeholder={'Search by name or ID'}/>
                        </div>
                        <div className="container">
                            <table className="table table-sm table-bordered">
                                <thead className="thead-dark">
                                <tr>
                                    <th scope="col">School ID</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Surname</th>
                                    <th scope="col">Department</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className={'intern'}>
                                    <th scope="row">1660717</th>
                                    <td>Robert</td>
                                    <td>Doe</td>
                                    <td>Computer Science</td>
                                </tr>
                                <tr className={'intern'}>
                                    <th scope="row">1660817</th>
                                    <td>Faustina</td>
                                    <td>Mley</td>
                                    <td>Computer Science</td>
                                </tr>
                                <tr className={'intern'}>
                                    <th scope="row">1660917</th>
                                    <td>Chinonso</td>
                                    <td>Okoye</td>
                                    <td>Computer Science</td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                    </section>
                </aside>
            </main>
        </section>
    );
}

export default CoordinatorDashboard;