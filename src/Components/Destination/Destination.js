import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import img1 from '../../images/rurak7.jpg'
import img2 from '../../images/rurak8.jpg'
import img3 from '../../images/rural1.jpg'
import img4 from '../../images/rural6.jpg'
import img5 from '../../images/rural3.jpg'
import img6 from '../../images/rural4.jpg'
import './Destination.css';

const Destination = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

    return (

        <>
<Container>
<div>
        <div className="destination service-title">
        <h1>Top Destination</h1>
        </div>
        <p>
        Introduce the place where you traveled and the person you traveled with.  <br /> Your feelings and  
        expectations about this trip were.
        </p>
        <Row>
        <Slider {...settings}>
            <Col md={4} xs={12} className="my-2">
            <div>
            <h3>
            <img style={{ height: "280px", padding:"20px" }} src={img1} alt="" />
            </h3>
          </div>
            </Col>

         <Col md={2} xs={12} className="my-2">
         <div>
            <h3>
            <img style={{ height: "280px", padding:"20px" }} src="https://bengaltourism.files.wordpress.com/2020/12/monchasha_rural_tourism_bengal_india_039.jpg?w=1024" alt="" />
            </h3>
          </div>
         </Col>
          
          <Col md={2} xs={12} className="my-2">
          <div>
            <h3>
            <img style={{ height: "280px", padding:"20px" }} src="https://cdn.britannica.com/47/29547-050-A326596D/village-locality-Bankura-India-West-Bengal.jpg" alt="" />
            </h3>
          </div>
          </Col>

          <Col md={2} xs={12} className="my-2">
          <div>
            <h3>
            <img style={{ height: "280px", padding:"20px" }} src="https://www.transindiatravels.com/wp-content/uploads/chilapata-forest.jpg" alt="" />
            </h3>
          </div>
          </Col>

          <Col md={2} xs={12} className="my-2">
          <div>
            <h3>
            <img style={{ height: "280px", padding:"20px" }} src="https://thumbs.dreamstime.com/b/vernon-france-march-old-mill-217067936.jpg" alt="" />
            </h3>
          </div>
          </Col>

          <Col md={2} xs={12} className="my-2">
          <div>
            <h3>
            <img style={{ height: "280px", padding:"20px" }} src="https://www.tripsavvy.com/thmb/v-r2FhoYWI3U9i0sKPJJTOEfkJ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-122132895-5743060e3df78c6bb00fd267.jpg" alt="" />
            </h3>
          </div>
          </Col>

        </Slider>
        </Row>
      </div>

      </Container>





















 
            {/* <div className="slider">
                <input type="radio" name='testimonial' id='t-1' />
                <input type="radio" name='testimonial' id='t-2' />
                <input type="radio" name='testimonial' id='t-3' checked />
                <input type="radio" name='testimonial' id='t-4' />
                <input type="radio" name='testimonial' id='t-5' />
            </div>

            <div className="testimonials">
                <label className='item' for='t-1'>
                    <h1>1</h1>
                </label>
                <label className='item' for='t-2'>
                    <h1>2</h1>
                </label>
                <label className='item' for='t-3'>
                    <h1>3</h1>
                </label>
                <label className='item' for='t-4'>
                    <h1>j</h1>
                </label>
                <label className='item' for='t-5'>
                    <h1>s</h1>
                </label>
            </div>

            <br />
            <div className="dots">
                <label for='t-1'></label>
                <label for='t-2'></label>
                <label for='t-3'></label>
                <label for='t-4'></label>
                <label for='t-5'></label>
            </div> */}

       


        </>





    );
};

export default Destination;