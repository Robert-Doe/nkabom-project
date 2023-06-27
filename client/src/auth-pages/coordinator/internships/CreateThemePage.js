/*
/!*
import React, {useEffect, useRef, useState} from 'react';
import OpaqueNav from "../../../pages/reusables/OpaqueNav";
import axios from "axios";

function CreateThemePage(props) {
    const themeNameRef=useRef()
    const startDateRef=useRef()
    const endDateRef=useRef()
    const commentsRef=useRef()

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        let timeout;

        if (successMessage) {
            timeout = setTimeout(() => {
                setSuccessMessage('');
            }, 3000); // Adjust the duration as needed (in milliseconds)
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [successMessage]);

    const createTheme=async (e) => {

        e.preventDefault();

        const themeName = themeNameRef.current.value;
        const startDate = startDateRef.current.value;
        const endDate = endDateRef.current.value;
        const comments = commentsRef.current.value;
        setIsSubmitting(true);

        try {
            const response = await axios.post('http://localhost:9999/api/internship-themes', {
                themeName,
                startDate,
                endDate,
                comments
            });
            console.log(response.data);
            // Show success message
            setSuccessMessage('Theme created successfully!');
            // Handle the response as needed
            // Clear the textboxes
            themeNameRef.current.value = '';
            startDateRef.current.value = '';
            endDateRef.current.value = '';
            commentsRef.current.value = '';
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
                    {successMessage && (
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            {successMessage}
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    )}
                    <form action="#">
                        <div className={` d-flex flex-column align-items-center`}>
                            <h4 className={'font-weight-bolder'}>Create Internship Theme</h4>
                            <p className={'m-3'}>Enter the details for the new internship theme or season</p>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className={``}>
                                        <label htmlFor="themeName" className={'text-dark'}>Theme Name</label>
                                        <input type="text" ref={themeNameRef} id={'themeName'} className={'form-control'} placeholder={'Enter the theme name'} />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className={``}>
                                        <label htmlFor="startDate" className={'text-dark'}>Start Date</label>
                                        <input type="date" ref={startDateRef} id={'startDate'} className={'form-control'} />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className={``}>
                                        <label htmlFor="endDate" className={'text-dark'}>End Date</label>
                                        <input type="date" ref={endDateRef} id={'endDate'} className={'form-control'} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className={``}>
                                        <label htmlFor="comments" className={'text-dark'}>Comments</label>
                                        <textarea name="comments" id="comments" cols="30" rows="3" className={'form-control'} ref={commentsRef}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={` mt-3 d-flex justify-content-end`}>
                            <input type="submit" className={'btn btn-warning'} onClick={createTheme} value={'Create Theme'} />
                        </div>
                    </form>
                </div>
            </main>
        </section>

    );
}

export default CreateThemePage;*!/

import React, { useEffect, useRef, useState } from 'react';
import OpaqueNav from "../../../pages/reusables/OpaqueNav";
import axios from "axios";
import {MdClose} from "react-icons/md";

function CreateThemePage() {
    const themeNameRef = useRef();
    const startDateRef = useRef();
    const endDateRef = useRef();
    const commentsRef = useRef();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [fileRequestFields, setFileRequestFields] = useState([]);

    useEffect(() => {
        let timeout;

        if (successMessage) {
            timeout = setTimeout(() => {
                setSuccessMessage('');
            }, 3000); // Adjust the duration as needed (in milliseconds)
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [successMessage]);

    const createTheme = async (e) => {
        e.preventDefault();

        const themeName = themeNameRef.current.value;
        const startDate = startDateRef.current.value;
        const endDate = endDateRef.current.value;
        const comments = commentsRef.current.value;
        setIsSubmitting(true);

        try {
            const response = await axios.post('http://localhost:9999/api/internship-themes', {
                themeName,
                startDate,
                endDate,
                comments
            });

            const fileResponse = await axios.post('http://localhost:9999/api/requested-theme-files/multiple-upload', {
                fileNames:fileRequestFields.map(file=>file.value),
                themeId: response.data.id
            });


           /!* for (const inputField of fileRequestFields) {
                if(!inputField.isDismissed){
                    const fileResponse = await axios.post('http://localhost:9999/api/requested-theme-files', {
                        requestFileName:inputField.value,
                        themeId: response.data.id
                    });
                }
            }*!/

            console.log(response.data);
            // Show success message
            setSuccessMessage('Theme created successfully!');
            // Clear the textboxes
            themeNameRef.current.value = '';
            startDateRef.current.value = '';
            endDateRef.current.value = '';
            commentsRef.current.value = '';
            // Clear the file request fields
            setFileRequestFields([]);
        } catch (error) {
            console.error(error);
        }

        setIsSubmitting(false);
    };

    const addFileRequestField = () => {
        setFileRequestFields((prevFields) => [...prevFields, { value: '', isDismissed: false }]);
    };

    const dismissFileRequestField = (index) => {
        setFileRequestFields((prevFields) => {
            const updatedFields = [...prevFields];
            updatedFields.splice(index, 1);
            return updatedFields;
        });
    };

    return (
        <section>
            <OpaqueNav />
            <main className="container">
                <div className="container mt-1 p-5">
                    {successMessage && (
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            {successMessage}
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    )}
                    <form onSubmit={createTheme}>
                        <div className="d-flex flex-column align-items-center">
                            <h4 className="font-weight-bolder">Create Internship Theme</h4>
                            <p className="m-3">Enter the details for the new internship theme or season</p>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div>
                                        <label htmlFor="themeName" className="text-dark">Theme Name</label>
                                        <input type="text" ref={themeNameRef} id="themeName" className="form-control" placeholder="Enter the theme name" required />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div>
                                        <label htmlFor="startDate" className="text-dark">Start Date</label>
                                        <input type="date" ref={startDateRef} id="startDate" className="form-control" required />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div>
                                        <label htmlFor="endDate" className="text-dark">End Date</label>
                                        <input type="date" ref={endDateRef} id="endDate" className="form-control" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div>
                                        <label htmlFor="comments" className="text-dark">Comments</label>
                                        <textarea name="comments" id="comments" cols="30" rows="3" className="form-control" ref={commentsRef}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    {fileRequestFields.map((field, index) => {
                                        if (field.isDismissed) {
                                            return null;
                                        }
                                        return (
                                            <div className="input-group mb-3" key={index}>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter file name"
                                                    value={field.value}
                                                    onChange={(e) => {
                                                        const updatedFields = [...fileRequestFields];
                                                        updatedFields[index].value = e.target.value;
                                                        setFileRequestFields(updatedFields);
                                                    }}
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={() => dismissFileRequestField(index)}
                                                >
                                                    <MdClose />
                                                </button>
                                            </div>
                                        );
                                    })}
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={addFileRequestField}
                                    >
                                        Add File Request
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 d-flex justify-content-end">
                            <input type="submit" className="btn btn-warning" value="Create Theme" />
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
}

export default CreateThemePage;

*/
/*import React, { useState } from 'react';
import OpaqueNav from "../../../pages/reusables/OpaqueNav";
import axios from "axios";

function CreateThemePage(props) {
    const [fileRequests, setFileRequests] = useState([{ name: '', type: '' }]);

    const addFileRequestField = () => {
        setFileRequests([...fileRequests, { name: '', type: '' }]);
    };

    const removeFileRequestField = (index) => {
        const updatedFileRequests = [...fileRequests];
        updatedFileRequests.splice(index, 1);
        setFileRequests(updatedFileRequests);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send the fileRequests data to the server
        try {
            const response = await axios.post('http://localhost:9999/api/file-requests', { fileRequests });
            console.log(response.data);
            // Handle the response as needed
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section>
            <OpaqueNav />
            <main className={`container`}>
                <div className="container mt-1 p-5">
                    <form onSubmit={handleSubmit}>
                        <div className={` d-flex flex-column align-items-center`}>
                            <h4 className={'font-weight-bolder'}>Create Internship Theme</h4>
                            <p className={'m-3'}>Enter the details for the new internship theme or season</p>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className={``}>
                                        <label htmlFor="themeName" className={'text-dark'}>Theme Name</label>
                                        <input type="text" id={'themeName'} className={'form-control'} placeholder={'Enter the theme name'} />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className={``}>
                                        <label htmlFor="startDate" className={'text-dark'}>Start Date</label>
                                        <input type="date" id={'startDate'} className={'form-control'} />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className={``}>
                                        <label htmlFor="endDate" className={'text-dark'}>End Date</label>
                                        <input type="date" id={'endDate'} className={'form-control'} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className={``}>
                                        <label htmlFor="comments" className={'text-dark'}>Comments</label>
                                        <textarea name="comments" id="comments" cols="30" rows="3" className={'form-control'}></textarea>
                                    </div>
                                </div>
                            </div>
                            {fileRequests.map((fileRequest, index) => (
                                <div className="row mt-3" key={index}>
                                    <div className="col-md-6">
                                        <div className={``}>
                                            <label htmlFor={`fileName-${index}`} className={'text-dark'}>File Name</label>
                                            <input
                                                type="text"
                                                id={`fileName-${index}`}
                                                className={'form-control'}
                                                placeholder={'Enter the file name'}
                                                value={fileRequest.name}
                                                onChange={(e) => handleFileRequestNameChange(index, e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className={``}>
                                            <label htmlFor={`fileType-${index}`} className={'text-dark'}>Request Type</label>
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
                                    <div className="col-md-2">
                                        <button type="button" className="btn btn-danger" onClick={() => removeFileRequestField(index)}>Remove</button>
                                    </div>
                                </div>
                            ))}
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-primary" onClick={addFileRequestField}>Add File Request</button>
                                </div>
                            </div>
                        </div>
                        <div className={` mt-3 d-flex justify-content-end`}>
                            <input type="submit" className={'btn btn-warning'} value={'Create Theme'} />
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
}

export default CreateThemePage;*/
/*

import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import OpaqueNav from "../../../pages/reusables/OpaqueNav";
import axios from "axios";

function CreateThemePage(props) {
    const [fileRequests, setFileRequests] = useState([{ name: '', type: '' }]);

    const addFileRequestField = () => {
        setFileRequests([...fileRequests, { name: '', type: '' }]);
    };

    const removeFileRequestField = (index) => {
        const updatedFileRequests = [...fileRequests];
        updatedFileRequests.splice(index, 1);
        setFileRequests(updatedFileRequests);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send the fileRequests data to the server
        try {
            const response = await axios.post('http://localhost:9999/api/file-requests', { fileRequests });
            console.log(response.data);
            // Handle the response as needed
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section>
            <OpaqueNav />
            <main className={`container`}>
                <div className="container mt-1 p-5">
                    <form onSubmit={handleSubmit}>
                        <div className={` d-flex flex-column align-items-center`}>
                            <h4 className={'font-weight-bolder'}>Create Internship Theme</h4>
                            <p className={'m-3'}>Enter the details for the new internship theme or season</p>
                        </div>
                        <div className="container">
                            <div className="row">
                                {/!* Theme details *!/}
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className={``}>
                                        {/!* Comments *!/}
                                    </div>
                                </div>
                            </div>
                            {fileRequests.map((fileRequest, index) => (
                                <div className="row mt-3" key={index}>
                                    <div className="col-md-6">
                                        <div className={``}>
                                            {/!* File name input *!/}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className={``}>
                                            {/!* Request type select *!/}
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <button type="button" className="btn btn-danger" onClick={() => removeFileRequestField(index)}>
                                            <IoMdClose />
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-primary" onClick={addFileRequestField}>Add File Request</button>
                                </div>
                            </div>
                        </div>
                        <div className={` mt-3 d-flex justify-content-end`}>
                            <input type="submit" className={'btn btn-warning'} value={'Create Theme'} />
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
}

export default CreateThemePage;*/

import React, {useEffect, useRef, useState} from 'react';
import OpaqueNav from "../../../pages/reusables/OpaqueNav";
import axios from "axios";
import {IoMdClose} from "react-icons/io";
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";
const {v4: uuidv4} = require("uuid");

function CreateThemePage(props) {
    const [fileRequests, setFileRequests] = useState([]);

    const themeNameRef = useRef();
    const startDateRef = useRef();
    const endDateRef = useRef();
    const commentsRef = useRef();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [fileRequestFields, setFileRequestFields] = useState([]);

    useEffect(() => {
        let timeout;

        if (successMessage) {
            timeout = setTimeout(() => {
                setSuccessMessage('');
            }, 3000); // Adjust the duration as needed (in milliseconds)
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [successMessage]);



    const addFileRequestField = () => {
       // const id=uuidv4()
        setFileRequests([...fileRequests, { name: '', type: '' }]);
    };

    const removeFileRequestField = (index) => {
        const updatedFileRequests = [...fileRequests];
        updatedFileRequests.splice(index, 1);
        setFileRequests(updatedFileRequests);
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

 /*   const handleSubmit = async (e) => {
        e.preventDefault();
        // Send the fileRequests data to the server
        try {
            const response = await axios.post('http://localhost:9999/api/file-requests', { fileRequests });
            console.log(response.data);
            // Handle the response as needed
        } catch (error) {
            console.error(error);
        }
    };*/

    const createTheme = async (e) => {
        e.preventDefault();

        const themeName = themeNameRef.current.value;
        const startDate = startDateRef.current.value;
        const endDate = endDateRef.current.value;
        const comments = commentsRef.current.value;
        setIsSubmitting(true);

        console.log(fileRequests)

      try {
            const response = await axios.post('http://localhost:9999/api/internship-themes', {
                themeName,
                startDate,
                endDate,
                comments,
                fileRequests: fileRequests.map((field) => field.value),
            });

          const fileResponse = await axios.post('http://localhost:9999/api/requested-theme-files/multiple-upload', {
              requestedFiles:fileRequests,
              themeId: response.data.id
          });

            console.log(fileRequests)

            //console.log(response.data);
            // Show success message
            setSuccessMessage('Theme created successfully!');
            // Clear the textboxes
            themeNameRef.current.value = '';
            startDateRef.current.value = '';
            endDateRef.current.value = '';
            commentsRef.current.value = '';
            // Clear the file request fields
            setFileRequestFields([]);
        } catch (error) {
            console.error(error);
        }

        setIsSubmitting(false);
    };

    return (
        <section>
            <CoordinatorNav />
            <main className={`container`}>
                <div className="container mt-1 p-5">
                    <form onSubmit={createTheme}>
                        <div className={` d-flex flex-column align-items-center`}>
                            <h4 className={'font-weight-bolder'}>Create Internship Theme</h4>
                            <p className={'m-3'}>Enter the details for the new internship theme or season</p>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className={``}>
                                        <label htmlFor="themeName" className={'text-dark'}>Theme Name</label>
                                        <input type="text" ref={themeNameRef} id={'themeName'} className={'form-control'} placeholder={'Enter the theme name'} />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className={``}>
                                        <label htmlFor="startDate" className={'text-dark'}>Start Date</label>
                                        <input type="date" ref={startDateRef} id={'startDate'} className={'form-control'} />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className={``}>
                                        <label htmlFor="endDate" className={'text-dark'}>End Date</label>
                                        <input type="date" ref={endDateRef} id={'endDate'} className={'form-control'} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className={``}>
                                        <label htmlFor="comments" className={'text-dark'}>Comments</label>
                                        <textarea name="comments" ref={commentsRef} id="comments" cols="30" rows="3" className={'form-control'}></textarea>
                                    </div>
                                </div>
                            </div>
                            {fileRequests.map((fileRequest, index) => (
                                <div className="row mt-3" key={index}>
                                    <div className="col-md-6">
                                        <div className={``}>
                                            <label htmlFor={`fileName-${index}`} className={'text-dark'}>File Name</label>
                                            <input
                                                type="text"
                                                id={`fileName-${index}`}
                                                className={'form-control'}
                                                placeholder={'Enter the file name'}
                                                value={fileRequest.name}
                                                onChange={(e) => handleFileRequestNameChange(index, e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className={``}>
                                            <label htmlFor={`fileType-${index}`} className={'text-dark'}>Request Type</label>
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
                                        <button type="button" className="btn btn-danger mt-3" onClick={() => removeFileRequestField(index)}><IoMdClose/></button>
                                    </div>
                                </div>
                            ))}
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-primary" onClick={addFileRequestField}>Add File Request</button>
                                </div>
                            </div>
                        </div>
                        <div className={` mt-3 d-flex justify-content-end`}>
                            <input type="submit" className={'btn btn-warning'} value={'Create Theme'} />
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
}

export default CreateThemePage;
