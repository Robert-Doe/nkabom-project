import InternNav from "../../../template/reusables/InternNav";
import 'bootstrap/dist/css/bootstrap.css'
import {GiGraduateCap} from "react-icons/gi";
import {MdAssignment, MdHouseSiding, MdMessage, MdSupervisorAccount} from "react-icons/md";
import {GrMapLocation, GrPlan, GrResources} from "react-icons/gr";
import './intern.css'
import {BsHeadset} from "react-icons/bs";
import {BiBulb} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import useInternAuth from "../../hooks/useInternAuth";

function InternDashboard(){
    const navigate=useNavigate()
    useInternAuth()

    if (localStorage.getItem('accessToken')) {
        axios.post('http://localhost:9999/api/interns/token-verification',
            {token: localStorage.getItem('accessToken')}).then(response => {
            if(response.status!==200){
                navigate('/login')
            }else{
                console.log(response.status)
            }
        }).catch(err=>{
                navigate('/login')
        })

    }

    return (
        <section>
            <InternNav/>
            <main className={'container'}>
            <h5 className={'text-dark text-center my-2'}>Welcome back, Robert DOE</h5>

             {/*   <section className={'container'}>
                    <div className="info-board">
                        <div className="info-card bg-theme">
                            <AiFillBulb fontSize={30}/> <span className={'text'}> Internships</span> <span className={'count'}>20</span>
                        </div>
                        <div className="info-card bg-mauve">
                            <GiGraduateCap fontSize={30}/> <span className={'text'}>Interns</span> <span className={'count'}>22</span>
                        </div>
                        <div className="info-card bg-brown">
                            <MdMessage  fontSize={30}/> <span className={'text'}>Updates</span> <span className={'count'}>1</span>
                        </div>
                    </div>
                </section>*/}
            <section className={'intern-menu-flex mt-4'}>
                <div className="intern-menu" onClick={()=>navigate('/internships')}>
                    <BiBulb fontSize={100}/>
                    <p>Opportunities</p>
                </div>
                <div className="intern-menu" onClick={()=>navigate('/accommodation')}>
                    <MdHouseSiding fontSize={100}/>
                    <p>Accommodation</p>
                </div>
                <div className="intern-menu">
                    <GrPlan fontSize={100} />
                    <p>Work Plans</p>
                </div>
                <div className="intern-menu">
                    <GiGraduateCap fontSize={100}/>
                    <p>Scholarships</p>
                </div>
                <div className="intern-menu">
                    <GrResources fontSize={100}/>
                    <p>Trainings & Resources</p>
                </div>
                <div className="intern-menu">
                    <BsHeadset fontSize={100}/>
                    <p>Get Help</p>
                </div>
            </section>
            </main>

        </section>
    )
}

export default InternDashboard;