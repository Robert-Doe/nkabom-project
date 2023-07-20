import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";
import CoordinatorSideNav from "../CoordinatorSideNav";
import {TextField} from "@mui/material";
import {IoIosArrowBack, IoMdClose} from "react-icons/io";
import React, {useRef} from "react";
import axios from "axios";


function CreateExternalInternshipAdvertisementPage({handleOriginChange}) {

    const titleRef = useRef();
    const companyRef = useRef();
    const descriptionRef = useRef();
    const programRef = useRef();
    const linkRef = useRef();
    const startDateRef = useRef();
    const endDateRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const locationRef = useRef();
    //const regionRef = useRef();
    /*const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: titleRef.current.value,
            company: companyRef.current.value,
            description: descriptionRef.current.value,
            program: programRef.current.value,
            link: linkRef.current.value,
            startDate: startDateRef.current.value,
            endDate: endDateRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            location: locationRef.current.value,
            //region: regionRef.current.value,
        };

        axios.post('https://nkabom.codeden.org/api/internship-opportunities',data)
            .then(r=>{
                console.log("Successfully Inserted")
                console.log(r.data)
                titleRef.current.value=''
                companyRef.current.value=''
                descriptionRef.current.value=''
                programRef.current.value=''
                linkRef.current.value=''
                phoneRef.current.value=''
                regionRef.current.value=''
                locationRef.current.value=''
                emailRef.current.value=''
            }).catch(err=>{
            console.log("Could not insert Opportunity")
        })
        console.log(data);
    };*/

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: titleRef.current.value,
            company: companyRef.current.value,
            description: descriptionRef.current.value,
            program: programRef.current.value,
            link: linkRef.current.value,
            startDate: startDateRef.current.value,
            endDate: endDateRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            location: locationRef.current.value,
           // region: regionRef.current.value,
            region:''
        };

        axios.post('https://nkabom.codeden.org/api/internship-opportunities', data)
            .then(r => {
                console.log("Successfully Inserted")
                console.log(r.data)
                titleRef.current.value = ''
                companyRef.current.value = ''
                descriptionRef.current.value = ''
                programRef.current.value = ''
                linkRef.current.value = ''
                phoneRef.current.value = ''
                //regionRef.current.value = ''
                locationRef.current.value = ''
                emailRef.current.value = ''
            }).catch(err => {
            console.log(err)
            console.log("Could not insert Opportunity")
        })
        console.log(data);
    };

    return (
        <section>
            <main className={`container`}>
                <div className="container mt-1 p-5">
                    <form onSubmit={handleSubmit}>
                        <div className={` d-flex flex-column align-items-center`}>
                            <h4 className={'font-weight-bolder'}>Advertise Internship Opportunity</h4>
                            <p className={'m-3'}>Enter the details for the new internship opportunity</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={``}>
                                    <label htmlFor="title" className={'text-dark'}>Title</label>
                                    <input ref={titleRef} type="text" id={'title'} className={'form-control'}
                                           placeholder={'Enter the title of opportunity'}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="">
                                    <label htmlFor="company" className="text-dark">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        className="form-control"
                                        placeholder="Enter the title of opportunity"
                                        ref={companyRef}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className={``}>
                                    <label htmlFor="comments" className={'text-dark'}>Description</label>
                                    <textarea ref={descriptionRef} name="comments" id="comments" cols="30" rows="3" className={'form-control'}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className={``}>
                                    <label htmlFor="program" className={'text-dark'}>Program</label>
                                    <input ref={programRef} type="text" id={'program'} className={'form-control'}
                                           placeholder={'Enter Eligible Programs'}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={``}>
                                    <label htmlFor="link" className={'text-dark'}>Link</label>
                                    <input ref={linkRef} type="text" id={'link'} className={'form-control'}
                                           placeholder={'Enter link to opportunity'}/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className={``}>
                                    <label htmlFor="startDate" className={'text-dark'}>Start Date</label>
                                    <input ref={startDateRef} type="date" id={'startDate'} className={'form-control'}
                                           placeholder={'Enter link to opportunity'}/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className={``}>
                                    <label htmlFor="endDate" className={'text-dark'}>End Date</label>
                                    <input ref={endDateRef} type="date" id={'endDate'} className={'form-control'}
                                           placeholder={'Enter link to opportunity'}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={``}>
                                    <label htmlFor="phone" className={'text-dark'}>Phone</label>
                                    <input ref={phoneRef} type="tel" id={'phone'} className={'form-control'}
                                           placeholder={'Phone number'}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={``}>
                                    <label htmlFor="email" className={'text-dark'}>Email</label>
                                    <input ref={emailRef} type="email" id={'email'} className={'form-control'}
                                           placeholder={'Enter contact email'}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className={``}>
                                    <label htmlFor="location" className={'text-dark'}>Location</label>
                                    <input ref={locationRef} type="text" id={'location'} className={'form-control'}
                                           placeholder={'Enter the Region/ Town / GPS Location'}/>
                                </div>
                            </div>
                           {/* <div className="col-md-6">
                                <label htmlFor="region">Region</label>
                                <select id="region" name="region" required>
                                    <option value="">Select a region</option>
                                    <option value="Greater Accra">Greater Accra</option>
                                    <option value="Ashanti">Ashanti</option>
                                    <option value="Eastern">Eastern</option>
                                    <option value="Central">Central</option>
                                    <option value="Western">Western</option>
                                    <option value="Volta">Volta</option>
                                    <option value="Northern">Northern</option>
                                    <option value="Upper East">Upper East</option>
                                    <option value="Upper West">Upper West</option>
                                    <option value="Bono East">Bono East</option>
                                    <option value="Ahafo">Ahafo</option>
                                    <option value="Bono">Bono</option>
                                    <option value="Savannah">Savannah</option>
                                    <option value="North East">North East</option>
                                    <option value="Oti">Oti</option>
                                    <option value="Western North">Western North</option>
                                </select>
                            </div>*/}
                        </div>
                        <div className={` mt-3 d-flex justify-content-end`}>
                            <input type="submit" className={'btn btn-warning'} value={'Post'}/>
                        </div>
                        <button className={'btn btn-transparent text-warning font-weight-bold'} onClick={() => handleOriginChange('Local')}>
                            <IoIosArrowBack size={24}/> Create Local internship offers
                        </button>
                    </form>
                </div>
            </main>
        </section>
    )
}

export default CreateExternalInternshipAdvertisementPage;