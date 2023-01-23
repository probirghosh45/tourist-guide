import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import BookingForm from '../BookingForm/BookingForm';
import './Booking.css';

const Booking = () => {
  


    const { id } = useParams();

    const [booking, setBooking] = useState({});
    console.log(booking);
    useEffect(() => {
        const uri = `https://tourist-guide-visit-server.vercel.app/services${id}`;
        fetch(uri)
            .then((res) => res.json())
            .then((data) => setBooking(data));
    }, [id]);
    

    return (
        <>
           
            <div className="place-order py-5">
                <h2 className="text-center my-4 place-order-header">
                    Your Booking Information
                </h2>
                <Container>
                    <Row>
                        <Col
                            md={6}
                            xs={12}
                            className="text-center left-div my-3"
                        >
                            <img
                                src={booking?.coverImg}
                                alt=""
                                className="img-size pt-3"
                            />
                           
                            <p className="products-card-para primary py-10">
                                Name: {booking?.spotName}
                            </p>

                        </Col>
                        <Col md={6} xs={12} className="my-3">
                            <BookingForm booking={booking}></BookingForm>
                        </Col>
                    </Row>
                </Container>
            </div>
           
        </>
    );
};

export default Booking;