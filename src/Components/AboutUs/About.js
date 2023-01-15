import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="my-4">
        <div className="mb-4 text-center bg-light service-banner">
            <h4 className="display-6 cursive-text service-title">
                About Us
            </h4>
            <div>
                <div>
                    <small className="text-muted small-text">
                    Responsibilities may include not only providing and preparing food but also serving it and 
                    </small>
                </div>

                <div>
                    <small className="text-muted small-text">
                    cleaning up afterwards. We have thousands of happy clients
                    </small>
                </div>

                <div>
                    <small className="text-muted small-text">
                        all around the world.
                    </small>
                </div>
            </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-2">
            <div className="col d-flex align-items-center justify-content-center">
                <div className="w-75 banner-text-container">
                    <h4 className="display-6 cursive-text head1">Who We Are</h4> <hr />
                    <p className="text-muted small-text">
                    It helps us to learn the heritage and culture of our own land too. We enjoy tourism because each place provides us with a unique experience and various different facilities.
                    "traveling to and staying in places outside their usual environment for not more than one consecutive year for leisure, business and other purposes".
                    </p>
                </div>
            </div>

            <div className="col">
                <img className="img-fluid" src="https://live.staticflickr.com/7019/6632833071_4b571eb6d1_b.jpg" alt="" />
            </div>


            <div className="col">
                <img className="img-fluid" src="https://thumbs.dreamstime.com/b/beautiful-views-nature-banks-river-west-bengal-where-some-village-boys-playing-landscape-green-trees-181721102.jpg" alt="" />
            </div>

            <div className="col d-flex align-items-center justify-content-center">
                <div className="w-75 banner-text-container">
                    <h4 className="display-6 cursive-text head1">Why You Trust Us</h4> <hr />
                    <p className="text-muted small-text">
                    We want to be a reliable service for everyone, and our team knows that your trust is a reward for the excellent job. To win this reward, we provide the high-quality service and care about every customer. We are proposing a multidimensional model to measure trust in a tourist destination, which proves the fundamental roles played by honesty, benevolence, and competence by both local inhabitants and institutions in developing trust.
                    </p>
                </div>
            </div>
        </div>
    </Container>
    );
};

export default About;