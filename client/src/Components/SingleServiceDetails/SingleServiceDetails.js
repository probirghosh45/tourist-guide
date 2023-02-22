import React from "react";
import { Link } from "react-router-dom";


const SingleServiceDetails = ({ service}) => {
  console.log(service);
  const { _id, image, district, spotName, description, duration, cost , distance } =
    service;
  console.log(_id);

  return (
    <>
      <div className="col product">
        <div className="card h-100">
          <img src={image} className="card-img-top" alt={spotName} />
          <div className="card-body">
            <h4 className="card-text cursive-text text-center">{spotName}</h4>
            <h6 className="card-text more-small-text text-muted  text-center">
              {district}
            </h6>
            <p className="card-text more-small-text text-muted  text-center">
              {description}
            </p>
            <h6 className="card-text more-small-text text-muted  text-center">
              {distance}
            </h6>
            <h5 className="card-text more-small-text text-muted  text-center">
              {duration} {cost}
            </h5>
          </div>

          <Link to={`/booking/${_id}`} style={{ textDecoration: 'none' }}>
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

export default SingleServiceDetails;