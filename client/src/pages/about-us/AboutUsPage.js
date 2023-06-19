import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './about-us.css'
import logo from './logo.png'
import mcfLogo from './images/mcf-logo.png';
import knustLogo from './images/knust-logo.png';
import mcgillLogo from './images/mcgill-logo.png';
import ktuLogo from './images/ktu-logo.png';
import uesdLogo from './images/uesd-logo.png';
import missionPic from './images/mission.png'
import visionPic from './images/vision.png'
import robertImage from './images/robert.jpeg'
import davidImage from './images/david.jpg'
import profEllisImage from './images/prof_ellis.jpg'
import profSimpsonImage from './images/prof_simpson.jpg'
import profDebrahImage from './images/prof_debrah.jpg'
import drEduseiImage from './images/dr_edusei.jpg'
import ajimaImage from './images/ajima.jpg'
import coffeePlantation from './coffee_plantation.jpg'
import {GiHamburgerMenu, GiShipWheel} from "react-icons/gi";
import {AiFillEye, AiOutlineRight} from 'react-icons/ai';
import {BsFacebook, BsInstagram, BsLinkedin, BsYoutube} from "react-icons/bs";
import $ from 'jquery'
import './slick/slick.css'
import Footer from "../reusables/Footer";
import OpaqueNav from "../reusables/OpaqueNav";
// import './slick/slick.theme.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 576, // Adjust this breakpoint for tablet screens
                settings: {
                    slidesToShow: 2, // Display 2 slides on tablet screens
                },
            },
            {
                breakpoint: 768, // Adjust this breakpoint for tablet screens
                settings: {
                    slidesToShow: 2, // Display 2 slides on tablet screens
                },
            },
            {
                breakpoint: 1024, // Adjust this breakpoint for laptop screens
                settings: {
                    slidesToShow: 3, // Display 3 slides on laptop screens
                },
            },
        ],
    };



    return (
        <Slider {...settings}>
            <div className="supervisor">
                <div className="image">
                    <img src={profSimpsonImage}/>
                </div>
                <div className="info">
                    <h5>Prof. Ben. K. Simpson</h5>
                    <p>McGill University</p>
                    <p>Supervisor</p>
                </div>
            </div>
            <div className="supervisor">
                <div className="image">
                    <img src={profEllisImage}/>
                </div>
                <div className="info">
                    <h5>Prof. William Otoo-Ellis</h5>
                    <p>KNUST</p>
                    <p>Supervisor</p>
                </div>
            </div>
            <div className="supervisor">
                <div className="image">
                    <img src={profDebrahImage}/>
                </div>
                <div className="info">
                    <h5>Prof. Edward W. Debrah</h5>
                    <p>UESD</p>
                    <p>Supervisor</p>
                </div>
            </div>
            <div className="supervisor">
                <div className="image">
                    <img src={drEduseiImage}/>
                </div>
                <div className="info">
                    <h5>Dr. Vida Edusei</h5>
                    <p>KTU</p>
                    <p>Supervisor</p>
                </div>
            </div>
            <div className="supervisor">
                <div className="image">
                    <img src={ajimaImage}/>
                </div>
                <div className="info">
                    <h5>Raphael Ajima</h5>
                    <p>MasterCard Foundation</p>
                    <p>Project Coordinator</p>
                </div>
            </div>

            {/* Add more slides as needed */}
        </Slider>
    );
};



function AboutUsPage() {

    return (<section>
            <OpaqueNav/>
            <section className={'about-desc py-3'}>
                <div className="container">
                    <h5 className={'general-header'}>WHAT WE ARE ABOUT</h5>
                    <p>We are a group of four esteemed organizations - the Food Science & Technology Program at Kwame
                        Nkrumah University of Science and Technology (KNUST), the Post-Harvest/Food Technology
                        Department at Koforidua Technical Institute (KTU),
                        the University of Environment & Sustainable Development (UESD), and the McGill University -
                        Faculty of Agricultural and Environmental Sciences. </p><br/>
                    <p>Our mission is to provide students with hands-on, experiential learning opportunities in the
                        fields of food science, technology, and sustainable development. Our programs are designed to
                        equip students with the knowledge and skills required to succeed
                        in today's job market and to contribute to critical sustainable development goals such as food
                        security, health & wellness, and environmental protection. </p><br/>
                    <p>This collaborative project is made possible by the generous funding from the MasterCard
                        Foundation and our international partnerships with institutions such as the Food Research
                        Institute of the Council for Scientific & Industrial Research, Galilee
                        International Management Institute (GIMI) of Israel, Amity University in India, and the United
                        Nations International Children's Emergency Fund (UNICEF). With world-class programs, highly
                        skilled faculty, and a commitment to innovation and impact,
                        we are proud to be leading the way in experiential learning in food science, technology, and
                        sustainable development. </p><br/>
                </div>
            </section>
            <section className="mission-vision">
                <article className="mission-block">
                    <div className="container">
                        <h3 className={'mission-header'}>OUR MISSION</h3>
                        <div className="d-flex">
                            <img src={missionPic} className={'mission-image'}/>
                            <p className={'container'}>
                                Our mission is to advance food science and technology in Ghana by fostering
                                multidisciplinary training, research, and collaboration.
                                We aim to enhance food security, health and wellness, and environmental protection by
                                developing innovative and sustainable
                                solutions in food science and technology.
                            </p>
                        </div>
                    </div>
                </article>
                <article className="vision-block">
                    <div className="container">
                        <h5 className={'mission-header'}>OUR VISION</h5>
                        <div className="d-flex">
                            <img src={visionPic} className={'vision-image'} alt=""/>
                            <p className={'container'}>
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
                </article>
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
            <section className="partner-description">
                <div className="container">
                    <div className="accordion" id="accordionExample1">
                        <div className="card text-left" type="button"
                             data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                             aria-controls="collapseOne">
                            <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                    Kwame Nkrumah University of Science and Technology
                                </h5>
                            </div>

                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                 data-parent="#accordionExample1">
                                <div className="card-body">
                                    The KNUST Food Science & Technology program offers multidisciplinary training at the
                                    undergraduate and postgraduate levels. These programs are designed to provide
                                    knowledge and skills to suit current job market requirements and to fulfil critical
                                    sustainable development goals pertaining to food security, health & wellness, and
                                    environmental protection. The training offered in the programs are founded in basic
                                    scientific and engineering principles and encompass the basic sciences, food
                                    chemistry, food analysis & quality assurance, food microbiology, food process
                                    engineering, food processing & preservation, food production, food product
                                    development, and food packaging & storage. The Food Science & Technology program at
                                    KNUST is research intensive and have involved international collaborations with the
                                    MasterCard Foundation; McGill’s Food Science Program, Canada’s IDRC & CIDA, Ghana’s
                                    Food Research Institute, Ghana-Denmark Pilot Research Cooperation Program (PRCP,
                                    University of Copenhagen), AUSAID Research Cooperation, IFAD and & IITA.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="accordion" id="accordionExample2">
                        <div className="card text-left" type="button"
                             data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true"
                             aria-controls="collapseOne">
                            <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                    Koforidua Technical University
                                </h5>
                            </div>

                            <div id="collapseTwo" className="collapse show" aria-labelledby="headingOne"
                                 data-parent="#accordionExample2">
                                <div className="card-body">
                                    KTU offers Bachelor of Technology, Higher National Diploma, & Certificate programs
                                    in the Business, Engineering, and Science disciplines. There are 6 faculties in all
                                    offering teaching and training to students. The Post-Harvest/Food Technology program
                                    is housed in the Faculty of Applied Sciences and the academic programs offered are a
                                    4-Year Bachelor of Technology (B. Tech), HND Food Technology, and HND Postharvest
                                    Technology. These various programs are multidisciplinary in content and is designed
                                    to train students in basic science and engineering while exposing them to marketing
                                    and entrepreneurial skills on which to build competencies in food technology. The
                                    Department Collaborates with various organizations/institutions (including McGill
                                    Food Science Program for the development of new nutrient-dense food products from
                                    “orphan crops”. KTU also has collaborations with Ghana’s Food Research Institute of
                                    the Council for Scientific & Industrial Research, Ghana’s Grains & Legumes
                                    Development Board, Galilee International Management Institute (GIMI) of Israel, &
                                    Amity University in India) to provide practical / hands on training to students.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="accordion" id="accordionExample3">
                        <div className="card text-left" type="button"
                             data-toggle="collapse" data-target="#collapseThree" aria-expanded="true"
                             aria-controls="collapseOne">
                            <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                    University of Environment and Sustainable Development (UESD)
                                </h5>
                            </div>

                            <div id="collapseThree" className="collapse show" aria-labelledby="headingOne"
                                 data-parent="#accordionExample3">
                                <div className="card-body">
                                    UESD is comprised of 2 Schools, viz., School of Natural & Environmental Sciences
                                    (NES), & School of Sustainable Development (SSD). It offers programs related to the
                                    environment and agro-business and conducts research in these disciplines for
                                    national development.
                                    UESD has as one of its major foci to train and produce highly skilled B. Tech,
                                    Diploma, & Certificate graduates who are well-positioned to be agents and partners
                                    in the identification and resolution of prevailing environmental and sustainable
                                    developments challenges. UESD has as one of its goals, seeking international
                                    research partnerships with other world-class universities and institutions, that
                                    would enable them to enhance its capacity to shape and secure international research
                                    funding, and attract the best minds to work with the university to conduct
                                    meaningful research, and to develop commercial opportunities. UESD currently has
                                    collaborations with the McGill Food Science program on the valorization of
                                    agricultural waste and environmental health protection. UESD also has on-going
                                    collaborations with United Nations International Children's Emergency Fund (UNICEF).
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="accordion" id="accordionExample4">
                        <div className="card text-left" type="button"
                             data-toggle="collapse" data-target="#collapseFour" aria-expanded="true"
                             aria-controls="collapseOne">
                            <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                    McGill University and MasterCard Foundation
                                </h5>
                            </div>

                            <div id="collapseFour" className="collapse show" aria-labelledby="headingOne"
                                 data-parent="#accordionExample4">
                                <div className="card-body">
                                    Some placeholder content for the first accordion panel. This panel is shown by
                                    default,
                                    thanks to the <code>.show</code> class.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={'supervisors container mb-4'}>
                <h5 className={'section-identifier'}>SUPERVISORS</h5>
                <div className="container">
                    <Carousel/>
                </div>

            </section>
            <section className="project-assistants mt-4">
                <h5 className={'section-identifier mt-5'}>ASSISTANTS</h5>
                <div className="container">
                    <div className="assistants-block">
                        <div className="assistant">
                            <div className="assistant-image">
                                <img src={davidImage}/>
                            </div>
                            <div className="info">
                                <h5>David Gameli Agbeko</h5>
                                <p>McGill University Intern</p>
                                <p>Project Assistant</p>
                            </div>
                        </div>
                        <div className="assistant">
                            <div className="assistant-image">
                                <img src={robertImage}/>
                            </div>
                            <div className="info">
                                <h5>Robert Doe</h5>
                                <p>McGill University Intern</p>
                                <p>Web Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </section>
    )
}

export default AboutUsPage;
