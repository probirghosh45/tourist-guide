import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <>
            <div className="banner-img">
        <div className="banner-text">
        <p className='animate__animated animate__fadeInDown'>
                We Have Rice History And Culture.
            </p>
            {/* <div className='animate__animated animate__zoomIn'>
                <h1>Observing The Beauty </h1>
                <h1>Of Rural Bangal</h1>
            </div> */}



            <div className="wrapper">
                <div className="static-text">Observing The Beauty</div>
                <ul className="dynamic-text">
                    <li> <span>Rural Bengal</span> </li>
                    <li> <span>Traditional Food</span> </li>
                    <li> <span>Traditional Place</span> </li>
                    <li> <span>Rural Nature</span> </li>
                </ul>
            </div>

            {/* <button className="btn animate__animated animate__fadeInUp">Learn More</button> */}

            <div className='google-btn'>
                <button className="btn animate__animated animate__fadeInUp">Learn More</button>
            </div>

        </div>
    </div>
        </>
        </div>
    );
};

export default Banner;