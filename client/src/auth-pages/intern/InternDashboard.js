import 'bootstrap/dist/css/bootstrap.css'
import {GiGraduateCap} from "react-icons/gi";
import {MdAssignment, MdHouseSiding, MdMessage, MdSupervisorAccount} from "react-icons/md";
import {GrMapLocation, GrPlan, GrResources} from "react-icons/gr";
import style from './InternDashboard.module.css'
import {BsHeadset} from "react-icons/bs";
import {BiBulb} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import useInternAuth from "../../hooks/useInternAuth";
import InternNav from "../../pages/reusables/InternNav";


function InternDashboard() {
    const navigate = useNavigate()
    /* useInternAuth()*/

    if (localStorage.getItem('accessToken')) {
        axios.post('http://localhost:9999/api/interns/token-verification',
            {token: localStorage.getItem('accessToken')}).then(response => {
            if (response.status !== 200) {
                navigate('/login')
            } else {
                console.log(response.status)
            }
        }).catch(err => {
            navigate('/login')
        })

    }

    return (
        <section>
            <InternNav/>
            <main className={'container'}>
                <h5 className={'text-dark text-center my-2'}>Welcome back, Robert DOE</h5>

                <section className={`${style.internMenuFlex} mt-5 py-5`}>
                    <div className={style.internMenu} onClick={() => navigate('/interns/internships')}>
                        <div className={style.menuContent}>
                            <BiBulb fontSize={100}/>
                            <p>Opportunities</p>
                        </div>
                    </div>
                    <div className={style.internMenu} onClick={() => navigate('/intern/accommodation')}>
                        <div className={style.menuContent}>
                            <MdHouseSiding fontSize={100}/>
                            <p>Accommodation</p></div>
                    </div>
                    <div className={style.internMenu}>
                        <div className={style.menuContent}>
                            <GrPlan fontSize={100}/>
                            <p>Work Plans</p></div>
                    </div>
                    <div className={style.internMenu}>
                        <div className={style.menuContent}>
                            <GiGraduateCap fontSize={100}/>
                            <p>Scholarships</p></div>
                    </div>
                    <div className={style.internMenu}>
                        <div className={style.menuContent}>
                            <GrResources fontSize={100}/>
                            <p>Trainings & Resources</p>
                        </div>
                    </div>
                    <div className={style.internMenu}>
                        <div className={style.menuContent}>
                            <BsHeadset fontSize={100}/>
                            <p>Get Help</p>
                        </div>
                    </div>
                </section>
            </main>

        </section>
    )
}

export default InternDashboard;