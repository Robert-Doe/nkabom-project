import React, {useRef, useState} from 'react';
import {AiOutlineFileAdd, AiOutlineCheck} from 'react-icons/ai';
import * as XLSX from 'xlsx';
import './SupervisorUploadPage.css'
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
            formData.append('file', file);

            try {
                const response = await fetch('http://localhost:9999/api/supervisors/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    // File uploaded successfully
                    alert("File upload successful")
                    setFile(null);
                    console.log('File uploaded successfully');
                } else {
                    // Handle upload error
                    alert("File upload failed")
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
                                type="submit"
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


function SupervisorUploadPage() {
    const [supervisors, setSupervisors] = useState([]);
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
                <h2>Upload Supervisors</h2>
                      <p>Please select an Excel file containing list of Supervisors</p>
                <div className="mt-4">
                    <ExcelUpload/>
                </div>
            </div>
        </section>

    );
}


export default SupervisorUploadPage;
