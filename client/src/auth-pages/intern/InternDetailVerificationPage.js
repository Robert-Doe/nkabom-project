import {useEffect, useRef, useState} from "react";
import style from './InternDetailVerificationPage.module.css'
import axios from "axios";
import {Navigate, useNavigate} from "react-router-dom";
import OpaqueNav from "../../pages/reusables/OpaqueNav";

function InternDetailVerificationPage() {
    const schoolId = useState('');
    const fNameRef = useRef(null)
    const sNameRef = useRef(null)
    const dobRef = useRef(null)
    const emailRef = useRef(null)
    const phoneRef = useRef(null)
    const passKeyRef = useRef(null)
    const addressKeyRef = useRef(null)
    const bioRef = useRef(null)


    const navigate = useNavigate();


    const prePopulateData = () => {

        const studentId = localStorage.getItem('student-id');
        /* const dob = dobRef.current.value;*/


        /* alert(dob)*/
        axios.get(`http://localhost:9999/api/interns/${studentId}`)
            .then(response => {
                if (response.status === 200) {
                    const intern = response.data

                    console.log(intern)
                    fNameRef.current.value = intern.firstName
                    sNameRef.current.value = intern.lastName
                    dobRef.current.value = intern.dob.toString().substr(0, 10)
                    phoneRef.current.value = intern.phone
                    emailRef.current.value = intern.email
                    // passKeyRef.current.value=intern.keyHash
                    addressKeyRef.current.value = intern.address
                    bioRef.current.value = intern.bio

                    console.log(intern)// use the navigate function to redirect to the login page
                    // navigate('/');
                }
            })
    }

    useEffect(() => {
        prePopulateData()
    }, [])

    const saveProfile = (e) => {

        e.preventDefault()
        const firstName = fNameRef.current.value
        const lastName = sNameRef.current.value
        const dob = dobRef.current.value
        const phone = phoneRef.current.value
        const email = emailRef.current.value
        const passKey = passKeyRef.current.value
        const address = addressKeyRef.current.value
        const bio = bioRef.current.value
        const studentId = localStorage.getItem('student-id')

        /* alert(dob)*/
        axios.put(`http://localhost:9999/api/interns/${studentId}`, {
            studentId,
            firstName,
            lastName,
            phone,
            email,
            address,
            dob,
            bio
        })
            .then(response => {
                if (response.status === 200) {
                    axios.post('http://localhost:9999/api/interns/auth/signup', {studentId, email, passKey})
                        .then(r => {
                            console.log(r.data)
                            if (r.data.token) {
                                localStorage.setItem('accessToken', r.data.token)
                                localStorage.setItem('intern', r.data.intern)
                                navigate('/intern/dashboard');
                            } else {
                                console.log("No token generatedd")
                            }
                        })
                        .catch(err => console.log("Sign up failed"))
                    // use the navigate function to redirect to the login page
                }
            }).catch(err => {
            console.log("Error Generated")
            alert("Invalid Student ID or BirthDate")
        })
    };

    if (localStorage.getItem('accessToken')) {
        axios.post('http://localhost:9999/api/interns/token-verification',
            {token: localStorage.getItem('accessToken')}).then(response => {
                if(response.status===200){
                    navigate('/intern/dashboard')
                }
        })

    }


    return (<section>
            <OpaqueNav/>
            <main className={`${style.verificationMain} container`}>
                <div className="container mt-1 p-5">
                    <form action="#">
                        <div className={`${style.bcControl} d-flex flex-column align-items-center`}>
                            <h4 className={'font-weight-bolder'}>Intern Profile</h4>
                            <p className={'m-3'}>Complete the form below with your bio data</p>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className={`${style.bcControl}`}>
                                        <label htmlFor="fname" className={'text-dark'}>First Name</label>
                                        <input type="text" ref={fNameRef} id={'fname'} className={'form-control'}
                                               placeholder={'Enter your given name'}/>
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className={`${style.bcControl}`}>
                                        <label htmlFor="sname" className={'text-dark'}>Surname</label>
                                        <input type="text" ref={sNameRef} id={'sname'} className={'form-control'}
                                               placeholder={'Enter your surname'}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className={`${style.bcControl}`}>
                                        <label htmlFor="dob" className={'text-dark'}>Date of Birth:</label>
                                        <input type="date" ref={dobRef} id={'dob'} className={'form-control'}/>
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className={`${style.bcControl}`}>
                                        <label htmlFor="phone" className={'text-dark'}>Phone:</label>
                                        <input type="tel" ref={phoneRef} id={'phone'} className={'form-control'}
                                               placeholder={'Enter your phone number'}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className={`${style.bcControl}`}>
                                        <label htmlFor="email" className={'text-dark'}>E-mail:</label>
                                        <input type="email" ref={emailRef} id={'email'} className={'form-control'}
                                               placeholder={'Enter your email'}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className={`${style.bcControl}`}>
                                        <label htmlFor="passkey" className={'text-dark'}>Password:</label>
                                        <input type="password" ref={passKeyRef} id={'passkey'}
                                               className={'form-control'}
                                               placeholder={'Passkey'}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className={`${style.bcControl}`}>
                                        <label htmlFor="address" className={'text-dark'}>Address:</label>
                                        <input type="text" ref={addressKeyRef} id={'address'} className={'form-control'}
                                               placeholder={'Passkey'}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className={`${style.bcControl}`}>
                                        <label htmlFor="schoolId" className={'text-dark'}>Bio (Description):</label>
                                        <textarea name="bio" id="bio" cols="30" rows="3"
                                                  className={'form-control'} ref={bioRef}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.bcControl} mt-3`}>
                            <input type="submit" className={'btn btn-warning '} onClick={saveProfile}
                                   value={'Save'}/>
                        </div>
                    </form>
                </div>
            </main>
        </section>)
}

export default InternDetailVerificationPage;