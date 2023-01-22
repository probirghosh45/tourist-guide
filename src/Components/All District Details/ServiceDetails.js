import React from "react";
// import { Card, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./ServiceDetails.css";

const ServiceDetails = ({ service }) => {
  console.log(service);
  const { _id, coverImg, district, spotName, description, duration, cost } =
    service;
  console.log(_id);

  return (
    <>
      <div className="col product">
        <div className="card h-100">
          <img src={coverImg} className="card-img-top" alt={district} />
          <div className="card-body">
            <h4 className="card-title cursive-text text-center">{spotName}</h4>
            <h5 className="card-text more-small-text text-muted  text-center">
              {district}
            </h5>
            <p className="card-text more-small-text text-muted  text-center">
              {description}
            </p>
            <p className="card-text more-small-text text-muted  text-center">
              {duration} {cost}
            </p>
          </div>

          <Link to={`/booking/${_id}`}>
            <div className="row justify-content-center">
            <button className="btn btn-success text-white px-4 w-75 rounded-0 order-btn ">
              Book Now
            </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
