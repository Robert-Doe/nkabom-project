/*
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";

function ViewSingleAccommodationPage() {
    const { accommodationId } = useParams();
    const [accommodation, setAccommodation] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchAccommodation();
    }, []);

    const fetchAccommodation = async () => {
        try {
            const response = await axios.get(`http://localhost:9999/api/accommodations/${accommodationId}`);
            setAccommodation(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching accommodation:', error);
            setIsLoading(false);
        }
    };

    return (
        <section>
            <CoordinatorNav />
            <div className="container py-5">
                <h2>View Accommodation Details</h2>
                {isLoading ? (
                    <p>Loading accommodation details...</p>
                ) : accommodation ? (
                    <div>
                        <h3>{accommodation.name}</h3>
                        <p>Location: {accommodation.location}</p>
                        <p>Description: {accommodation.description}</p>
                        <p>Price: {accommodation.price}</p>
                        <p>Availability: {accommodation.availability}</p>
                        <p>Accommodation Type: {accommodation.accommodationType}</p>
                        <p>Room Type: {accommodation.roomType}</p>
                        <p>Owner Name: {accommodation.ownerName}</p>
                        <p>Owner Email: {accommodation.ownerEmail}</p>
                        <p>Owner Phone: {accommodation.ownerPhone}</p>
                        <p>Additional Notes: {accommodation.additionalNotes}</p>
                    </div>
                ) : (
                    <p>Accommodation not found.</p>
                )}
            </div>
        </section>
    );
}

export default ViewSingleAccommodationPage;
*/

import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";
import {FiMapPin, FiDollarSign, FiCalendar, FiHome, FiMail, FiPhone, FiFileText, FiUser} from 'react-icons/fi';

function ViewSingleAccommodationPage() {
    const { accommodationId } = useParams();
    const [accommodation, setAccommodation] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchAccommodation();
    }, []);

    const fetchAccommodation = async () => {
        try {
            const response = await axios.get(`http://localhost:9999/api/accommodations/${accommodationId}`);
            setAccommodation(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching accommodation:', error);
            setIsLoading(false);
        }
    };

    return (
        <section>
            <CoordinatorNav />
            <div className="container py-5">
                <h2>View Accommodation Details</h2>
                {isLoading ? (
                    <p>Loading accommodation details...</p>
                ) : accommodation ? (
                    <div>
                        <h5>{accommodation.name}</h5>
                        <p className={'py-1 border-primary'}><FiMapPin /><span className={'font-weight-bold'}>Location</span> :  {accommodation.location}</p>
                        <p className={'py-1 border-primary'}><FiFileText /> <span className={'font-weight-bold'}>Description </span>: {accommodation.description}</p>
                        <p className={'py-1 border-primary'}><FiUser /><span className={'font-weight-bold'}> Owner Name</span> : {accommodation.ownerName}</p>
                        <p className={'py-1 border-primary'}><FiMail /><span className={'font-weight-bold'}> Owner Email</span> : {accommodation.ownerEmail}</p>
                        <p className={'py-1 border-primary'}><FiPhone /><span className={'font-we+ight-bold'}> Owner Phone</span> : {accommodation.ownerPhone}</p>
                        <Link className="mt-3 px-3 py-2 btn btn btn-primary" to={`/coordinator/facilities/${accommodationId}/edit`}>Edit Details</Link>
                    </div>
                ) : (
                    <p>Accommodation not found.</p>
                )}
            </div>
        </section>
    );
}

export default ViewSingleAccommodationPage;
