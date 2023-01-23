import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './WhyBookingUs.css';

const WhyBookingUs = () => {
    return (
        <div className='blogs foodmade'>
        <Container className='c'> 
            <Row>
                <Col md={6} xs={12} className="my-2"> 
                <div className='menus-card home_food'>
                        <p className='Home_made '>
                        Why Booking With Us 
                        </p>
                        <p className='food'>There are several seasons that you must <br /> travel with us!</p>

         <div className='education'>
            <h2 className='title'> Experts On Tour</h2>
            <Row>
                <Col md={2} xs={12} className="my-2">
                    <img className='tour-icon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-t3tSAAfNAyhWdE-1yI4DSEMZSxAHe_e30p7WmMZkUA&s" alt="" />
                </Col>

                <Col md={10} xs={12} className="my-2">
                <p>
                Tour operators are responsible for organising and preparing holiday tours. They follow trends in the popularity of destinations and packages, and adjust company plans accordingly.
            </p> 
                </Col>
            </Row> 

            <br/> 
            <hr></hr>
            <h2 className='title'> Quality Accommodation </h2>
            <Row>
                <Col md={2} xs={12} className="my-2">
                    <img className='tour-icon' src="https://cdn-icons-png.flaticon.com/512/6213/6213279.png" alt="" />
                </Col>

                <Col md={10} xs={12} className="my-2">
                <p>
                Accommodation is all about making room — it can mean a room or place where you will stay or an agreement about sharing something. If the only accommodation at Grandma's is the bunk bed.
            </p> 
                </Col>
            </Row>  


            <br/> 
            <hr></hr>


            <h2 className='title'> Comfortable Transport </h2>
            <Row>
                <Col md={2} xs={12} className="my-2">
                    <img className='tour-icon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY_kSrll696ARHuRS8RQ535xIF8dx8kKtb6obIQqURA&s" alt="" />
                </Col>

                <Col md={10} xs={12} className="my-2">
                    <p>
                    Which affects the passenger satisfaction significantly, is now being. considered as a major factor for commuter's mode choice. Several studies have been conducted to. 
                </p>
                </Col>
            </Row> 


        </div>
                    </div>

                </Col>
                <Col md={6} xs={12} className="my-2"> 
                <div className='menus-card'>
                    <img className='menus_img' src={'https://img2.chinadaily.com.cn/images/201904/17/5cb6c892a3104842e4a905f9.jpeg'} alt=""/>
                    <div className='img_overlay1 img_overlay--primary'>
                    </div>
                    </div>
                </Col>
               
              
                
            </Row>
        </Container>
        
    </div>
    );
};

export default WhyBookingUs;