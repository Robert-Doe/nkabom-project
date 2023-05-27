import OpaqueNav from "../../pages/reusables/OpaqueNav";
import {useRef} from "react";
import axios from "axios";
import style from './ActivateSupervisorAccountPage.module.css'
import {Navigate, useNavigate} from "react-router-dom";

function ActivateSupervisorAccountPage(){
    const staffIdRef=useRef(null);
    const dobRef=useRef(null)
    const navigate = useNavigate();


    const activateAccount = (e) => {
        e.preventDefault()
        const staffId=staffIdRef.current.value;
        const dob=dobRef.current.value;


        axios.post('http://localhost:9999/api/supervisors/verify-activation',
            {staffId})
            .then(response=>{
                if(response.data.isActivated){
                    alert("Account already activated. Proceed to Login")
                    navigate('/login/supervisor')
                }else{
                    axios.post('http://localhost:9999/api/supervisors/account-activation',
                        {staffId,dob})
                        .then(response=>{
                            if(response.status===200){
                                localStorage.setItem('staffId',staffId)
                                navigate('/supervisor/detail-verification'); // use the navigate function to redirect to the login page
                            }
                        }).catch(err=>{
                        console.log("Error Generated")
                        alert("Invalid Student ID or BirthDate")

                    })
                }
            })

    }

    return (
        <section>
            <OpaqueNav/>
            <main className={`${style.activationMain} container`}>
                <div className={`${style.activationBlock} container mt-5 p-5`}>
                    <form action="#">
                        <div className={`${style.bcControl} d-flex flex-column align-items-center`}>
                            <h4 className={'font-weight-bolder text-light'}>Account Activation</h4>
                            <p className={`${style.instruction} m-3`}>Fill the form below to activate your account</p>
                        </div>
                        <div className={`${style.bcControl}`}>
                            <label htmlFor="schoolId" className={'text-dark'}>Staff ID:</label>
                            <input type="text" ref={staffIdRef} id={'schoolId'} className={'form-control'} placeholder={'Enter your ID here'}/>
                        </div>
                        <div className={`${style.bcControl}`}>
                            <label htmlFor="dob" className={'text-dark'}>Date of Birth:</label>
                            <input type="date" ref={dobRef} id={'dob'} className={'form-control'} placeholder={'Enter your secret pin'}/>
                        </div>
                        <div className={`${style.bcControl} mt-4`}>
                            <input type="submit" className={'btn btn-warning '} onClick={activateAccount} value={'Activate'}/>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    )
}

export default ActivateSupervisorAccountPage;