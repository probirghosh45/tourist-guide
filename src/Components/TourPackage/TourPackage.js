// import React from 'react';
// import { Link } from 'react-router-dom';

// const TourPackage = ({tourpackage}) => {
//     console.log(tourpackage);
//     const {img, description, tourPlace, time, days, taka} = tourpackage;

//     return (
//         <div className="col product">
//          {/* <div className="service-banner text-center">
//             <h4 className="display-6 cursive-text service-title animate__animated animate__zoomIn">
//             Our Most Popular Services
//             </h4>
//             <div className='tour'>
//                 <div>
//                     <small className="text-muted small-text">
//                     Village tourism offers a unique opportunity for  
//                     </small>
//                 </div>

//                 <div>
//                     <small className="text-muted small-text">
//                     comfortable cultural immersion.
//                     </small>
//                 </div>
//             </div>
//         </div>      */}
//                 <div className="card h-100">
//                     <img src={img} className="card-img-top" alt="" />
//                     <div className="card-body">
//                         <h4 className="card-title cursive-text text-center">
//                             {tourPlace}
//                         </h4>

//                         <p className="card-text more-small-text text-muted text-center">
//                             {description}
//                         </p>
                        
//                         <p className="card-text more-small-text text-muted text-center">
//                              {days}
//                         </p>
//                         <h5 className="card-text more-small-text text-muted text-center">
//                             {time} <br />    <span>{taka}</span>
//                         </h5>


//                     </div>
//                     <Link>
//                     <div className='google-btn'>
//                 <button className=" google-btn btn animate__animated animate__fadeInUp">Book Now</button>
//             </div>
//                     </Link>


//                 </div>
               
//         </div>
//     );
// };


// export default TourPackage;

import React from 'react';

const TourPackage = () => {
    return (
        <div>
            <h1>Tour-package</h1>
        </div>
    );
};

export default TourPackage;