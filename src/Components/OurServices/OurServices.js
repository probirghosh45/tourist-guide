import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './OurServices.css';

const OurServices = () => {
    const [services, setServices]= useState([])
    console.log(services)

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Supriya-debnath/tourist-guide-visit-client/main/public/divisionDB.json")
            .then(res => res.json())
            .then(data => {setServices(data)
                // const reverseData = data.slice().reverse();
                // setServices(reverseData.slice(0, 8));
            });
    }, []);
    return (
        <div className="mb-4">
        <div className="service-banner text-center">
            <h4 className="display-6 cursive-text service-title animate__animated animate__zoomIn">
            Our Most Popular Services
            </h4>
            <div className='tour'>
                <div>
                    <small className="text-muted small-text">
                    Village tourism offers a unique opportunity for  
                    </small>
                </div>

                <div>
                    <small className="text-muted small-text">
                    comfortable cultural immersion.
                    </small>
                </div>
            </div>
        </div>

        <Container>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

                {services.map(service => <Service key={service._id} service={service}/>)}
            </div>
        </Container>
    </div>
    );
};

export default OurServices;