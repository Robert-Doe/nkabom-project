import React, { useRef, useState } from 'react';
import axios from 'axios';
import CoordinatorNav from '../../../pages/reusables/CoordinatorNav';

const AddInternPage = () => {
    const studentIdRef = useRef(null);
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const departmentIdRef = useRef(null);
    const dobRef = useRef(null);

    const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            studentId: studentIdRef.current.value,
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            departmentId: departmentIdRef.current.value,
            dob: dobRef.current.value,
        };

        try {
            setIsSubmitting(true);
            setErrorMessage('');

            // Replace 'YOUR_SERVER_ENDPOINT' with your actual server endpoint
            const response = await axios.post('http://localhost:9999/api/interns', formData);

            // Handle the response accordingly, you may show a success message, etc.
            console.log(response.data);

            setIsSubmitSuccess(true);

            studentIdRef.current.value = ""
            firstNameRef.current.value = ""
            lastNameRef.current.value = ""
            emailRef.current.value = ""
            phoneRef.current.value = ""
            departmentIdRef.current.value = ""
            dobRef.current.value = ""
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsSubmitSuccess(false);
            setErrorMessage('An error occurred while submitting the form. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section>
            <CoordinatorNav />
            <div className="container mt-5">
                <h5 className={'py-2 font-weight-bold'}>Intern Form</h5>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="studentId">Student ID</label>
                                <input type="text" id="studentId" ref={studentIdRef} className="form-control" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="departmentId">Department ID</label>
                                <input type="text" id="departmentId" ref={departmentIdRef} className="form-control" required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" ref={firstNameRef} className="form-control" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" ref={lastNameRef} className="form-control" required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" ref={emailRef} className="form-control" required />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" id="phone" ref={phoneRef} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="dob">Date of Birth</label>
                                <input type="date" id="dob" ref={dobRef} className="form-control" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                    {isSubmitSuccess && <div className="text-success">Form submitted successfully!</div>}
                    {errorMessage && <div className="text-danger">{errorMessage}</div>}
                </form>
            </div>
        </section>
    );
};

export default AddInternPage;
