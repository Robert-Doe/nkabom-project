import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";
import {useNavigate} from "react-router-dom";

function ViewAllAccommodationsPage() {
    const [accommodations, setAccommodations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        fetchAccommodations().then(r => console.log("Fetched"));
    }, []);

    const fetchAccommodations = async () => {
        try {
            const response = await axios.get('http://localhost:9999/api/accommodations');
            setAccommodations(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching accommodations:', error);
            setIsLoading(false);
        }
    };

    return (
        <section>
            <CoordinatorNav />
            <div className="container py-5">
                <h5 className={'py-2 font-weight-bold'}>View All Accommodations</h5>
                {isLoading ? (
                    <p>Loading accommodations...</p>
                ) : (
                    <table className="table table-sm">
                        <thead className="thead-dark">
                        <tr>
                            <th>Accommodation Name</th>
                            <th>Location</th>
                            <th>Owner Name</th>
                            <th>Owner Email</th>
                            <th>Owner Phone</th>
                        </tr>
                        </thead>
                        <tbody>
                        {accommodations.map((accommodation) => (
                            <tr key={accommodation.id}
                            onClick={()=>navigate(`/coordinator/facilities/${accommodation.id}`)}>
                                <td>{accommodation.name}</td>
                                <td>{accommodation.location}</td>
                                <td>{accommodation.ownerName}</td>
                                <td>{accommodation.ownerEmail}</td>
                                <td>{accommodation.ownerPhone}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </section>
    );
}

export default ViewAllAccommodationsPage;
