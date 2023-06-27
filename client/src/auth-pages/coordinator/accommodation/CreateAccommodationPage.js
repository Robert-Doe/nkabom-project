import React, {useState} from 'react';
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";

function CreateAccommodationPage() {
    const [accommodation, setAccommodation] = useState({
        name: '',
        location: '',
        description: '',
        price: '',
        availability: '',
        accommodationType: 'REGULAR',
        roomType: 'REGULAR',
        ownerPhone: '',
        ownerEmail: '',
        ownerName: '',
        additionalNotes: '',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setAccommodation((prevAccommodation) => ({
            ...prevAccommodation,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(accommodation)
        try {
            const response = await fetch('http://localhost:9999/api/accommodations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(accommodation),
            });
            if (response.ok) {
                console.log('Accommodation created successfully');
                // Reset form
                setAccommodation({
                    // ...existing state values
                });
                setAccommodation({
                    name: '',
                    location: '',
                    description: '',
                    price: '',
                    availability: '',
                    accommodationType: '',
                    roomType: '',
                    ownerName: '',
                    ownerEmail: '',
                    ownerPhone: '',
                    additionalNotes: '',
                });
            } else {
                console.log('Failed to create accommodation');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };


    return (
        <section>
            <CoordinatorNav/>
            <div className="container py-5">
                <h2>Add Accommodation</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Accommodation Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={accommodation.name}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="location" className="form-label">Location</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={accommodation.location}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-12">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={accommodation.description}
                                onChange={handleInputChange}
                                className="form-control"
                            ></textarea>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input
                                type="text"
                                id="price"
                                name="price"
                                value={accommodation.price}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="availability" className="form-label">Availability</label>
                            <input
                                type="text"
                                id="availability"
                                name="availability"
                                value={accommodation.availability}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                    </div>

                    {/* Additional fields for owner/contact */}
                    <div className="row mb-3">
                        <div className="col-md-4">
                            <label htmlFor="ownerName" className="form-label">Owner Name</label>
                            <input
                                type="text"
                                id="ownerName"
                                name="ownerName"
                                value={accommodation.ownerName}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="ownerEmail" className="form-label">Owner Email</label>
                            <input
                                type="email"
                                id="ownerEmail"
                                name="ownerEmail"
                                value={accommodation.ownerEmail}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="ownerPhone" className="form-label">Owner Phone</label>
                            <input
                                type="tel"
                                id="ownerPhone"
                                name="ownerPhone"
                                value={accommodation.ownerPhone}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                    </div>

                    {/* Add more rows and columns for other form fields */}

                    {/* <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="photos" className="form-label">Accommodation Photos</label>
                            <input
                                type="file"
                                id="photos"
                                name="photos"
                                multiple
                                onChange={handlePhotoUpload}
                                className="form-control"
                            />
                        </div>
                    </div>*/}

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default CreateAccommodationPage;
