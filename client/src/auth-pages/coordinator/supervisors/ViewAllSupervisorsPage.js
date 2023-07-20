import React, { useEffect, useState } from 'react';
import CoordinatorSideNav from "../CoordinatorSideNav";
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";
import { BsSearch } from "react-icons/bs";
import './ViewAllSupervisorsPage.css';
import ReactPaginate from "react-paginate";

function ViewAllSupervisorsPage() {
    const [supervisors, setSupervisors] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [perPage] = useState(10);
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        // Fetch the list of supervisors from the API endpoint
        const fetchSupervisors = async () => {
            try {
                const response = await fetch('https://nkabom.codeden.org/api/supervisors');
                const data = await response.json();
                setSupervisors(data);
            } catch (error) {
                console.error('Error fetching supervisors:', error);
            }
        };

        fetchSupervisors();
    }, []);


    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleSearchChange = (event) => {
        setCurrentPage(0);
        setSearchQuery(event.target.value);
    };

   /* const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };*/

    const filteredSupervisors = supervisors.filter((supervisor) => {
        const fullName = `${supervisor.firstName} ${supervisor.lastName}`.toLowerCase();
        const staffId = supervisor.staffId.toLowerCase();
        const searchQueryLower = searchQuery.toLowerCase();

        return (
            fullName.includes(searchQueryLower) ||
            staffId.includes(searchQueryLower)
        );
    });

    const offset = currentPage * perPage;
    const pageCount = Math.ceil(filteredSupervisors.length / perPage);


    const paginatedSupervisors = filteredSupervisors.slice(offset, offset + perPage);

    return (
        <section>
            <CoordinatorNav />
            <main className="container py-4">
                <div className="d-flex justify-content-between align-items-end">
                    <h5 className={'font-weight-bolder'}>Supervisors</h5>
                    <div className="input-group supervisor-search">
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Search for Supervisor"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search by name or ID"
                        />
                        <div className="input-group-append">
                            <span className="input-group-text"><BsSearch /></span>
                        </div>
                    </div>
                </div>
                <table className="table table-sm mt-2">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Department Id</th>
                    </tr>
                    </thead>
                    <tbody>
                    {paginatedSupervisors.map((supervisor, index) => (
                        <tr key={index}>
                            <th scope="row">{supervisor.staffId}</th>
                            <td>{supervisor.firstName}</td>
                            <td>{supervisor.lastName}</td>
                            <td>{supervisor.departmentId}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </main>
        </section>
    );
}

export default ViewAllSupervisorsPage;
