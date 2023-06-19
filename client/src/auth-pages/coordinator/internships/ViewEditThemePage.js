/*
import React, { useEffect, useRef, useState } from 'react';
import OpaqueNav from "../../../pages/reusables/OpaqueNav";
import axios from "axios";
import {useParams} from "react-router-dom";

function ViewEditThemePage(props) {
    const {themeId}=useParams()
    const themeNameRef = useRef();
    const startDateRef = useRef();
    const endDateRef = useRef();
    const commentsRef = useRef();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        fetchTheme();
    }, []);

    const fetchTheme = async () => {
        try {
            const response = await axios.get(`http://localhost:9999/api/internship-themes/${themeId}`);
            setTheme(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const updateTheme = async (e) => {
        e.preventDefault();

        const themeName = themeNameRef.current.value;
        const startDate = startDateRef.current.value;
        const endDate = endDateRef.current.value;
        const comments = commentsRef.current.value;
        setIsSubmitting(true);

        try {
            const response = await axios.put(`http://localhost:9999/api/internship-themes/${themeId}`, {
                themeName,
                startDate,
                endDate,
                comments
            });
            console.log(response.data);
            setSuccessMessage('Theme updated successfully!');
        } catch (error) {
            console.error(error);
        }

        setIsSubmitting(false);
    };

    return (
        <section>
            <OpaqueNav />
            <main className={`container`}>
                <div className="container mt-1 p-5">
                    {theme && (
                        <>
                            {successMessage && (
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    {successMessage}
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            )}
                            <form action="#">
                                <div className={` d-flex flex-column align-items-center`}>
                                    <h4 className={'font-weight-bolder'}>Edit Internship Theme</h4>
                                    <p className={'m-3'}>Update the details for the internship theme or season</p>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className={``}>
                                                <label htmlFor="themeName" className={'text-dark'}>Theme Name</label>
                                                <input type="text" ref={themeNameRef} id={'themeName'} className={'form-control'} defaultValue={theme.themeName} />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className={``}>
                                                <label htmlFor="startDate" className={'text-dark'}>Start Date</label>
                                                <input type="date" ref={startDateRef} id={'startDate'} className={'form-control'} defaultValue={theme.startDate} />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className={``}>
                                                <label htmlFor="endDate" className={'text-dark'}>End Date</label>
                                                <input type="date" ref={endDateRef} id={'endDate'} className={'form-control'} defaultValue={theme.endDate} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className={``}>
                                                <label htmlFor="comments" className={'text-dark'}>Comments</label>
                                                <textarea name="comments" id="comments" cols="30" rows="3" className={'form-control'} ref={commentsRef} defaultValue={theme.comments}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={` mt-3 d-flex justify-content-end`}>
                                    <input type="submit" className={'btn btn-warning'} onClick={updateTheme} value={'Update Theme'} />
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </main>
        </section>
    );
}

export default ViewEditThemePage;
*/

import React, { useEffect, useRef, useState } from 'react';
import OpaqueNav from "../../../pages/reusables/OpaqueNav";
import axios from "axios";
import {useParams} from "react-router-dom";

function ViewEditThemePage(props) {
    const {themeId}=useParams()// Assuming the themeId is passed as a route parameter
    const themeNameRef = useRef();
    const startDateRef = useRef();
    const endDateRef = useRef();
    const commentsRef = useRef();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [theme, setTheme] = useState(null);
    const [supervisors, setSupervisors] = useState([]);

    useEffect(() => {
        fetchTheme();
        fetchSupervisors();
    }, []);

    const fetchTheme = async () => {
        try {
            const response = await axios.get(`http://localhost:9999/api/internship-themes/${themeId}`);
            setTheme(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchSupervisors = async () => {
        try {
            const response = await axios.get(`http://localhost:9999/api/internship-themes/${themeId}/supervisors`);
            setSupervisors(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const updateTheme = async (e) => {
        e.preventDefault();

        const themeName = themeNameRef.current.value;
        const startDate = startDateRef.current.value;
        const endDate = endDateRef.current.value;
        const comments = commentsRef.current.value;
        setIsSubmitting(true);

        try {
            const response = await axios.put(`http://localhost:9999/api/internship-themes/${themeId}`, {
                themeName,
                startDate,
                endDate,
                comments
            });
            console.log(response.data);
            setSuccessMessage('Theme updated successfully!');
        } catch (error) {
            console.error(error);
        }

        setIsSubmitting(false);
    };

    return (
        <section>
            <OpaqueNav />
            <main className={`container`}>
                <div className="container mt-1 p-5">
                    {theme && (
                        <>
                            {successMessage && (
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    {successMessage}
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            )}
                            <form action="#">
                                <div className={` d-flex flex-column align-items-center`}>
                                    <h4 className={'font-weight-bolder'}>Edit Internship Theme</h4>
                                    <p className={'m-3'}>Update the details for the internship theme or season</p>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className={``}>
                                                <label htmlFor="themeName" className={'text-dark'}>Theme Name</label>
                                                <input type="text" ref={themeNameRef} id={'themeName'} className={'form-control'} defaultValue={theme.themeName} />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className={``}>
                                                <label htmlFor="startDate" className={'text-dark'}>Start Date</label>
                                                <input type="date" ref={startDateRef} id={'startDate'} className={'form-control'} defaultValue={theme.startDate} />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className={``}>
                                                <label htmlFor="endDate" className={'text-dark'}>End Date</label>
                                                <input type="date" ref={endDateRef} id={'endDate'} className={'form-control'} defaultValue={theme.endDate} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className={``}>
                                                <label htmlFor="comments" className={'text-dark'}>Comments</label>
                                                <textarea name="comments" id="comments" cols="30" rows="3" className={'form-control'} ref={commentsRef} defaultValue={theme.comments}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={` mt-3 d-flex justify-content-end`}>
                                    <input type="submit" className={'btn btn-warning'} onClick={updateTheme} value={'Update Theme'} />
                                </div>
                            </form>
                            <div className="container mt-5">
                                <h4 className={'font-weight-bolder'}>Registered Lecturers</h4>
                                <div className="row">
                                    {supervisors.map((supervisor) => (
                                        <div key={supervisor.id} className="col-md-3 mb-3">
                                            <button type="button" className="btn btn-primary btn-block">{supervisor.name}</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </main>
        </section>
    );
}

export default ViewEditThemePage;
