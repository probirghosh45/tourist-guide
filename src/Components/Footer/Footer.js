import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer text-center text-lg-start text-white bg-dark">
            <section className="py-3">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">
                                Beauty Of Rural Bangal
                            </h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#0DCAF9", height: "2px" }}
                            />
                            <p className="small-text footer-about">
                            The rural bengal is responsible for developing the menu and serving the food, and assisting with the cleanup.
                            </p>

                            <div className='logoo'>
                                <img src="http://4.bp.blogspot.com/_lXqvPoS5fc0/R_DCKI5VQ5I/AAAAAAAAAHE/VwTFMoRvDKY/s320/Travel+Guide+Logo.jpg" alt="" />
                            </div>

                        </div>

                        {/* Service */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold ">Explore</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#0DCAF0", height: "2px" }}
                            />


                            <p>
                                <NavLink to="/services" className="text-white text-decoration-none small-text">
                                    Dhaka
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/services" className="text-white text-decoration-none small-text">
                                    Mymensingh
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/services" className="text-white text-decoration-none small-text">
                                    Rajshahi
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/services" className="text-white text-decoration-none small-text">
                                    Rangpur
                                </NavLink>
                            </p>
                        </div>

                        {/* Useful links */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Useful links</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#0DCAF0", height: "2px" }}
                            />

                            <p>
                                <NavLink to="/" className="text-white text-decoration-none small-text">Home</NavLink>
                            </p>

                            <p>
                                <NavLink to="/services" className="text-white text-decoration-none small-text">
                                    Services
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/about" className="text-white text-decoration-none small-text">
                                    About
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/reviews" className="text-white text-decoration-none small-text">
                                    Reviews
                                </NavLink>
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold ">Contact</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#0DCAF0", height: "2px" }}
                            />

                            <p className="small-text">
                                <i className="fas fa-home me-3"></i>
                                Dhaka, Bangladesh
                            </p>

                            <p className="small-text">
                                <i className="fas fa-envelope me-3"></i>
                                info@beautyofruralengal.com
                            </p>

                            <p className="small-text">
                                <i className="fas fa-phone me-3"></i>
                                +880 199 777 822
                            </p>

                            <div className="col-md-6 col-lg-12 text-center footer-i ">
                            <Link to='/'>
                                <i className="fab fa-facebook-f  me-4 fs-4"> </i>
                            </Link >
                            <Link to='/'>
                                <i className="fab fa-twitter  me-4 fs-4"> </i>
                            </Link>
                            <Link to='/'>
                                <i className="fab fa-linkedin-in me-4 fs-4"> </i>
                            </Link>
                            <Link to='/'>
                                <i className="fab fa-instagram fs-4"> </i>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Copyright */}
            <div
                className="text-center p-3 small-text"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
                <span className="me-2">© 2022 Copyright</span>
               {/* <span className='y'> Catering & Event Management</span> */}

                <NavLink to="/" className="text-white text-decoration-none">
                    Beauty Of Rural Bangal
                </NavLink>
            </div>
        </footer>
    );
};

export default Footer;