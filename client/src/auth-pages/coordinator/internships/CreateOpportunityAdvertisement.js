import React, {useState} from 'react';
import CoordinatorNav from "../../../pages/reusables/CoordinatorNav";
import CreateInternalInternshipAdvertisementPage from "./CreateInternalInternshipAdvertisementPage";
import CreateExternalInternshipAdvertisementPage from "./CreateExternalInternshipAdvertisementPage";

function CreateOpportunityAdvertisement(props) {
    const [internshipOrigin,setInternshipOrigin]=useState('')

    const handleOriginChange = (origin) => {
        setInternshipOrigin(origin);
    };

    return (
        <section>
            <CoordinatorNav/>
            <main className={`container`}>
                { !internshipOrigin && <div className="row">
                    <div className="col-md-6 py-3">
                        <div
                            className={`card`}
                            onClick={() => setInternshipOrigin('Local')}
                        >
                            <div className="card-body">
                                <h5 className="card-title">Local</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 py-3">
                        <div
                            className={`card`}
                            onClick={() => setInternshipOrigin('Foreign')}
                        >
                            <div className="card-body">
                                <h5 className="card-title">Foreign</h5>
                            </div>
                        </div>
                    </div>
                </div> }
                {internshipOrigin === 'Local' && <CreateInternalInternshipAdvertisementPage handleOriginChange={handleOriginChange}/>}
                {internshipOrigin === 'Foreign' && <CreateExternalInternshipAdvertisementPage handleOriginChange={handleOriginChange}/>}
            </main>
        </section>
    );
}

export default CreateOpportunityAdvertisement;