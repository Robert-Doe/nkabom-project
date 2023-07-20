import React, {useState} from 'react';
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
                const response = await fetch('http://localhost:9999/api/accommodations/upload', {
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

function UploadFacilitiesPage(props) {


    return (
        <section>
            <CoordinatorNav/>
            <main className={'container'}>
                <h5 className="py-2 font-weight-bold">Upload Facilities</h5>
                <ExcelUpload/>
            </main>
        </section>
    );
}

export default UploadFacilitiesPage;