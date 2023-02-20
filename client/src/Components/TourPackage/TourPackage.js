import React from "react";
import { Link } from "react-router-dom";
import "./TourPackage.css";
import { HiCalendarDays } from 'react-icons/hi2'
import { TbCurrencyTaka } from 'react-icons/tb'
import { BsFillPeopleFill } from 'react-icons/bs'
import { GoPerson } from 'react-icons/go'
const TourPackage = ({ tourpackage }) => {
  console.log(tourpackage);
  const { img, description, tourPlace, people, days, taka, _id } = tourpackage;

  return (
    // <div className="col product">
    //   <div className="card h-100">
    //     <img src={img} className="card-img-top" alt="" />
    //     <div className="card-body">
    //       <h4 className="card-title cursive-text text-center">{tourPlace}</h4>

    //       <p className="card-text more-small-text text-muted text-center">
    //         {description}
    //       </p>

    //       <p className=" card-text more-small-text text-muted text-center">
    //         {days}
    //       </p>
    //       <h5 className="days card-text more-small-text text-muted text-center">
    //         {time} <br /> <span>{taka}</span>
    //       </h5>
    //     </div>

    //     <Link to={`/tour-package-booking/${_id}`} style={{ textDecoration: "none" }}>
    //       <div className="row justify-content-center">
    //         <button className="btn btn-success text-white px-4 w-75 rounded-0 order-btn ">
    //           Book Now
    //         </button>
    //       </div>
    //     </Link>
    //   </div>
    // </div>
    <>
      <div className="py-5">
        <div className="row">
          <div class="col">
            <div class="card h-100 w-100 bg-light">
              <div class="row">
                <div class="col-6">
                  <img src={img} alt="" class="w-100 h-100" />
                </div>
                <div class="col-6">
                  <div class="card-body">
                    <h4>{tourPlace}</h4>
                    <p>{description}</p>
                    <h6 className="d-flex"><span className=" pe-2"><HiCalendarDays/></span>{days}</h6>
                    <h6 className="d-flex"><span className="pe-2"><BsFillPeopleFill/></span> From {people} People</h6>                    
                    <h6 className="d-flex"><span className="pe-2"><GoPerson/></span><TbCurrencyTaka/> {taka} (Per Person )</h6>
                    <Link
                      to={`/tour-package-booking/${_id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="btnHover">
                        <button className=" google-btn btn animate__animated animate__fadeInUp">
                          Book Now
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourPackage;

// import React from 'react';
// import { Link } from "react-router-dom";

// const TourPackage = () => {
//     return (
//         <>
//        <h1>Tour Package Coming Soon</h1>
//         </>
//     );
// };

// export default TourPackage;
