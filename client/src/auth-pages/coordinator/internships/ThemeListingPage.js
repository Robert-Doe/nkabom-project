import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";
import {BarLoader, CircleLoader} from "react-spinners";

function ThemeListPage() {
    const [themes, setThemes] = useState([]);
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchThemes();
    }, []);

    const fetchThemes = async () => {
        try {
            const response = await axios.get('http://localhost:9999/api/internship-themes');
            console.log(response.data)
            setThemes(response.data);
            setIsLoading(false)
        } catch (error) {
            console.error(error);
            setIsLoading(false)
        }
    }


    return (<section>
            <CoordinatorNav/>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent">
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to="/coordinator/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Themes</li>
                </ol>
            </nav>
            <div className="container mt-1 p-5">

                <h4 className={'mb-3'}>Theme List</h4>
                {isLoading && <div className="d-flex w-100 justify-content-center"><CircleLoader/></div>}
                {!isLoading && <table className="table table-sm table-bordered">
                    <thead className={'thead-dark'}>
                    <tr>
                        <th>Theme Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        {/* <th>Comments</th>*/}
                    </tr>
                    </thead>
                    <tbody>
                    {themes.map((theme) => (
                        <tr key={theme.id} onClick={() => navigate(`/coordinator/themes/${theme.id}`)}>
                            <td>{theme.themeName}</td>
                            <td>{theme.startDate}</td>
                            <td>{theme.endDate}</td>
                            {/*  <td>{theme.comments}</td>*/}
                        </tr>))}
                    </tbody>
                </table>}
            </div>
        </section>);
}

export default ThemeListPage;
