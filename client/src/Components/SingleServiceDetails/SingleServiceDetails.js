import React from "react";
import { Link } from "react-router-dom";


const SingleServiceDetails = ({ service}) => {
  console.log("service",service);
  const { _id, image, district, spotName, description, duration, cost , distance , seats} =
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
            <h5 className="card-text text-center">{seats?.length > 0 ? `You Can Book  ${seats[0]} ` : 'Try Another Day'}</h5>
            <h6 className="card-text text-center">{seats?.length ? seats?.length : 0} {seats?.length > 1 ? 'Bookings' : 'Booking'} Available</h6>
          </div>
         {
          seats?.length > 0 ?
          <Link className="Link__button " to={`/booking/${_id}`} style={{ }}>
            <div className="row justify-content-center">
            <button  className="btn btn-success text-white px-4 w-75 rounded-0 order-btn ">
            Book Now 
            </button>
            </div>
          </Link>
          :

          <Link className="Link__button disabled__link" to={`/booking/${_id}`} style={{ }}>
          <div className="row justify-content-center">
          <button disabled className="btn btn-danger text-white px-4 w-75 rounded-0 order-btn ">
          No Booking Available
          </button>
          </div>
        </Link>

         }
          
        </div>
      </div>
    </>
  );
};

export default SingleServiceDetails;