import SupervisorNav from "../../pages/reusables/SupervisorNav";
import {AiFillBulb} from "react-icons/ai";
import {GiGraduateCap} from "react-icons/gi";
import {MdAssignment, MdMessage, MdSupervisorAccount} from "react-icons/md";
import {GrMapLocation, GrPlan} from "react-icons/gr";
import {BsHeadset} from "react-icons/bs";
import './supervisor.css'
import useSupervisorAuth from "../../hooks/useSupervisorAuth";
import {useState} from "react";
import InternNav from "../../pages/reusables/InternNav";

function SupervisorDashboard(){
    useSupervisorAuth()
    const [supervisor,setSupervisor] = useState(JSON.parse(localStorage.getItem('supervisor')))

    return (
        <section>
            <SupervisorNav firstName={supervisor.firstName} photoUrl={supervisor.photoUrl}/>
        <main className={'container'}>
            <h4 className={'text-dark text-center my-2'}>Welcome back, {`${supervisor.firstName} ${supervisor.lastName}`}</h4>

            <section className={'container mt-5'}>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-between py-2 border">
                        <AiFillBulb fontSize={30}/> <span className={'text'}> Internships</span> <span className={'count'}>20</span>
                    </div>
                    <div className="col-md-4 d-flex justify-content-between py-2 border">
                        <GiGraduateCap fontSize={30}/> <span className={'text'}>Interns</span> <span className={'count'}>22</span>
                    </div>
                    <div className="col-md-4 d-flex justify-content-between py-2 border">
                        <MdMessage  fontSize={30}/> <span className={'text'}>Updates</span> <span className={'count'}>1</span>
                    </div>
                </div>

            </section>
            <section className="container d-flex justify-content-center">
                <div className={'supervisor-menu-flex mt-5'}>
                    <div className="supervisor-menu">
                        <GiGraduateCap fontSize={100}/>
                        <p>Opportunities</p>
                    </div>
                    <div className="supervisor-menu">
                        <MdAssignment fontSize={100}/>
                        <p>Assignments</p>
                    </div>
                    <div className="supervisor-menu">
                        <GrPlan fontSize={100} />
                        <p>Work Plans</p>
                    </div>
                    <div className="supervisor-menu">
                        <MdSupervisorAccount fontSize={100}/>
                        <p>Supervisors</p>
                    </div>
                    <div className="supervisor-menu">
                        <GrMapLocation fontSize={100}/>
                        <p>Onsite Reports</p>
                    </div>
                    <div className="supervisor-menu">
                        <BsHeadset fontSize={100}/>
                        <p>Get Help</p>
                    </div>
                </div>
            </section>

        </main>

    </section>
    )
}

export default SupervisorDashboard;