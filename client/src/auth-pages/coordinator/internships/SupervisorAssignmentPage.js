import React, {useState} from 'react';
import {AiOutlineFileAdd, AiOutlineCheck} from 'react-icons/ai';
import * as XLSX from 'xlsx';
import './SupervisorAssignmentPage.css'
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";


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
            <input
                type="file"
                accept=".xlsx, .xls"
                onChange={handleFileUpload}
                className="form-control"
            />
            <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={handleSubmit}
                disabled={!fileInput}
            >
                Upload
            </button>
        </div>
    );
}

function SupervisorEntry({onEntry}) {
    const [idInput, setIdInput] = useState('');

    const handleManualEntry = (event) => {
        event.preventDefault();
        if (idInput.trim() === '') {
            return;
        }
        onEntry(idInput.trim());
        setIdInput('');
    };

    return (
        <div className="card-body">
            <h5 className="card-title">Manual Entry</h5>
            <form onSubmit={handleManualEntry}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        value={idInput}
                        onChange={(e) => setIdInput(e.target.value)}
                        className="form-control"
                        placeholder="Enter Supervisor ID"
                    />
                    <button type="submit" className="btn btn-primary">
                        Add Supervisor
                    </button>
                </div>
            </form>
        </div>
    );
}


function ManualEntry() {
    const handleManualEntry = (event) => {
        event.preventDefault();
        // Process manual entry data and update supervisors state
        // ...
    };

    return  <div className="card-body">
        <h5 className="card-title">Manual Entry</h5>
        <form onSubmit={handleManualEntry}>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Supervisor ID"
                />
                <button type="submit" className="btn btn-primary">
                    Add Supervisor
                </button>
            </div>
        </form>
    </div>
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
                {supervisors.length > 0 && (
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
                )}
            </div>
        </section>

    );
}


export default SupervisorAssignmentPage;
