import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";
import CoordinatorSideNav from "../CoordinatorSideNav";
import {TextField} from "@mui/material";
import {IoIosArrowBack, IoMdClose} from "react-icons/io";
import React from "react";


function CreateExternalInternshipAdvertisementPage({handleOriginChange}) {

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
                                    <textarea name="comments" id="comments" cols="30" rows="3" className={'form-control'}></textarea>
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
                            <div className="col-md-12">
                                <div className={``}>
                                    <label htmlFor="themeName" className={'text-dark'}>Location</label>
                                    <input type="text" id={'themeName'} className={'form-control'}
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
                        <button className={'btn btn-transparent text-warning font-weight-bold'} onClick={() => handleOriginChange('Foreign')}>
                            <IoIosArrowBack size={24}/> Create Local internship offers
                        </button>
                    </form>
                </div>
            </main>
        </section>
    )
}

export default CreateExternalInternshipAdvertisementPage;