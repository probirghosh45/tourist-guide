import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './OurMenus.css';

const OurMenus = () => {
    return (
        <div className='blogs'>
            <Container>
             <h2 className='menus'>Our Menus Items</h2>  
             <p className='title1'>SELECT FROM THE FOLLOWING MENU OPTIONS
                </p>
                <hr />
                <Row >
                    <Col md={4} xs={12} className="my-2"> 
                        <div className='menus-card'>
                        <img className='menus_img' src={'https://1.bp.blogspot.com/-UqBN0rEb-n0/X_SL3DdqHAI/AAAAAAAAN7w/DeocL6wnWFIr5CDjCDt0ITUIoRF2vqdGwCLcBGAsYHQ/s16000/Patishapta%2Bpitha%2Brecipe.JPG'} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='menus_title'>
                        Pitha recipe
                        </div>
                        </div>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="my-2"> 
                        <div className='menus-card'>
                        <img className='menus_img' src={'https://static.india.com/wp-content/uploads/2017/04/Bengali_Fish_meal.jpg?impolicy=Medium_Resize&w=1200&h=800'} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='menus_title'>
                            HomeMade Food
                        </div>
                        </div>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="my-2"> 
                        <div className='menus-card'>
                        <img className='menus_img' src={'https://cdn2.sharechat.com/%E0%A6%AE%E0%A6%BF%E0%A6%B7%E0%A7%8D%E0%A6%9F%E0%A6%BF_da068471-b5d6-4896-bfa3-34e1a21988cd-5d853f79-e7ea-44f8-afa5-57f6792ff1ed_cmprsd_40.jpg'} alt=""/>
                        <div className='img_overlay img_overlay--primary'>
                        <div className='menus_title'>
                            Rosugolla
                        </div>
                        </div>
                        </div>
                    </Col>
                  
                    
                </Row>
            </Container>
            
        </div>
    );
};

export default OurMenus;