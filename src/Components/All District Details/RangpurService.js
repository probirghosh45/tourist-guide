import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ServiceDetails from './ServiceDetails';

// import './OurServices.css';

const RangpurService = () => {
    const [services, setServices]= useState([])
    console.log(services)

    useEffect(() => {
        fetch("http://localhost:5000/services/")
            .then(res => res.json())
            .then(data => {setServices(data)
                // const reverseData = data.slice().reverse();
                // setServices(reverseData.slice(0, 8));
            });
    }, []);

      const rangpurDivision = services.filter(res =>res.division === "Rangpur Division")

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

                {rangpurDivision.map(service => <ServiceDetails key={service._id} service={service}/>)}
            </div>
        </Container>
    </div>
    );
};

export default RangpurService;