/*
/!*
import React from 'react';
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";
import CoordinatorSideNav from "../CoordinatorSideNav";
import {CgTrack} from "react-icons/cg";
import {MdMessage, MdSettingsApplications} from "react-icons/md";
import style from "../css/Coordinator.module.css";

function SupervisorVisitationReportPage(props) {
    return (
        <section>
            <CoordinatorNav/>
            <div className="container mt-5">
                <h3>Supervisor Visitation Reports</h3>
            </div>
            <section className={'my-5'}>
                <div className="container d-flex justify-content-between">
                    <span className={'h6-inline'}>Themes / Seasons</span>
                    <input type="search" className={`w-25 form-control-sm ${style.searchBox}`}
                           placeholder={'Search by name or ID'}/>
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
        </section>
    );
}

export default SupervisorVisitationReportPage;*!/


import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";
import CoordinatorSideNav from "../CoordinatorSideNav";
import {CgTrack} from "react-icons/cg";
import {MdMessage, MdSettingsApplications} from "react-icons/md";
import style from "../css/Coordinator.module.css";
import {RiseLoader} from "react-spinners";

function SupervisorVisitationReportPage(props) {
    const [themes, setThemes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchThemes();
    }, []);

    const fetchThemes = async () => {
        try {
            const response = await axios.get('https://nkabom.codeden.org/api/internship-themes');
            setThemes(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching themes:', error);
            setIsLoading(false);
        }
    };

    return (<section>
            <CoordinatorNav/>
            {isLoading ? (
                <div className="position-absolute vh-100 d-flex align-items-center w-100 justify-content-center">
                    <RiseLoader/>
                </div>) : (<>
                <div className="container mt-5">
                    <h3>Supervisor Visitation Reports</h3>
                </div>
                <section className={'my-5'}>
                    <div className="container d-flex justify-content-between">
                        <span className={'h6-inline'}>Themes / Seasons</span>
                        <input
                            type="search"
                            className={`w-25 form-control-sm ${style.searchBox}`}
                            placeholder={'Search by name or ID'}
                        />
                    </div>
                    <div className="container">
                        <table className="table table-sm table-bordered">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Start Date</th>
                                <th scope="col">End Date</th>
                                <th scope="col">Details</th>
                            </tr>
                            </thead>
                            <tbody>
                            {themes.map((theme) => (<tr key={theme.id} className={'intern'}>
                                    <th scope="row">{theme.themeName}</th>
                                    <td>{theme.startDate}</td>
                                    <td>{theme.endDate}</td>
                                    <td>{theme.comments}</td>
                                </tr>))}
                            </tbody>
                        </table>

                    </div>
                </section>
            </>)}

        </section>);
}

export default SupervisorVisitationReportPage;
*/


import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";
import CoordinatorSideNav from "../CoordinatorSideNav";
import { CgTrack } from "react-icons/cg";
import { MdMessage, MdSettingsApplications } from "react-icons/md";
import style from "../css/Coordinator.module.css";
import { RiseLoader } from "react-spinners";

function SupervisorVisitationReportPage(props) {
    const [themes, setThemes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate=useNavigate()

    useEffect(() => {
        fetchThemes();
    }, []);

    const fetchThemes = async () => {
        try {
            const response = await axios.get('https://nkabom.codeden.org/api/internship-themes');
            setThemes(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching themes:', error);
            setIsLoading(false);
        }
    };

    return (
        <section>
            <CoordinatorNav />
            {isLoading ? (
                <div className="position-absolute vh-100 d-flex align-items-center w-100 justify-content-center">
                    <RiseLoader />
                </div>
            ) : (
                <>
                    <div className="container mt-5">
                        <h3>Supervisor Visitation Reports</h3>
                    </div>
                    <section className={'my-5'}>
                        <div className="container d-flex justify-content-between">
                            <span className={'h6-inline'}>Themes / Seasons</span>
                            <input
                                type="search"
                                className={`w-25 form-control-sm ${style.searchBox}`}
                                placeholder={'Search by name or ID'}
                            />
                        </div>
                        <div className="container">
                            <table className="table table-sm table-bordered">
                                <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>
                                    <th scope="col">Details</th>
                                </tr>
                                </thead>
                                <tbody>
                                {themes.map((theme) => (
                                    <tr key={theme.id} className={'intern'} onClick={()=>navigate(`/coordinator/themes/${theme.id}/supervisors`)}>
                                        <th scope="row">
                                            {theme.themeName}
                                        </th>
                                        <td>{theme.startDate}</td>
                                        <td>{theme.endDate}</td>
                                        <td>{theme.comments}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </>
            )}
        </section>
    );
}

export default SupervisorVisitationReportPage;
