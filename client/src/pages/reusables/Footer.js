import {BsFacebook, BsInstagram, BsLinkedin, BsYoutube} from "react-icons/bs";
import React from "react";
import style from './Footer.module.css'

function NewsLetterBlock() {
    return <div className="news-letter-block">
        <form action="#" className={"form"}>
            <input type="text" className={`form-control-sm px-2`} placeholder={"Enter your email"}/>
            <button className={"submit-letter"}>Submit</button>
        </form>
    </div>;
}

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <BsFacebook className={'social-icons'}/>
                        <BsInstagram className={'social-icons'}/>
                        <BsLinkedin className={'social-icons'}/>
                        <BsYoutube className={'social-icons'}/>
                    </div>
                    <div className="col-md-3">
                        <h5 className={`${style.partnerInstitutionHeader}`}>Partner Institutions</h5>
                        <div className="container">
                            <ul className={`${style.partnerInstitutionList}`}>
                                <li>McGill University</li>
                                <li>KTU</li>
                                <li>UESD</li>
                                <li>KNUST</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h5 className={`${style.partnerInstitutionHeader}`}>Contact Us</h5>
                        <div className="container">
                            <ul className={`${style.mcGillAddress}`}>
                                <li>info@mcgillnkabom.org</li>
                                <li>+44 389 290 124</li>
                                <li>McGilll University - Faculty of Agricultural and Environmental Sciences</li>
                            </ul>
                        </div>
                        <NewsLetterBlock/>
                    </div>
                </div>
                <hr className={`my-5 ${style.bgGrey}`}/>
            </div>
        </footer>
    )
}

export default Footer;