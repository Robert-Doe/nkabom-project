import React from 'react';
import logo from "./logo.png";

function CoordinatorLoginPage(props) {
    return (
        <section className={'login-screen'}>
            <div className="picture-narrative"></div>
            <div className="login-block">
                <form action="#">
                    <div className="bc-control d-flex justify-content-center">
                        <img src={logo} alt="" height={'75px'}/>
                    </div>
                    <div className={'bc-control'}>
                        <label htmlFor="schoolId" className={'text-dark'}>School ID:</label>
                        <input type="text" id={'schoolId'} className={'form-control'} placeholder={'Enter your ID here'}/>
                    </div>
                    <div className={'bc-control'}>
                        <label htmlFor="schoolId" className={'text-dark'}>PassKey</label>
                        <input type="text" id={'schoolId'} className={'form-control'} placeholder={'Enter your secret pin'}/>
                    </div>
                    <div className={'bc-control'}>
                        <input type="submit" className={'btn btn-warning '} value={'Sign In'}/>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default CoordinatorLoginPage;