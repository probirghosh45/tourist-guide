import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import BookingForm from "../BookingForm/BookingForm";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
// import Calendar from 'react-calendar';
const Booking = () => {
  const booking = useLoaderData();
  console.log("Booking", booking);
  const [reviews, setReviews] = useState([]);
  const { user,selectedDate} = useContext(AuthContext);
  const stamp = new Date().getTime();
  // const date = format(selectedDate, "PP");

  // const [value, onChange] = useState(new Date());
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;

    const review = {
      serviceName: booking?.spotName,
      sid: booking?._id,
      reviewMessage: e.target.review.value,
      reviewerName: user?.displayName,
      reviewerMail: user?.email,
      reviewerPhotoUrl: user?.photoURL,
      timeStamp: stamp,
    };

    // sending the data to server
    fetch(`${process.env.REACT_APP_API_URL}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Review Added");
          form.reset();
          // return
        }
        const newReview = [review, ...reviews];
        setReviews(newReview);
      });
  };
  // Receiving service based review

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/reviews/?sid=${booking?._id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      })
      .catch((err) => console.error(err));
  }, [booking?._id]);

  return (
    <>
      <div className="place-order py-5">
        <h2 className="text-center my-4 place-order-header">
          Your Booking Information
        </h2>
        {/* <h3 className='text-center text-secondary font-bold py-4'>You have select {format(selectedDate, 'PP')}</h3> */}

        <Container>

          <Row>
              <Col md={6} xs={12} className="text-center my-5 pt-3">
              <img
                src={booking?.image ? booking?.image : booking?.img}
                alt=""
                className="img-size pt-3"
              />
              <p className="products-card-para primary pt-10 pb-2">
                {booking?.spotName ? booking?.spotName : booking?.tourPlace}
              </p>
              <p className="products-card-para primary pb-2">
                {booking?.description}
              </p>
            </Col>

            <Col md={6} xs={12} className="my-3">
              <BookingForm selectedDate={selectedDate} booking={booking}></BookingForm>
            </Col>
          </Row>
          <section className="text-gray-600 body-font bg-gray-100 p-20 mt-11">
            <div className="flex md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <a
                    className="inline-flex items-center mr-10"
                    href="/"
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      alt="user"
                      src={
                        user?.photoURL
                          ? user?.photoURL
                          : `https://i.ibb.co/G9jFD5Q/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg`
                      }
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        {user?.displayName}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Your Review
                </h1>
                <form
                  onSubmit={handleReview}
                  className="flex w-full md:justify-start justify-center items-end"
                >
                  <div className="relative mr-4 flex-grow">
                    <input
                      type="text"
                      name="review"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-200 focus:bg-transparent focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </section>
          {reviews?.length ? (
            reviews
              .sort((a, b) => b.timeStamp - a.timeStamp)
              .map((review, index) => (
                <section
                  key={index}
                  className="text-gray-600 body-font overflow-hidden"
                >
                  <div className="py-12">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                      <div className="p-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 mr-20 flex-shrink-0 flex flex-col">
                          <a
                            className="inline-flex items-center"
                            href="/"
                            style={{ textDecoration: "none" }}
                          >
                            <img
                              alt="user"
                              src={
                                review
                                  ? review?.reviewerPhotoUrl
                                  : `https://i.ibb.co/G9jFD5Q/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg`
                              }
                              className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                            />
                            <span className="flex-grow flex flex-col pl-4">
                              <span className="title-font font-medium text-gray-900">
                                {review
                                  ? review?.reviewerName
                                  : "Anonymous User"}
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="md:flex-grow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="block w-5 h-5 text-gray-400 mb-4"
                            viewBox="0 0 975.036 975.036"
                          >
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                          </svg>
                          <p className="leading-relaxed">
                            {review?.reviewMessage}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              ))
          ) : (
            <p className="text-center py-20 text-xl">
              No Review Yet for this Spot 😟
            </p>
          )}
        </Container>
      </div>
    </>
  );
};

export default Booking;
