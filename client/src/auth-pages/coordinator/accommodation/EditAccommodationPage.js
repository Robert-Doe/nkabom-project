import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";

function EditAccommodationPage() {
    const { accommodationId } = useParams();
    const nameRef = useRef(null);
    const locationRef = useRef(null);
    const descriptionRef = useRef(null);
    const ownerNameRef = useRef(null);
    const ownerEmailRef = useRef(null);
    const ownerPhoneRef = useRef(null);

    useEffect(() => {
        fetchAccommodation();
    }, []);

    const fetchAccommodation = async () => {
        try {
            const response = await axios.get(`http://localhost:9999/api/accommodations/${accommodationId}`);
            const { data } = response;
            if (data) {
                const {
                    name,
                    location,
                    description,
                    ownerName,
                    ownerEmail,
                    ownerPhone
                } = data;
                if (nameRef.current) {
                    nameRef.current.value = name;
                }
                if (locationRef.current) {
                    locationRef.current.value = location;
                }
                if (descriptionRef.current) {
                    descriptionRef.current.value = description;
                }
                if (ownerNameRef.current) {
                    ownerNameRef.current.value = ownerName;
                }
                if (ownerEmailRef.current) {
                    ownerEmailRef.current.value = ownerEmail;
                }
                if (ownerPhoneRef.current) {
                    ownerPhoneRef.current.value = ownerPhone;
                }
            }
        } catch (error) {
            console.error('Error fetching accommodation:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: nameRef.current.value,
            location: locationRef.current.value,
            description: descriptionRef.current.value,
            ownerName: ownerNameRef.current.value,
            ownerEmail: ownerEmailRef.current.value,
            ownerPhone: ownerPhoneRef.current.value,
        };

        try {
            const response = await axios.put(`http://localhost:9999/api/accommodations/${accommodationId}`, data);
            if (response.ok) {
                console.log('Accommodation updated successfully');
                // Redirect to view page or show success message
            } else {
                console.log('Failed to update accommodation');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <section>
            <CoordinatorNav />
            <div className="container py-5">
                <h2>Edit Accommodation</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">
                                Accommodation Name
                            </label>
                            <input type="text" id="name" ref={nameRef} className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="location" className="form-label">
                                Location
                            </label>
                            <input type="text" id="location" ref={locationRef} className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="description" className="form-label">
                                Description
                            </label>
                            <textarea id="description" ref={descriptionRef} className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <label htmlFor="ownerName" className="form-label">
                                Owner Name
                            </label>
                            <input type="text" id="ownerName" ref={ownerNameRef} className="form-control" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="ownerEmail" className="form-label">
                                Owner Email
                            </label>
                            <input type="email" id="ownerEmail" ref={ownerEmailRef} className="form-control" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="ownerPhone" className="form-label">
                                Owner Phone
                            </label>
                            <input type="tel" id="ownerPhone" ref={ownerPhoneRef} className="form-control" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save Changes
                    </button>
                </form>
            </div>
        </section>
    );
}

export default EditAccommodationPage;
