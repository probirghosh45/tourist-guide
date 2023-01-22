import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
      <>
      <section className='contact'>
      <Container>
        <Row>
        <Col xs={12} md={4}>
          <div className='discover'>
            <h2>Discover Bangladesh</h2>
            <p>Discover Bangladesh Naturally!</p>
            <br />
            <br />
            <h4>E-mail</h4>
            <hr />
            <h6>For Tour Purpose: tour@beautyofruralbengal.com <br />
            For Official Purpose: info@beautyofruralbengal.com</h6>
          </div>
        </Col>

        <Col xs={12} md={8}>
        <div className="contactContainer py-5">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12 animate__animated animate__zoomIn">
                    <div className="head text-center text-white py-3">
                      <h3>Contact Us</h3>
                      </div>
                    </div>
                  </div>

                  <div className="form p-3">
                    <div className="form-row my-5">
                      <div className="col-lg-6">
                        <input type="text" className='effect-1' placeholder='First Name' />
                        <span className='Focus-border'></span>
                        </div>
                      <div className="col-lg-6">
                        <input type="text" className='effect-1' placeholder='Last Name' />
                        <span className='Focus-border'></span>
                        </div>
                      </div>

                      <div className='form-row'>
                          <div className="col-lg-6">
                            <input type="text" className='effect-1' placeholder='Email Address' />
                            <span className='Focus-border'></span>
                          </div>
                          <div className="col-lg-6">
                            <input type="text" className='effect-1' placeholder='Phone Number' />
                            <span className='Focus-border'></span>
                          </div>
                      </div>

                      <div className='form-row pt-5'>
                        <div className='col-lg-12'>
                            <input type="text" className='effect-1' placeholder='Type Your Message' />
                            <span className='Focus-border'></span>
                        </div>
                      </div>
                      <div className="form-row pt-5">
                        <div className="col-lg-6">
                          <p> <input type='checkbox' /> I'm not a Robot </p>
                        </div>
                        <div className="col-lg-4">
                          <button className='btn11'>Send Message</button>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Col>
          
        </Row>
    
      </Container>
    </section>
      </>
  );
};


export default Contact;