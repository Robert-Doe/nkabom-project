import OpaqueNav from "../../../template/reusables/OpaqueNav";
import logo from "../../logo.png";
import './intern.css'
import {useRef} from "react";
import axios from "axios";
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
            <main className={`activation-main container`}>
                <div className="activation-block container mt-5 p-5">
                    <form action="#">
                        <div className="bc-control d-flex flex-column align-items-center">
                            <h4 className={'font-weight-bolder'}>Account Activation</h4>
                            <p className={'m-3'}>Fill the form below to activate your account</p>
                        </div>
                        <div className={'bc-control'}>
                            <label htmlFor="schoolId" className={'text-dark'}>School ID:</label>
                            <input type="text" ref={schoolIdRef} id={'schoolId'} className={'form-control'} placeholder={'Enter your ID here'}/>
                        </div>
                        <div className={'bc-control'}>
                            <label htmlFor="dob" className={'text-dark'}>Date of Birth:</label>
                            <input type="date" ref={dobRef} id={'dob'} className={'form-control'} placeholder={'Enter your secret pin'}/>
                        </div>
                        <div className={'bc-control'}>
                            <input type="submit" className={'btn btn-warning '} onClick={activateAccount} value={'Activate'}/>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    )
}

export default ActivateAccountPage;