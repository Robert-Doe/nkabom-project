import React, {useState} from 'react';
import OpaqueNav from "../../pages/reusables/OpaqueNav";
import axios from "axios";

function AddNewsSegmentPage(props){

        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');
        const [link, setLink] = useState('');
        const [picture, setPicture] = useState(null);

       /* const handleSubmit = (event) => {
            event.preventDefault();

            // Check if picture is uploaded
            if (!picture) {
                alert('Please upload a picture');
                return;
            }

            // Perform your desired actions with the form data (e.g., submit to an API)
            console.log('Title:', title);
            console.log('Description:', description);
            console.log('Link:', link);
            console.log('Picture:', picture);

            // Clear form fields
            setTitle('');
            setDescription('');
            setLink('');
            setPicture(null);
        };*/


    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if picture is uploaded
        if (!picture) {
            alert('Please upload a picture');
            return;
        }

        // Create a form data object
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('link', link);
        formData.append('picture', picture);

        try {
            // Make the API request
            const response = await axios.post('http://localhost:9999/api/news', formData);

            // Handle the response if needed
            console.log('API response:', response.data);

            // Clear form fields
            setTitle('');
            setDescription('');
            setLink('');
            setPicture(null);
        } catch (error) {
            // Handle errors
            console.error('API request error:', error);
        }
    };

    const handlePictureChange = (event) => {
            const file = event.target.files[0];

            // Check file dimensions
            const img = new Image();
            img.onload = () => {
                if (img.width !== img.height) {
                    alert('Please upload a square image or an image with equal dimensions');
                    event.target.value = ''; // Clear file input value
                    setPicture(null);
                } else {
                    setPicture(file);
                }
            };

            img.src = URL.createObjectURL(file);
        };

        return (
            <section>
                <OpaqueNav/>
                <main className="container">
                    <div className="alert alert-warning mt-3">
                        <h4 className={'text-dark font-weight-bolder'}>Submit News</h4>
                    </div>

                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Brief Description</label>
                            <textarea
                                className="form-control"
                                id="description"
                                rows="3"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="link">Link to News</label>
                            <input
                                type="text"
                                className="form-control"
                                id="link"
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="picture">Upload Picture - <span className={'font-weight-lighter'}>Select an image with square properties</span></label>
                            <input
                                type="file"
                                accept="image/*"
                                className="form-control-file"
                                id="picture"
                                onChange={handlePictureChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </main>
            </section>
        );

}

export default AddNewsSegmentPage;