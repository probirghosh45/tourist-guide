import React from "react";
import { Link } from "react-router-dom";


const Service = ({ service }) => {
  console.log(service);
  const { name, image, description ,_id } = service;

  return (
    <div className="col product">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h4 className="card-text cursive-text text-center">{name}</h4>

          <p className="card-text more-small-text text-muted text-justify">
            {description}
          </p>
        </div>
        <Link to={`/division/${_id}`} style={{ textDecoration: 'none' }} >
          <div className="row justify-content-center">
            <button className="btn btn-success text-white px-4 w-75 rounded-0 order-btn ">
              {" "}
              View More
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Service;
