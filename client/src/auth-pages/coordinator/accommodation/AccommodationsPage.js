import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";

const AccommodationsPage = () => {
    const [accommodations, setAccommodations] = useState([]);

    useEffect(() => {
        // Fetch accommodations from the server
        const fetchAccommodations = async () => {
            try {
                const response = await axios.get('http://localhost:9999/api/accommodations'); // Replace with your endpoint
                setAccommodations(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAccommodations();
    }, []);

    return (
        <section>
            <CoordinatorNav />
            <div className="container py-5">
                <h2>Accommodations</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Availability</th>
                        <th>Location</th>
                    </tr>
                    </thead>
                    <tbody>
                    {accommodations.map((accommodation) => (
                        <tr key={accommodation.id}>
                            <td>{accommodation.name}</td>
                            <td>{accommodation.price}</td>
                            <td>{accommodation.availability}</td>
                            <td>{accommodation.location}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AccommodationsPage;
