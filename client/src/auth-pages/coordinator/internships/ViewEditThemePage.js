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
/*import React, { useEffect, useRef, useState } from 'react';
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
export default ViewEditThemePage;*/
/*

import React, { useEffect, useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import axios from 'axios';



function ViewEditThemePage() {
    const { themeId } = useParams(); // Extracting the ID from the URL
    const themeNameRef = useRef();
    const startDateRef = useRef();
    const endDateRef = useRef();
    const commentsRef = useRef();
    const {v4: uuidv4} = require("uuid");

    const [fileRequests, setFileRequests] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [theme, setTheme] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    console.log(`Id : ${themeId}`)

    useEffect(() => {
        // Fetch the theme details using the ID from the URL
        const fetchThemeDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:9999/api/internship-themes/${themeId}`);
                const themeDetails = response.data;
                setTheme(themeDetails);
                console.log(`Id : ${themeId}`)
            } catch (error) {
                console.error(error);
            }
        };

        fetchThemeDetails();
    }, [themeId]);

    useEffect(() => {
        // Fetch the file requests using the ID from the URL
        const fetchFileRequests = async () => {
            try {
                const response = await axios.get(`http://localhost:9999/api/requested-theme-files/theme/${themeId}`);
                const fileRequestsData = response.data;
                setFileRequests(fileRequestsData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFileRequests();
    }, [themeId]);

    const addFileRequestField = () => {
        const id=uuidv4()
        setFileRequests([...fileRequests, { id, name: '', type: '' }]);
    };

    const handleFileRequestNameChange = (index, value) => {
        const updatedFileRequests = [...fileRequests];
        updatedFileRequests[index].name = value;
        setFileRequests(updatedFileRequests);
    };

    const handleFileRequestTypeChange = (index, value) => {
        const updatedFileRequests = [...fileRequests];
        updatedFileRequests[index].type = value;
        setFileRequests(updatedFileRequests);
    };

    const removeFileRequestField = (index) => {
        const updatedFileRequests = [...fileRequests];
        updatedFileRequests.splice(index, 1);
        setFileRequests(updatedFileRequests);
    };

    const updateTheme = async (e) => {
        e.preventDefault();

        const themeName = themeNameRef.current.value;
        const startDate = startDateRef.current.value;
        const endDate = endDateRef.current.value;
        const comments = commentsRef.current.value;
        setIsSubmitting(true);

        try {
            await axios.put(`http://localhost:9999/api/internship-themes/${themeId}`, {
                themeName,
                startDate,
                endDate,
                comments,
            });

            setSuccessMessage('Theme updated successfully!');
        } catch (error) {
            console.error(error);
        }

        setIsSubmitting(false);
    };

    return (
        <section>
            {/!* Render the OpaqueNav component *!/}
            <main className="container">
                <div className="container mt-1 p-5">
                    <form onSubmit={updateTheme}>
                        <div className="d-flex flex-column align-items-center">
                            <h4 className="font-weight-bolder">View/Edit Internship Theme</h4>
                            <p className="m-3">Update the details for the internship theme</p>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="">
                                        <label htmlFor="themeName" className="text-dark">
                                            Theme Name
                                        </label>
                                        <input
                                            type="text"
                                            ref={themeNameRef}
                                            id="themeName"
                                            className="form-control"
                                            placeholder="Enter the theme name"
                                            defaultValue={theme.themeName}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="">
                                        <label htmlFor="startDate" className="text-dark">
                                            Start Date
                                        </label>
                                        <input
                                            type="date"
                                            ref={startDateRef}
                                            id="startDate"
                                            className="form-control"
                                            defaultValue={theme.startDate}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="">
                                        <label htmlFor="endDate" className="text-dark">
                                            End Date
                                        </label>
                                        <input
                                            type="date"
                                            ref={endDateRef}
                                            id="endDate"
                                            className="form-control"
                                            defaultValue={theme.endDate}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="">
                                        <label htmlFor="comments" className="text-dark">
                                            Comments
                                        </label>
                                        <textarea
                                            name="comments"
                                            ref={commentsRef}
                                            id="comments"
                                            cols="30"
                                            rows="3"
                                            className="form-control"
                                            defaultValue={theme.comments}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            {fileRequests.map((fileRequest, index) => (
                                <div className="row mt-3" key={index}>
                                    <div className="col-md-6">
                                        <div className="">
                                            <label htmlFor={`fileName-${index}`} className="text-dark">
                                                File Name
                                            </label>
                                            <input
                                                type="text"
                                                id={`fileName-${index}`}
                                                className="form-control"
                                                placeholder="Enter the file name"
                                                value={fileRequest.name}
                                                onChange={(e) => handleFileRequestNameChange(index, e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="">
                                            <label htmlFor={`fileType-${index}`} className="text-dark">
                                                Request Type
                                            </label>
                                            <select
                                                id={`fileType-${index}`}
                                                className="form-control"
                                                value={fileRequest.type}
                                                onChange={(e) => handleFileRequestTypeChange(index, e.target.value)}
                                            >
                                                <option value="">Select Type</option>
                                                <option value="Supervisor">Supervisor</option>
                                                <option value="Intern">Intern</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2 pt-4">
                                        <button type="button" className="btn btn-danger mt-3" onClick={() => removeFileRequestField(index)}>
                                            <IoMdClose />
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-primary" onClick={addFileRequestField}>
                                        Add File Request
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 d-flex justify-content-end">
                            <input type="submit" className="btn btn-warning" value="Update Theme" />
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
}

export default ViewEditThemePage;
*/
import React, {useEffect, useRef, useState} from 'react';
import {IoMdClose} from 'react-icons/io';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";
function ViewEditThemePage() {
    const {themeId} = useParams(); // Extracting the ID from the URL
    const themeNameRef = useRef();
    const startDateRef = useRef();
    const endDateRef = useRef();
    const commentsRef = useRef();
    const {v4: uuidv4} = require("uuid");

    const [fileRequests, setFileRequests] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [theme, setTheme] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        // Fetch the theme details using the ID from the URL
        const fetchThemeDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:9999/api/internship-themes/${themeId}`);
                const themeDetails = response.data;
                setTheme(themeDetails);
            } catch (error) {
                console.error(error);
            }
        };

        fetchThemeDetails();
    }, [themeId]);

    useEffect(() => {
        // Fetch the file requests using the ID from the URL
        const fetchFileRequests = async () => {
            try {
                const response = await axios.get(`http://localhost:9999/api/requested-theme-files/theme/${themeId}`);
                const fileRequestsData = response.data;
                setFileRequests(fileRequestsData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFileRequests();
    }, [themeId]);

    const handleFileRequestNameChange = (index, value) => {
        const updatedFileRequests = [...fileRequests];
        updatedFileRequests[index].name = value;
        setFileRequests(updatedFileRequests);
    };

    const handleFileRequestTypeChange = (index, value) => {
        const updatedFileRequests = [...fileRequests];
        updatedFileRequests[index].type = value;
        setFileRequests(updatedFileRequests);
    };

    /* const removeFileRequestField = (index) => {
         const updatedFileRequests = [...fileRequests];
         updatedFileRequests.splice(index, 1);
         setFileRequests(updatedFileRequests);
     };*/

    /*const removeFileRequestField = async (index, fileRequestId) => {
        try {
            // Check if the file request exists in the state
            if (index < fileRequests.length) {
                // Check if the file request was loaded from the database (has an ID)
                const fileRequest = fileRequests[index];
                if (fileRequest.id === fileRequestId) {
                    // Delete the file request from the database
                    await axios.delete(
                        `http://localhost:9999/api/requested-theme-files/${fileRequestId}`
                    );
                }

                // Remove the file request from the state
                const updatedFileRequests = [...fileRequests];
                updatedFileRequests.splice(index, 1);
                setFileRequests(updatedFileRequests);
            } else {
                console.log("File request doesn't exist in the state");
            }
        } catch (error) {
            console.error(error);
        }
    };*/

    const removeFileRequestField = async (index) => {
        try {
            // Check if the file request exists in the state
            if (index < fileRequests.length) {
                // Check if the file request was loaded from the database (has an ID)
                const fileRequest = fileRequests[index];
                if (fileRequest.id) {
                    // Delete the file request from the database
                    await axios.delete(
                        `http://localhost:9999/api/requested-theme-files/${fileRequest.id}`
                    );
                }

                // Remove the file request from the state
                const updatedFileRequests = [...fileRequests];
                updatedFileRequests.splice(index, 1);
                setFileRequests(updatedFileRequests);
            } else {
                console.log("File request doesn't exist in the state");
            }
        } catch (error) {
            console.error(error);
        }
    };


/*    const updateTheme = async (e) => {
        e.preventDefault();

        const themeName = themeNameRef.current.value;
        const startDate = startDateRef.current.value;
        const endDate = endDateRef.current.value;
        const comments = commentsRef.current.value;
        setIsSubmitting(true);

        try {
            await axios.put(`http://localhost:9999/api/internship-themes/${themeId}`, {
                themeName,
                startDate,
                endDate,
                comments,
            });

            setSuccessMessage('Theme updated successfully!');
        } catch (error) {
            console.error(error);
        }

        setIsSubmitting(false);
    };*/

    const updateTheme = async (e) => {
        e.preventDefault();

        const themeName = themeNameRef.current.value;
        const startDate = startDateRef.current.value;
        const endDate = endDateRef.current.value;
        const comments = commentsRef.current.value;
        setIsSubmitting(true);

        try {
            // Update the theme details in the database
            await axios.put(`http://localhost:9999/api/internship-themes/${themeId}`, {
                themeName,
                startDate,
                endDate,
                comments,
            });

            const newFileRequests = [];
            const updatedFileRequests = [];

            // Group the file requests into new and updated arrays
            for (const fileRequest of fileRequests) {
                if (fileRequest.id) {
                    updatedFileRequests.push(fileRequest);
                } else {
                    newFileRequests.push(fileRequest);
                }
            }

            // Send the new file requests for addition
            if (newFileRequests.length > 0) {
                await axios.post(
                    'http://localhost:9999/api/requested-theme-files/multiple-upload',
                    {
                        themeId,
                        requestedFiles: newFileRequests,
                    }
                );
            }

            // Send the updated file requests for update
            for (const fileRequest of updatedFileRequests) {
                await axios.put(
                    `http://localhost:9999/api/requested-theme-files/${fileRequest.id}`,
                    fileRequest
                );
            }

            setSuccessMessage('Theme updated successfully!');
        } catch (error) {
            console.error(error);
        }

        setIsSubmitting(false);
    };


    const addFileRequestField = () => {
        const id = uuidv4()
        setFileRequests([...fileRequests, {id, name: '', type: ''}]);
    };

    return (
        <section>
            {/* Render the OpaqueNav component */}
            <CoordinatorNav/>
            <main className="container">
                <div className="container mt-1 p-5">
                    <form onSubmit={updateTheme}>
                        <div className="d-flex flex-column align-items-center">
                            <h4 className="font-weight-bolder">View/Edit Internship Theme</h4>
                            <p className="m-3">Update the details for the internship theme</p>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="">
                                        <label htmlFor="themeName" className="text-dark">
                                            Theme Name
                                        </label>
                                        <input
                                            type="text"
                                            ref={themeNameRef}
                                            id="themeName"
                                            className="form-control"
                                            placeholder="Enter the theme name"
                                            defaultValue={theme.themeName}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="">
                                        <label htmlFor="startDate" className="text-dark">
                                            Start Date
                                        </label>
                                        <input
                                            type="date"
                                            ref={startDateRef}
                                            id="startDate"
                                            className="form-control"
                                            defaultValue={theme.startDate}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="">
                                        <label htmlFor="endDate" className="text-dark">
                                            End Date
                                        </label>
                                        <input
                                            type="date"
                                            ref={endDateRef}
                                            id="endDate"
                                            className="form-control"
                                            defaultValue={theme.endDate}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="">
                                        <label htmlFor="comments" className="text-dark">
                                            Comments
                                        </label>
                                        <textarea
                                            name="comments"
                                            ref={commentsRef}
                                            id="comments"
                                            cols="30"
                                            rows="3"
                                            className="form-control"
                                            defaultValue={theme.comments}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            {
                                fileRequests.map((fileRequest, index) => {
                                    console.log(fileRequest)
                                    return (
                                        <div className="row mt-3" key={index}>
                                            <div className="col-md-6">
                                                <div className="">
                                                    <label htmlFor={`fileName-${index}`} className="text-dark">
                                                        File Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id={`fileName-${index}`}
                                                        className="form-control"
                                                        placeholder="Enter the file name"
                                                        value={fileRequest.requestedFileName}
                                                        onChange={(e) => handleFileRequestNameChange(index, e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="">
                                                    <label htmlFor={`fileType-${index}`} className="text-dark">
                                                        Request Type
                                                    </label>
                                                    <select
                                                        id={`fileType-${index}`}
                                                        className="form-control"
                                                        value={fileRequest.type}
                                                        onChange={(e) => handleFileRequestTypeChange(index, e.target.value)}
                                                    >
                                                        <option value="">Select Type</option>
                                                        <option value="Supervisor">Supervisor</option>
                                                        <option value="Intern">Intern</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-2 pt-4">
                                                <button type="button" className="btn btn-danger mt-3"
                                                        onClick={() => removeFileRequestField(index)}>
                                                    <IoMdClose/>
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-primary" onClick={addFileRequestField}>
                                        Add File Request
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 d-flex justify-content-end">
                            <input type="submit" className="btn btn-warning" value="Update Theme"/>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
}

export default ViewEditThemePage;
