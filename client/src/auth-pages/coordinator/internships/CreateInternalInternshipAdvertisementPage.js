/*
import React from "react";
import {IoIosArrowBack} from "react-icons/io";


function CreateInternalInternshipAdvertisementPage({handleOriginChange}) {

    return (
        <section>
            <main className={`container`}>
                <div className="container mt-1 p-5">
                    <form>
                        <div className={` d-flex flex-column align-items-center`}>
                            <h4 className={'font-weight-bolder'}>Advertise Internship Opportunity</h4>
                            <p className={'m-3'}>Enter the details for the new internship opportunity</p>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className={``}>
                                    <label htmlFor="themeName" className={'text-dark'}>Title</label>
                                    <input type="text" id={'themeName'} className={'form-control'}
                                           placeholder={'Enter the title of opportunity'}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className={``}>
                                    <label htmlFor="comments" className={'text-dark'}>Description</label>
                                    <textarea name="comments" id="comments" cols="30" rows="3"
                                              className={'form-control'}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className={``}>
                                    <label htmlFor="themeName" className={'text-dark'}>Program</label>
                                    <input type="text" id={'themeName'} className={'form-control'}
                                           placeholder={'Enter Eligible Programs'}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={``}>
                                    <label htmlFor="themeName" className={'text-dark'}>Link</label>
                                    <input type="text" id={'themeName'} className={'form-control'}
                                           placeholder={'Enter link to opportunity'}/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className={``}>
                                    <label htmlFor="themeName" className={'text-dark'}>Start Date</label>
                                    <input type="date" id={'themeName'} className={'form-control'}
                                           placeholder={'Enter link to opportunity'}/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className={``}>
                                    <label htmlFor="themeName" className={'text-dark'}>End Date</label>
                                    <input type="date" id={'themeName'} className={'form-control'}
                                           placeholder={'Enter link to opportunity'}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={``}>
                                    <label htmlFor="themeName" className={'text-dark'}>Phone</label>
                                    <input type="tel" id={'themeName'} className={'form-control'}
                                           placeholder={'Phone number'}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={``}>
                                    <label htmlFor="themeName" className={'text-dark'}>Email</label>
                                    <input type="email" id={'themeName'} className={'form-control'}
                                           placeholder={'Enter contact email'}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={``}>
                                    <label htmlFor="themeName" className={'text-dark'}>Location</label>
                                    <input type="text" id={'themeName'} className={'form-control'}
                                           placeholder={'Enter the Region/ Town / GPS Location'}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="region" className={'text-dark'}>Region</label>
                                <select id="region" name="region" className={'form-control'} required>
                                    <option value="">Select a region</option>
                                    <option value="GHUW">Upper West</option>
                                    <option value="GHUE">Upper East</option>
                                    <option value="GHNE">North East</option>
                                    <option value="GHSV">Savannah</option>
                                    <option value="GHNP">Northern</option>
                                    <option value="GHOT">Oti</option>
                                    <option value="GHBE">Bono East</option>
                                    <option value="GHBO">Bono</option>
                                    <option value="GHAF">Ahafo</option>
                                    <option value="GHAH">Ashanti</option>
                                    <option value="GHTV">Volta</option>
                                    <option value="GHEP">Eastern</option>
                                    <option value="GHAA">Greater Accra</option>
                                    <option value="GHCP">Central</option>
                                    <option value="GHWN">Western North</option>
                                    <option value="GHWP">Western</option>
                                </select>
                            </div>
                        </div>
                        <div className={` mt-3 d-flex justify-content-end`}>
                            <input type="submit" className={'btn btn-warning'} value={'Post'}/>
                        </div>
                        <button className={'btn btn-transparent text-warning font-weight-bold'} onClick={() => handleOriginChange('Foreign')}>
                            <IoIosArrowBack size={24}/> Create foreign internship offers
                        </button>
                    </form>
                </div>
            </main>
        </section>
    )
}
export default CreateInternalInternshipAdvertisementPage;*/

import React, { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";

function CreateInternalInternshipAdvertisementPage({ handleOriginChange }) {
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
    const regionRef = useRef();

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
            region: regionRef.current.value,
        };

        axios.post('http://localhost:9999/api/internship-opportunities',data)
            .then(r=>{
                console.log("Successfully Inserted")
                console.log(r.data)
                titleRef.current.value=''
                companyRef.current.value=''
                descriptionRef.current.value=''
                programRef.current.value=''
                linkRef.current.value=''
            }).catch(err=>{
                console.log("Could not insert Opportunity")
        })
        console.log(data);
    };

    return (
        <section>
            <main className="container">
                <div className="container mt-1 p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex flex-column align-items-center">
                            <h4 className="font-weight-bolder">
                                Advertise Internship Opportunity
                            </h4>
                            <p className="m-3">
                                Enter the details for the new internship opportunity
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="">
                                    <label htmlFor="themeName" className="text-dark">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        id="themeName"
                                        className="form-control"
                                        placeholder="Enter the title of opportunity"
                                        ref={titleRef}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="">
                                    <label htmlFor="themeName" className="text-dark">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="themeName"
                                        className="form-control"
                                        placeholder="Enter the title of opportunity"
                                        ref={companyRef}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="">
                                    <label htmlFor="comments" className="text-dark">
                                        Description
                                    </label>
                                    <textarea
                                        name="comments"
                                        id="comments"
                                        cols="30"
                                        rows="3"
                                        className="form-control"
                                        ref={descriptionRef}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="">
                                    <label htmlFor="program" className="text-dark">
                                        Program
                                    </label>
                                    <input
                                        type="text"
                                        id="program"
                                        className="form-control"
                                        placeholder="Enter Eligible Programs"
                                        ref={programRef}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="">
                                    <label htmlFor="link" className="text-dark">
                                        Link
                                    </label>
                                    <input
                                        type="text"
                                        id="link"
                                        className="form-control"
                                        placeholder="Enter link to opportunity"
                                        ref={linkRef}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="">
                                    <label htmlFor="startDate" className="text-dark">
                                        Start Date
                                    </label>
                                    <input
                                        type="date"
                                        id="startDate"
                                        className="form-control"
                                        ref={startDateRef}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="">
                                    <label htmlFor="endDate" className="text-dark">
                                        End Date
                                    </label>
                                    <input
                                        type="date"
                                        id="endDate"
                                        className="form-control"
                                        ref={endDateRef}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="">
                                    <label htmlFor="phone" className="text-dark">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="form-control"
                                        placeholder="Phone number"
                                        ref={phoneRef}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="">
                                    <label htmlFor="email" className="text-dark">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="Enter contact email"
                                        ref={emailRef}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="">
                                    <label htmlFor="location" className="text-dark">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        className="form-control"
                                        placeholder="Enter the Region/Town/GPS Location"
                                        ref={locationRef}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="region" className="text-dark">
                                    Region
                                </label>
                                <select
                                    id="region"
                                    name="region"
                                    className="form-control"
                                    required
                                    ref={regionRef}
                                >
                                    <option value="">Select a region</option>
                                    <option value="GHUW">Upper West</option>
                                    <option value="GHUE">Upper East</option>
                                    <option value="GHNE">North East</option>
                                    <option value="GHSV">Savannah</option>
                                    <option value="GHNP">Northern</option>
                                    <option value="GHOT">Oti</option>
                                    <option value="GHBE">Bono East</option>
                                    <option value="GHBO">Bono</option>
                                    <option value="GHAF">Ahafo</option>
                                    <option value="GHAH">Ashanti</option>
                                    <option value="GHTV">Volta</option>
                                    <option value="GHEP">Eastern</option>
                                    <option value="GHAA">Greater Accra</option>
                                    <option value="GHCP">Central</option>
                                    <option value="GHWN">Western North</option>
                                    <option value="GHWP">Western</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-3 d-flex justify-content-end">
                            <input type="submit" className="btn btn-warning" value="Post" />
                        </div>
                        <button
                            className="btn btn-transparent text-warning font-weight-bold"
                            onClick={() => handleOriginChange("Foreign")}
                        >
                            <IoIosArrowBack size={24} /> Create foreign internship offers
                        </button>
                    </form>
                </div>
            </main>
        </section>
    );
}

export default CreateInternalInternshipAdvertisementPage;
