import React, {useRef, useState} from 'react';
import {AiOutlineFileAdd, AiOutlineCheck} from 'react-icons/ai';
import * as XLSX from 'xlsx';
import './InternUploadPage.css'
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";


function ExcelUpload({onUpload}) {

    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (file) {
            // Prepare the file for upload
            const formData = new FormData();
            formData.append('internsFile', file);

            try {
                const response = await fetch('https://nkabom.codeden.org/', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    // File uploaded successfully
                    console.log('File uploaded successfully');
                } else {
                    // Handle upload error
                    console.error('File upload failed');
                }
            } catch (error) {
                // Handle fetch error
                console.error('Error sending file:', error);
            }
        } else {
            // No file selected
            console.warn('Please select a file to upload');
        }
    };


    return (
        <div className="card-body">
            <h5 className="card-title">Upload Excel Sheet</h5>
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="file"
                                accept=".xlsx, .xls"
                                onChange={handleFileChange}
                                className="form-control"
                            />
                            <button
                                type="button"
                                className="btn btn-primary input-group-append"
                                disabled={!file}>
                                Upload
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

function ManualEntry() {
    const themeRef=useRef()
    const supervisorIdRef=useRef()

    const handleManualEntry = (event) => {
        event.preventDefault();

        const data = {
            themeId: themeRef.current.value,
            staffId: supervisorIdRef.current.value,
            appointmentDate: new Date().toISOString().slice(0, 10),
        };

        fetch(`http://localhost:9999/api/internship-themes/${data.themeId}/supervisors`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log('Response:', responseData);
                // Do something with the response if needed
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    return (
        <div className="card-body">
            <h5 className="card-title">Manual Entry</h5>
            <form onSubmit={handleManualEntry}>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <input ref={supervisorIdRef}
                            type="text"
                            className="form-control"
                            placeholder="Enter Supervisor ID"
                        />
                    </div>
                   <div className="col-md-6">
                       <input ref={themeRef}
                           type="text"
                           className="form-control"
                           placeholder="Enter Theme ID or Track ID"
                       />
                   </div>

                    <div className="container mt-3">
                        <button type="submit" className="btn btn-primary">
                            Add Supervisor
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}


function InternUploadPage() {
    const [interns, setInterns] = useState([]);
    const [fileData, setFileData] = useState(null);

    const handleExcelUpload = (data) => {
        setFileData(data);
    };


    const renderExcelUpload = () => {
        return (
            <ExcelUpload onUpload={handleExcelUpload}/>
        );
    };


    const handleAssignSupervisors = () => {
        // Handle assigning supervisors based on selected card
        // ...
    };

    return (
        <section>
            <CoordinatorNav/>
            <div className="container mt-4">
                <h2>Upload Interns</h2>
                      <p>Please select an Excel file containing list of Interns</p>
                <div className="mt-4">
                    <ExcelUpload/>
                </div>
                {/*{supervisors.length > 0 && (
                    <div>
                        <h4>Assigned Supervisors:</h4>
                        <ul className="list-group">
                            {supervisors.map((supervisor, index) => (
                                <li key={index} className="list-group-item">
                                    {supervisor}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {(selectedCard || supervisors.length > 0) && (
                    <button
                        type="button"
                        className="btn btn-success mt-3"
                        onClick={handleAssignSupervisors}
                    >
                        Assign Supervisors
                    </button>
                )}*/}
            </div>
        </section>

    );
}


export default InternUploadPage;
