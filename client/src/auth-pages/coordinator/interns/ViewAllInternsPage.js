import React, { useEffect, useState } from 'react';
import CoordinatorSideNav from "../CoordinatorSideNav";
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";
import { BsSearch } from "react-icons/bs";
import './ViewAllInternsPage.css';
import ReactPaginate from "react-paginate";

function ViewAllInternsPage() {
    const [interns, setInterns] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [perPage] = useState(10);
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        // Fetch the list of interns from the API endpoint
        const fetchInterns = async () => {
            try {
                const response = await fetch('https://nkabom.codeden.org/api/interns');
                const data = await response.json();
                setInterns(data);
            } catch (error) {
                console.error('Error fetching interns:', error);
            }
        };

        fetchInterns();
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

    const filteredInterns = interns.filter((intern) => {
        const fullName = `${intern.firstName} ${intern.lastName}`.toLowerCase();
        const studentId = intern.studentId.toLowerCase();
        const searchQueryLower = searchQuery.toLowerCase();

        return (
            fullName.includes(searchQueryLower) ||
            studentId.includes(searchQueryLower)
        );
    });

    const offset = currentPage * perPage;
    const pageCount = Math.ceil(filteredInterns.length / perPage);


    const paginatedInterns = filteredInterns.slice(offset, offset + perPage);

    return (
        <section>
            <CoordinatorNav />
            <main className="container py-4">
                <div className="d-flex justify-content-between align-items-end">
                    <h5 className={'font-weight-bolder'}>Interns</h5>
                    <div className="input-group intern-search">
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Search for Intern"
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
                    {paginatedInterns.map((intern, index) => (
                        <tr key={index}>
                            <th scope="row">{intern.studentId}</th>
                            <td>{intern.firstName}</td>
                            <td>{intern.lastName}</td>
                            <td>{intern.departmentId}</td>
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

export default ViewAllInternsPage;
