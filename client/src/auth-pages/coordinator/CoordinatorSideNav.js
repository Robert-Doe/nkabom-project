import {NavLink} from "react-router-dom";
import {BiBulb, BiHeadphone} from "react-icons/bi";
import logo from "../../pages/landing/logo.png"
import {AiFillHome} from "react-icons/ai";
import {BsGear} from "react-icons/bs";
import {GrUserWorker} from "react-icons/gr";
import {FaUser} from "react-icons/fa";
import {SiSuperuser} from "react-icons/si";
import {GiCompanionCube} from "react-icons/gi";

function CoordinatorSideNav({link}) {
    return <section className={"side-nav"}>
        <ul>
            <li><NavLink className={`nav-link ${link==='/'?'active':''}`} to={"#"}> <span className={"side-icon"}><AiFillHome fontSize={20}/></span>Home</NavLink>
            </li>
            <li><NavLink className={`nav-link ${link==='/internships'?'active':''}`} to={"#/internships"}> <span className={"side-icon"}><BsGear fontSize={20}/></span>Internships</NavLink>
            </li>
            <li><NavLink className={`nav-link ${link==='/interns'?'active':''}`} to={"/interns"}> <span className={"side-icon"}><FaUser fontSize={20}/></span>Interns</NavLink>
            </li>
            <li><NavLink className={`nav-link ${link==='/supervisors'?'active':''}`} to={"/supervisors"}> <span className={"side-icon"}><SiSuperuser fontSize={20}/></span>Supervisors</NavLink>
            </li>
            <li><NavLink className={`nav-link ${link==='/partners'?'active':''}`} to={"/partners"}> <span className={"side-icon"}><GiCompanionCube fontSize={20}/></span>Partners</NavLink>
            </li>
            <li><NavLink className={`nav-link ${link==='/support'?'active':''}`} to={"#/support"}> <span className={"side-icon"}><BiHeadphone fontSize={20}/></span>Suport</NavLink>
            </li>
        </ul>
        <div className={'p-1 bg-white'}>
            <img src={logo} alt="" className={'rounded'} width={40}/> &nbsp;&nbsp;Robert Doe
        </div>
    </section>;
}

export default CoordinatorSideNav