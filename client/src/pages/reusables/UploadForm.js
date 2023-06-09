import React, { useState } from 'react';

const UploadForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!selectedFile) {
            alert('Please select a file');
            return;
        }

        const formData = new FormData();
        formData.append('picture', selectedFile);

        fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                alert('File uploaded successfully');
            })
            .catch((error) => {
                console.error(error);
                alert('An error occurred while uploading the file');
            });
    };

    return (
        <div>
            <h2>Upload a Photo</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default UploadForm;
