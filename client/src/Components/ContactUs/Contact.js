import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_Service_ID,
        process.env.REACT_APP_Template_ID,
        form.current,
        process.env.REACT_APP_User_ID
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            Swal.fire("Good job!", "Message Sent Successfully 🎉", "success");
            form.reset();
          }
          // console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <section className="contact">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <div className="discover">
                <h2>Discover Bangladesh</h2>
                <p>Discover Bangladesh Naturally!</p>
                <br />
                <br />
                <h4>E-mail</h4>
                <hr />
                <h6>
                  For Tour Purpose: tour@beautyofruralbengal.com <br />
                  For Official Purpose: info@beautyofruralbengal.com
                </h6>
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

                        <form ref={form} onSubmit={sendEmail}>
                          <div className="form p-3">
                            <div className="form-row my-5">
                              <div className="col-lg-6">
                                <input
                                  type="text"
                                  className="effect-1"
                                  placeholder="Your Name"
                                  name="user_name"
                                  required="required"
                                />
                                <span className="Focus-border"></span>
                              </div>
                              <div className="col-lg-6">
                                <input
                                  type="email"
                                  className="effect-1"
                                  name="user_email"
                                  placeholder="Email Address"
                                  required="required"
                                />
                                <span className="Focus-border"></span>
                              </div>
                            </div>

                            <div className="form-row">
                              <div className="col-lg-6">
                                <input
                                  type="number"
                                  className="effect-1"
                                  placeholder="Phone Number"
                                  name="user_phone_number"
                                />
                                <span className="Focus-border"></span>
                              </div>
                              <div className="col-lg-6">
                                <input
                                  type="text"
                                  className="effect-1"
                                  name="message"
                                  placeholder="Type Your Message"
                                />
                                <span className="Focus-border"></span>
                              </div>
                            </div>
                            <div className="form-row pt-5">
                              <div className="col-lg-6">
                                <p>
                                  {" "}
                                  <input type="checkbox" /> I'm not a Robot{" "}
                                </p>
                              </div>
                              <div className="col-lg-4">
                                <button className="btn11" type="submit">
                                  Send Message
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
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
