import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ServiceDetails from './ServiceDetails';

// import './OurServices.css';

const ChittagongService = () => {
    const [services, setServices]= useState([])
    console.log(services)

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/probirghosh45/tourist-guide/main/public/servicedb.json")
            .then(res => res.json())
            .then(data => {setServices(data)
                // const reverseData = data.slice().reverse();
                // setServices(reverseData.slice(0, 8));
            });
    }, []);

      const chittagongDivision = services.filter(res =>res.division === "Chittagong Division")

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

                {chittagongDivision.map(service => <ServiceDetails key={service._id} service={service}/>)}
            </div>
        </Container>
    </div>
    );
};

export default ChittagongService;