import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Review.css';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import LoadDB from '../LoadDB/LoadDB';

const Review = () => {
    const [items] = LoadDB()
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 4000,
        cssEase: "linear",
        adaptiveHeight: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    adaptiveHeight: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true
                }
            }
        ]
    };
    return (
        <Container className='mt-5 overflow-hidden'>
            <h2 className="gallery service-title fs-1 fw-bold mt-5 text-1 mb-0 text-uppercase">What Our Client’s Say</h2>
            <p className='team-title get col-md-7 mx-auto mb-4 '>Get unbiased ratings and reviews for services from Consumer Reports, plus trusted advice and in-depth reporting on what matters most.</p>

            <Slider {...settings}>
                {Array.from({ length: 1 }).map((_, idx) => (
                    items?.map(item => item?.section === 'reviews' &&
                        <div className="mb-3 p-2 p-md-3 ">
                            <div className=" bg-light p-4 pCard border-0 " style={{ borderRadius: '19px' }}>
                                <div className="d-flex justify-content-between align-items-center my-2">
                                    <div>
                                        <img src={item?.photo} alt="" className="rounded-circle border border-5 border-11" style={{ width: "95px" }} />
                                    </div>
                                    
                                </div>
                                <div className="text-start">
                                    <p>{item?.details}</p>
                                    <h4 className='gallery fw-bold'>{item?.name}</h4>
                                    <span className='buy'>{item?.title}</span>
                                </div>
                            </div>
                        </div>
                    )))}
            </Slider>
        </Container >
    );
};

export default Review;