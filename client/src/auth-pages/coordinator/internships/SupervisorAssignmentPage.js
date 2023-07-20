import React, {useEffect, useRef, useState} from 'react';
import {AiOutlineFileAdd, AiOutlineCheck} from 'react-icons/ai';
import * as XLSX from 'xlsx';
import './SupervisorAssignmentPage.css'
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";
import axios from "axios";


function ExcelUpload({onUpload}) {
    const [fileInput, setFileInput] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setFileInput(file);
    };

    const handleSubmit = () => {
        if (fileInput) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const workbook = XLSX.read(e.target.result, {type: 'array'});
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, {header: 1});
                onUpload(jsonData);
            };
            reader.readAsArrayBuffer(fileInput);
        }
    };

    return (
        <div className="card-body">
            <h5 className="card-title">Upload Excel Sheet</h5>
            <div className="row">
                <div className="col-md-6">
                    <div className="input-group">
                        <input
                            type="file"
                            accept=".xlsx, .xls"
                            onChange={handleFileUpload}
                            className="form-control"
                        />
                        <button
                            type="button"
                            className="btn btn-primary input-group-append"
                            onClick={handleSubmit}
                            disabled={!fileInput}>
                            Upload
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}



function ManualEntry(){
    const [themeOptions, setThemeOptions] = useState([]);
    const supervisorIdRef = useRef();
    const themeRef = useRef()

    useEffect(() => {
        // Fetch available internship themes from the server
        axios
            .get('http://localhost:9999/api/internship-themes')
            .then((response) => {
                // Extract the theme data from the response
                const themes = response.data.map((theme) => ({
                    id: theme.id,
                    name: theme.themeName,
                }));
                // Set the theme options state
                setThemeOptions(themes);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const handleManualEntry = (event) => {
        event.preventDefault();

        const data = {
            themeId: themeRef.current.value,
            staffId: supervisorIdRef.current.value,
            appointmentDate: new Date().toISOString().slice(0, 10),
        };

        fetch(
            `http://localhost:9999/api/internship-themes/${data.themeId}/supervisors`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        )
            .then((response) => response.json())
            .then((responseData) => {
                console.log('Response:', responseData);
                // Do something with the response if needed
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    console.log(themeOptions)

    return (
        <div className="card-body">
            <h5 className="card-title">Manual Entry</h5>
            <form onSubmit={handleManualEntry}>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <select ref={themeRef} className="form-control" required>
                            <option value="">Select Intern Theme</option>
                            {
                                themeOptions.map((theme) => (
                                <option key={theme.id} value={theme.id}>
                                    {theme.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <input
                            ref={supervisorIdRef}
                            type="text"
                            className="form-control"
                            placeholder="Enter Supervisor ID"
                            required
                        />
                    </div>
                </div>
                <div className="container mt-3">
                    <button type="submit" className="btn btn-primary">
                        Add Supervisor
                    </button>
                </div>
            </form>
        </div>
    );
}


function SupervisorAssignmentPage() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [supervisors, setSupervisors] = useState([]);
    const [fileData, setFileData] = useState(null);

    const handleCardSelection = (card) => {
        setSelectedCard(card);
    };

    const handleExcelUpload = (data) => {
        setFileData(data);
    };


    const renderExcelUpload = () => {
        return (
            <ExcelUpload onUpload={handleExcelUpload}/>
        );
    };

    const renderManualEntry = () => {
        return (
            <ManualEntry/>
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
                <h2>Supervisor Assignment</h2>
                <div className="row">
                    <div className="col-md-6 py-3">
                        <div
                            className={`card ${selectedCard === 'excel' ? 'selected' : ''}`}
                            onClick={() => handleCardSelection('excel')}
                        >
                            <div className="card-body">
                                <h5 className="card-title">Excel Upload</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 py-3">
                        <div
                            className={`card ${selectedCard === 'manual' ? 'selected' : ''}`}
                            onClick={() => handleCardSelection('manual')}
                        >
                            <div className="card-body">
                                <h5 className="card-title">Manual Entry</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    {selectedCard === 'excel' && renderExcelUpload()}
                    {selectedCard === 'manual' && renderManualEntry()}
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


export default SupervisorAssignmentPage;
