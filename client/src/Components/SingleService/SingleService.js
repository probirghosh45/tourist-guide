import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SingleServiceDetails from '../SingleServiceDetails/SingleServiceDetails';

const SingleService = () => {
      const spot = useLoaderData();
    //   console.log("spot", spot) 

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
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {spot.map(service => <SingleServiceDetails key={service._id} service={service}/>)}
            </div>
        </Container>
    </div>
    );
};

export default SingleService;