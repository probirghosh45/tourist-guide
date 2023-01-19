import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = ({service}) => {
    console.log(service);
    const {_id, img,district,districtInfo} =service;
    console.log(_id)

    return (
        <div className="col product">
            
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt={district} />
                    <div className="card-body">
                        <h4 className="card-title cursive-text text-center">
                            {district}
                        </h4>

                        <p className="card-text more-small-text text-muted text-justify">
                            {districtInfo}
                        </p>

                    </div>
                    <ul>
                        <li><a href="#">View Tourist Place</a></li>
                        <li><a href="#">View Traditional food</a></li>
                    </ul>

                    <Link to={`/booking/${_id}`}>
                    <button className="btn btn-success text-white px-4 w-75 rounded-0 order-btn ">Book Now</button>
                    </Link>

                </div>
               
        </div>
    );
};

export default ServiceDetails;