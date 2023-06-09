import {BsFacebook, BsInstagram, BsLinkedin, BsYoutube} from "react-icons/bs";
import React from "react";

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
                        <h5 className={'partner-institutions-header'}>Partner Institutions</h5>
                        <div className="container">
                            <ul className={'partner-institutions-list'}>
                                <li>McGill University</li>
                                <li>KTU</li>
                                <li>UESD</li>
                                <li>KNUST</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h5 className={'partner-institutions-header'}>Contact Us</h5>
                        <div className="container">
                            <ul className={'partner-institutions-list'}>
                                <li>info@mcgillnkabom.org</li>
                                <li>+44 389 290 124</li>
                                <li>McGilll University - Faculty of Agricultural and Environmental Sciences</li>
                            </ul>
                        </div>
                        <div className="news-letter-block">
                            <form action="#" className={'form'}>
                                <input type="text" placeholder={'Enter your email'}/>
                                <button className={'submit-letter'}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;