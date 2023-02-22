import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import SingleServiceDetails from "../SingleServiceDetails/SingleServiceDetails";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import Booking from "../Booking/Booking";

const SingleService = () => {
  const spot = useLoaderData();
  //   console.log("spot", spot)
  const [selectedDate, setSelectedDate] = useState(new Date());
  const date = format(selectedDate, "PP");
  return (
    <div className="mb-4">
      <div className="service-banner text-center">
        <h4 className="display-6 cursive-text service-title animate__animated animate__zoomIn">
          Our Most Popular Services
        </h4>
        <div className="tour">
          <div>
            <small className="text-muted small-text">
              Village tourism offers a unique opportunity for
            </small>
          </div>

          <div>
            <small className="text-muted small-text">
              comfortable cultural immersion.
            </small>
          </div>
        </div>
      </div>

      <Container>
      <Row>
        <Col md={6} xs={12} className="text-center my-3">
          <div className="text-center mr-6 sm:w-full">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onDayClick={setSelectedDate}
            />
          </div>
        </Col>
        <Col md={6} xs={12} className="text-center my-3">
          <img
            src="https://www.musafir.com.bd/images/places/Sajek-Valley.jpg"
            alt=""
            className="img-size pt-3"
          />
        </Col>
      </Row>
      <h3 className='text-center text-secondary font-bold py-4'>You have select {format(selectedDate, 'PP')}</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {spot.map((service) => (
            <SingleServiceDetails key={service._id} service={service}/>
          ))}
        </div>
        <Booking selectedDate={selectedDate} ></Booking>
      </Container>
    </div>
  );
};

export default SingleService;
