import React, { useContext, useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import SingleServiceDetails from "../SingleServiceDetails/SingleServiceDetails";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
// import { UserContext } from "../../App";
// import { useContext } from "react";

const SingleService = () => {
  const spot = useLoaderData();

  // let { id } = useParams();
  // console.log("params",id);
  const { selectedDate, setSelectedDate } = useContext(AuthContext);
  const date = format(selectedDate, 'PP');

//   const { data: spot = [], refetch, isLoading } = useQuery({
//     queryKey: ['spot', date],
//     queryFn: async () => {
//         const res = await fetch(`${process.env.REACT_APP_API_URL}/division/${id}?date=${date}`);
//         const data = await res.json();
//         return data
//     }
// });

  // const [spot,setSpot] = useState()
  // fetch(`${process.env.REACT_APP_API_URL}/division/${id}`)
  // .then((response) => response.json())
  // .then((data) => setSpot(data));



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
      </Container>
    </div>
  );
};

export default SingleService;
