import React from 'react'
import './DoctorCard.css'
export default function DoctorCard() {
    // see more and see less button functionality
    const [seeMore, setSeeMore] = React.useState(false);
    const [seeMore1, setSeeMore1] = React.useState(false);
    
    const handleSeeMore = () => {
        setSeeMore(!seeMore);
    }
    const handleSeeMore1 = () => {
        setSeeMore1(!seeMore1);
    }


    return (
        <>
            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="card">
                        <div className="row">
                            <div className="col-md-4">
                            <img className="round" src="https://randomuser.me/api/portraits/men/41.jpg" alt="user" />
                            </div>
                            <div className="col-md-8">
                            <h3 className="card-title">Dr. Manoj Kishor Chhotray</h3>
                            <div className="card-content">
                                    <p>MBBS</p>
                                    <p>General Physician</p>
                                    <p>52 Years Experience Overall</p>
                                    <p>Medical Registration Verified</p>
                                    
                                    {seeMore ? <>
                                        <p>Dr. Manoj Kishor Chhotray is a Doctor in Gajapati Nagar, Bhubaneswar and has an experience of 52 years in this field. Dr. Manoj Kishor Chhotray practices at Apollo Hospitals in Gajapati Nagar, Bhubaneswar. He completed MBBS from Berhampur University in 1971.</p>
                                    <p>He is a member of Odisha Medical council,Indian Medical Association (IMA), Association of Physicians of India (API),Integrated Community Case Management (ICCM),Research Society for the Study of Diabetes in India (RSSDI) and Infarct-related Artery (IRA). Some of the services provided by the doctor are: Head and Neck Infection Treatment, Irritable Bowel Syndrome (IBS) Treatment Skin Tag Treatment,Filaria Treatment and Insulin Free Treatment etc.</p>
                                    </>:<p>Dr. Manoj Kishor Chhotray is a Doctor in Gajapati Nagar, Bhubaneswar and has an experience of 52 years in this field.</p>}
                                    <button className="btn btn-primary" onClick={handleSeeMore}>{seeMore ? <><i className="fa fa-angle-up"></i> See Less</> : <><i className="fa fa-angle-down"></i> See More</>}</button>
                                </div>
                            </div>
                        </div>
                        <div className="buttons">
                                <h5 className="card-title" style={{ fontSize: "15px" }}>Book Your Slots</h5>
                                <div className="row">
                                    <div className="col-md-3 col-12">
                                    <button className="primary" onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href = 'https://calendly.com/campushealthhub2023/30min';
                                        }}>
                                            Online
                                        </button>
                                    </div>
                                    <div className="col-md-2 col-12">
                                        <button className="primary ghost">
                                            Offline
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="card">
                        <div className="row">
                            <div className="col-md-4">
                            <img className="round" src="https://randomuser.me/api/portraits/men/9.jpg" alt="user" />
                            </div>
                            <div className="col-md-8">
                            <h3 className="card-title">Dr. Girish Kishor Chhotray</h3>
                            <div className="card-content">
                                    <p>MBBS</p>
                                    <p>General Physician</p>
                                    <p>52 Years Experience Overall</p>
                                    <p>Medical Registration Verified</p>
                                    
                                    {seeMore ? <>
                                        <p>Dr. Manoj Kishor Chhotray is a Doctor in Gajapati Nagar, Bhubaneswar and has an experience of 52 years in this field. Dr. Manoj Kishor Chhotray practices at Apollo Hospitals in Gajapati Nagar, Bhubaneswar. He completed MBBS from Berhampur University in 1971.</p>
                                    <p>He is a member of Odisha Medical council,Indian Medical Association (IMA), Association of Physicians of India (API),Integrated Community Case Management (ICCM),Research Society for the Study of Diabetes in India (RSSDI) and Infarct-related Artery (IRA). Some of the services provided by the doctor are: Head and Neck Infection Treatment, Irritable Bowel Syndrome (IBS) Treatment Skin Tag Treatment,Filaria Treatment and Insulin Free Treatment etc.</p>
                                    </>:<p>Dr. Manoj Kishor Chhotray is a Doctor in Gajapati Nagar, Bhubaneswar and has an experience of 52 years in this field.</p>}
                                    <button className="btn btn-primary" onClick={handleSeeMore}>{seeMore ? <><i className="fa fa-angle-up"></i> See Less</> : <><i className="fa fa-angle-down"></i> See More</>}</button>
                                </div>
                            </div>
                        </div>
                        <div className="buttons">
                                <h5 className="card-title" style={{ fontSize: "15px" }}>Book Your Slots</h5>
                                <div className="row">
                                    <div className="col-md-3 col-12">
                                    <button className="primary" onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href = 'https://calendly.com/campushealthhub2023/30min';
                                        }}>
                                            Online
                                        </button>
                                    </div>
                                    <div className="col-md-2 col-12">
                                        <button className="primary ghost">
                                            Offline
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                   
                </div>

            </div>

        </>
    )
}
