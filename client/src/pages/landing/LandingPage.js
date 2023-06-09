import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './landing.css'
import logo from './logo.png'
import mcfLogo from './images/mcf-logo.png';
import knustLogo from './images/knust-logo.png';
import mcgillLogo from './images/mcgill-logo.png';
import ktuLogo from './images/ktu-logo.png';
import uesdLogo from './images/uesd-logo.png';
import coffeePlantation from './coffee_plantation.jpg'
import {GiHamburgerMenu, GiShipWheel} from "react-icons/gi";
import {AiFillEye, AiOutlineRight} from 'react-icons/ai';
import {BsFacebook, BsInstagram, BsLinkedin, BsYoutube} from "react-icons/bs";
import Footer from "../reusables/Footer";
import OpaqueNav from "../reusables/InternNav";
import LandingPageNav from "../reusables/LandingPageNav";
import axios from "axios";
import {GridLoader} from "react-spinners";


function LandingPage() {
    const [news, setNews] = useState([])
    const [isNewsLoading, setIsNewsLoading] = useState(true);

    useEffect(() => {
        axios('http://localhost:9999/api/news').then(r => {
            if (r.data) {
                setNews(r.data)
            }
            setIsNewsLoading(false);
        }).catch(err => {
            console.log(err)
            setIsNewsLoading(false);
        })
    }, [])


    return (<section>
            <LandingPageNav/>
            <header>
                <div className="header-content">
                    <h1 className={'lead-theme'}>Empowering the Future of Agric in Africa</h1>
                    <h4 className={'sub-theme'}>A MasterCard Foundation and McGill University Partnership</h4>
                    <button className="hero-action-button">Join Us</button>
                </div>
            </header>
            <section className="about-us">
                <h5 className={'section-identifier'}>ABOUT US</h5>
                {/*<p className={'brief-project-description text-center'}>Our Mastercard Foundation-funded project in
                    partnership with McGill University empowers African youth
                    with skills and resources to drive sustainable community development.</p>*/}
                <div className="about-details row about-us-row">
                    <div className="col-lg-5 center">
                        <img/>
                        <figure>
                            <img src={coffeePlantation} alt="Coffee Plantation"
                                 className={'coffee-plantation'}/>
                            {/*<figcaption>Agriculture and Environment</figcaption>*/}
                        </figure>
                    </div>
                    <div className="col-lg-7 about-us-aside d-flex flex-column justify-content-center">
                        <div className="mission-block">
                            <h4 className={'mission-header'}><GiShipWheel/> OUR MISSION</h4>
                            <p className={'mission-text'}>
                                Our mission is to advance food science and technology in Ghana by fostering
                                multidisciplinary training, research, and collaboration.
                                We aim to enhance food security, health and wellness, and environmental protection by
                                developing innovative and sustainable
                                solutions in food science and technology.
                                <br/>
                            </p>
                        </div>
                        <div className="vision-block">
                            <h4 className={'vision-header'}><AiFillEye/> OUR VISION</h4>
                            <p className="vision-text">
                                Our vision is to be a leading center for food science and technology in Ghana, providing
                                cutting-edge education, research, and
                                technology transfer that benefits the people and communities in our region. We strive to
                                create an environment where students,
                                faculty, and partners can work together to discover new solutions and build a
                                sustainable future. With the support of
                                the MasterCard Foundation and our partnership with McGill University
                                we aim to become a world-class institution that is known for its excellence in food
                                science and technology.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="partners">
                <h5 className={'section-identifier'}>PARTNERS</h5>
                <div className="container">
                    <div className="logo-slide">
                        <div className="slide">
                            <img src={knustLogo} alt="" className={'partner-logo'}/>
                        </div>
                        <div className="slide">
                            <img src={uesdLogo} alt="" className={'partner-logo'}/>
                        </div>
                        <div className="slide">
                            <img src={ktuLogo} alt="" className={'partner-logo'}/>
                        </div>
                        <div className="slide">
                            <img src={mcgillLogo} alt="" className={'partner-logo'}/>
                        </div>
                        <div className="slide">
                            <img src={mcfLogo} alt="" className={'partner-logo'}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="news-updates">
                <h5 className={'section-identifier'}>NEWS & UPDATES</h5>
                <div className="container">
                    <div className="row">
                        {
                            isNewsLoading ? (
                                    <div className="d-flex justify-content-center w-100">
                                        <GridLoader color={'#fabf69'} size={40} /> {/* Use the GridLoader component */}
                                    </div>
                                ) :
                                news.map(newsItem => {
                                    return (
                                        <div className="col-md-6">
                                            <div className="container">
                                                <div className="news-block row">
                                                    <div className={'col-lg-3'}>
                                                        <div className="news-image"
                                                             style={{backgroundImage: `url(${newsItem.pictureUrl})`}}></div>

                                                    </div>
                                                    <div className={'news-content col-lg-9'}>
                                                        <a href={newsItem.link}><h4
                                                            className={'news-headline'}>{newsItem.title}</h4></a>
                                                        <p className={'news-description'}>{newsItem.description}
                                                        </p>
                                                        <a href={newsItem.link}><h6 className={'news-read-more'}>Read
                                                            More<AiOutlineRight/></h6></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                        {/* <div className="col-md-6">
                            <div className="container">
                                <div className="news-block row">
                                    <div className={'col-md-3'}>
                                        <div className="news-image"></div>
                                    </div>
                                    <div className={'news-content col-md-9'}>
                                        <h3 className={'news-headline'}>Lastest news from block</h3>
                                        <p className={'news-description'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur
                                            eligendi ex exercitationem impedit iure maiores optio quas quia quos.
                                            Commodi consequatur consequuntur cupiditate id incidunt libero magnam magni
                                            neque nostrum quis, repellendus sapiente tempore temporibus voluptas
                                            voluptates! Adipisci, autem consectetur consequatur eveniet exercitationem
                                            id ipsa iusto labore nobis nulla odio omnis pariatur quia quos, reiciendis
                                            repellendus sapiente tenetur veritatis.</p>
                                        <h6 className={'news-read-more'}>Read More<AiOutlineRight/></h6>
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                    </div>
                    {/*  <div className="row">
                        <div className="col-md-6">
                            <div className="container">
                                <div className="news-block row">
                                    <div className={'col-md-3'}>
                                        <div className="news-image"></div>
                                    </div>
                                    <div className={'news-content col-md-9'}>
                                        <h3 className={'news-headline'}>Lastest news from block</h3>
                                        <p className={'news-description'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet
                                            aspernatur
                                            atque distinctio earum facilis fugit illo maxime, quasi reiciendis.
                                        </p>
                                        <h6 className={'news-read-more'}>Read More<AiOutlineRight/></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="container">
                                <div className="news-block row">
                                    <div className={'col-md-3'}>
                                        <div className="news-image"></div>
                                    </div>
                                    <div className={'news-content col-md-9'}>
                                        <h3 className={'news-headline'}>Lastest news from block</h3>
                                        <p className={'news-description'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur
                                            eligendi ex exercitationem impedit iure maiores optio quas quia quos.
                                            Commodi consequatur consequuntur cupiditate id incidunt libero magnam magni
                                            neque nostrum quis, repellendus sapiente tempore temporibus voluptas
                                            voluptates! Adipisci, autem consectetur consequatur eveniet exercitationem
                                            id ipsa iusto labore nobis nulla odio omnis pariatur quia quos, reiciendis
                                            repellendus sapiente tenetur veritatis.</p>
                                        <h6 className={'news-read-more'}>Read More<AiOutlineRight/></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </section>
            <Footer/>
        </section>
    )
}

export default LandingPage;
