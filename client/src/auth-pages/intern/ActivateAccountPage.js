import OpaqueNav from "../../pages/reusables/OpaqueNav";
import './intern.css'
import {useRef} from "react";
import axios from "axios";
import style from './ActivateAccountPage.module.css'
import {Navigate, useNavigate} from "react-router-dom";

function ActivateAccountPage(){
    const schoolIdRef=useRef(null);
    const dobRef=useRef(null)
    const navigate = useNavigate();


    const activateAccount = (e) => {
        e.preventDefault()
        const studentId=schoolIdRef.current.value;
        const dob=dobRef.current.value;

       /* alert(dob)*/
        axios.post('http://localhost:9999/api/interns/account-activation',
            {studentId,dob})
            .then(response=>{
                if(response.status===200){
                    localStorage.setItem('student-id',studentId)
                    navigate('/intern/detail-verification'); // use the navigate function to redirect to the login page
                }
            }).catch(err=>{
                console.log("Error Generated")
                alert("Invalid Student ID or BirthDate")

        })
    }

    return (
        <section>
            <OpaqueNav/>
            <main className={`${style.activationMain} container`}>
                <div className={`${style.activationBlock} container mt-5 p-5`}>
                    <form action="#">
                        <div className={`${style.bcControl} d-flex flex-column align-items-center`}>
                            <h4 className={'font-weight-bolder'}>Account Activation</h4>
                            <p className={'m-3'}>Fill the form below to activate your account</p>
                        </div>
                        <div className={`${style.bcControl}`}>
                            <label htmlFor="schoolId" className={'text-dark'}>School ID:</label>
                            <input type="text" ref={schoolIdRef} id={'schoolId'} className={'form-control'} placeholder={'Enter your ID here'}/>
                        </div>
                        <div className={`${style.bcControl}`}>
                            <label htmlFor="dob" className={'text-dark'}>Date of Birth:</label>
                            <input type="date" ref={dobRef} id={'dob'} className={'form-control'} placeholder={'Enter your secret pin'}/>
                        </div>
                        <div className={`${style.bcControl}`}>
                            <input type="submit" className={'btn btn-warning '} onClick={activateAccount} value={'Activate'}/>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    )
}

export default ActivateAccountPage;