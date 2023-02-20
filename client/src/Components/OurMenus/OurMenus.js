import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image1 from '../../images/11.jpg'
import image2 from '../../images/9.jpg'
import image3 from '../../images/4.jpg'
import image4 from '../../images/7.jpg'
import image5 from '../../images/3.jpg'
import image6 from '../../images/2.jpg'
import './OurMenus.css';
import Slider from 'react-slick';

const OurMenus = () => {
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
        <div className='blogs'>
            <Container>
             <div className='text-center'>
             <h2 className='menus'>Traditional Foods</h2>  
             <p className='title1'>SELECT FROM THE FOLLOWING MENU OPTIONS
                </p>
             </div>
                <hr />
                <Row >
                <Slider {...settings}>
                <Col md={4} xs={12} className="my-2 p-4"> 
                        <div className='menus-card'>
                        <img className='menus_img' src={'https://1.bp.blogspot.com/-UqBN0rEb-n0/X_SL3DdqHAI/AAAAAAAAN7w/DeocL6wnWFIr5CDjCDt0ITUIoRF2vqdGwCLcBGAsYHQ/s16000/Patishapta%2Bpitha%2Brecipe.JPG'} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='menus_title'>
                        Pitha recipe
                        </div>
                        </div>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="my-2 p-4"> 
                        <div className='menus-card'>
                        <img className='menus_img' src={'https://static.india.com/wp-content/uploads/2017/04/Bengali_Fish_meal.jpg?impolicy=Medium_Resize&w=1200&h=800'} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='menus_title'>
                            HomeMade Food
                        </div>
                        </div>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="my-2 p-4"> 
                        <div className='menus-card'>
                        <img className='menus_img' src={'https://cdn2.sharechat.com/%E0%A6%AE%E0%A6%BF%E0%A6%B7%E0%A7%8D%E0%A6%9F%E0%A6%BF_da068471-b5d6-4896-bfa3-34e1a21988cd-5d853f79-e7ea-44f8-afa5-57f6792ff1ed_cmprsd_40.jpg'} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='menus_title'>
                            Rosugolla
                        </div>
                        </div>
                        </div>
                    </Col>
          
                
                <Col md={4} xs={12} className="my-2 p-4"> 
                        <div className='menus-card'>
                        <img className='menus_img' src={image1} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='menus_title'>
                            Sweets
                        </div>
                        </div>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="my-2 p-4"> 
                        <div className='menus-card'>
                        <img className='menus_img' src={image2} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='menus_title'>
                            Singara
                        </div>
                        </div>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="my-2 p-4"> 
                        <div className='menus-card'>
                        <img className='menus_img' src={image3} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='menus_title'>
                            Kichuri
                        </div>
                        </div>
                        </div>
                    </Col>
                  
                </Slider>
                    
                </Row>


            </Container>
            
        </div>
    );
};

export default OurMenus;