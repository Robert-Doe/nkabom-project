import InternNav from "../../pages/reusables/InternNav";
import {AiFillPhone} from "react-icons/ai";
import {BiPhone} from "react-icons/bi";
import {MdEmail} from "react-icons/md";
import {GoLocation} from "react-icons/go";
import {useParams} from "react-router-dom";

function ViewAdvertisementDetailsPage() {
    const {id}=useParams()
    return (<section>
        <InternNav/>
        <main className={'container mt-5'}>
            <h5>Web Developer Needed Urgently - {id}</h5>
            <p>Google Ghana</p>
            <p><BiPhone color={'#f90'}/>&nbsp;&nbsp; +233 271302702 &nbsp;<MdEmail color={'#f90'}/>&nbsp;&nbsp; robertdoe60@gmail.com</p>
            <p><GoLocation color={'#f90'}/> &nbsp;&nbsp; Accra Market Circle, Near Owusu Interchange</p>
            <br/>
            <p> Looking to launch your career in web development? We have an exciting opportunity for you! Google Ghana is seeking a talented
                Web Developer Intern to join our team.
                Requirements:
                Proficient in HTML, CSS, and JavaScript.
                Familiarity with web development frameworks such as React, Angular, and Vue.js.
                Strong problem-solving skills and attention to detail.
                Excellent communication and collaboration abilities.
                Currently enrolled in a degree program in Computer Science or related field.
                Previous experience in web development is a plus.
                As a Web Developer Intern at Google Ghana, you will have the chance to work on exciting projects and gain
                valuable experience in a dynamic and supportive environment.

                Apply now and take the first step towards an exciting career in web development with Google Ghana!</p>
        </main>
    </section>)
}

export default ViewAdvertisementDetailsPage