import React, {useRef, useState} from 'react';
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";


function CreateAccommodationPage() {
    const nameRef = useRef(null);
    const locationRef = useRef(null);
    const descriptionRef = useRef(null);
    const ownerNameRef = useRef(null);
    const ownerEmailRef = useRef(null);
    const ownerPhoneRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const accommodationData = {
            name: nameRef.current.value,
            location: locationRef.current.value,
            description: descriptionRef.current.value,
            ownerName: ownerNameRef.current.value,
            ownerEmail: ownerEmailRef.current.value,
            ownerPhone: ownerPhoneRef.current.value,
        };

        try {
            const response = await fetch('http://localhost:9999/api/accommodations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(accommodationData),
            });

            if (response.ok) {
                console.log('Accommodation created successfully');
                // Reset form
                nameRef.current.value = '';
                locationRef.current.value = '';
                descriptionRef.current.value = '';
                ownerNameRef.current.value = '';
                ownerEmailRef.current.value = '';
                ownerPhoneRef.current.value = '';
            } else {
                console.log('Failed to create accommodation');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <section>
            <CoordinatorNav />
            <div className="container py-5">
                <h5 className={'py-2 font-weight-bold'}>Add Accommodation</h5>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Accommodation Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                ref={nameRef}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="location" className="form-label">Location</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                ref={locationRef}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                ref={descriptionRef}
                                className="form-control"
                            ></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <label htmlFor="ownerName" className="form-label">Owner Name</label>
                            <input
                                type="text"
                                id="ownerName"
                                name="ownerName"
                                ref={ownerNameRef}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="ownerEmail" className="form-label">Owner Email</label>
                            <input
                                type="email"
                                id="ownerEmail"
                                name="ownerEmail"
                                ref={ownerEmailRef}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="ownerPhone" className="form-label">Owner Phone</label>
                            <input
                                type="tel"
                                id="ownerPhone"
                                name="ownerPhone"
                                ref={ownerPhoneRef}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
}


export default CreateAccommodationPage;
