import {NavLink} from "react-router-dom";
import {BiBulb, BiHeadphone} from "react-icons/bi";
import logo from "../../pages/landing/logo.png"
import {AiFillHome} from "react-icons/ai";
import {BsGear} from "react-icons/bs";
import {FaHandshake, FaUser, FaUserTie} from "react-icons/fa";
import {SiSuperuser} from "react-icons/si";
import {GiCompanionCube, GiHouse} from "react-icons/gi";
import style from './css/Coordinator.module.css'
import {useLocation} from 'react-router-dom';
import {useState} from "react";

function CoordinatorSideNav() {
    const [link, setLink] = useState(useLocation().pathname)
    console.log(link)

    return <section className={"side-nav-md"}>
        <ul>
            <li><NavLink className={`nav-link ${link.startsWith('/coordinator/dashboard') ? style.active : ''}`}
                         to={"/coordinator/dashboard"}> <span className={"side-icon"}><AiFillHome
                fontSize={20}/></span>Dashboard</NavLink>
            </li>
            <li><NavLink className={`nav-link ${link.startsWith('/coordinator/internships') ? style.active : ''}`}
                         to={"/coordinator/internships/menu"}>
                <span className={"side-icon"}><BsGear fontSize={20}/></span>Internships</NavLink>
            </li>
            <li><NavLink className={`nav-link ${link.startsWith('/coordinator/students') ? style.active : ''}`}
                         to={"/coordinator/students/menu"}> <span
                className={"side-icon"}><FaUser fontSize={20}/></span>Interns</NavLink>
            </li>
            <li><NavLink className={`nav-link ${link.startsWith('/coordinator/supervisors') ? style.active : ''}`}
                         to={"/coordinator/supervisors/menu"}>
                <span className={"side-icon"}><FaUserTie size={20} /></span>Supervisors</NavLink>
            </li>
            <li><NavLink className={`nav-link ${link.startsWith('/coordinator/partners') ? style.active : ''}`}
                         to={"/coordinator/partners/menu"}> <span
                className={"side-icon"}><FaHandshake size={20} /></span>Partners</NavLink>
            </li>
            <li><NavLink className={`nav-link ${link.startsWith('/coordinator/accommodation') ? style.active : ''}`}
                         to={"/coordinator/support/menu"}> <span
                className={"side-icon"}><GiHouse size={20}/></span>Accommodation</NavLink>
            </li>
            <li><NavLink className={`nav-link ${link.startsWith('/coordinator/support') ? style.active : ''}`}
                         to={"/coordinator/support/menu"}> <span className={"side-icon"}><BiHeadphone fontSize={20}/></span>Support</NavLink>
            </li>
        </ul>
        <div className={'p-1 bg-white'}>
            <img src={logo} alt="" className={'rounded'} width={40}/> &nbsp;&nbsp;Robert Doe
        </div>
    </section>;
}

export default CoordinatorSideNav