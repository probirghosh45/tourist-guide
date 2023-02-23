import { signOut } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
// import { AuthContext } from '../Contexts/AuthProvider';
import { BsFillTelephoneFill } from 'react-icons/bs';
import {  FiLogIn } from 'react-icons/fi';
import {  FiLogOut } from 'react-icons/fi';
import {  FaFacebookF } from 'react-icons/fa';
import {  FaTwitter } from 'react-icons/fa';
import {  FaLinkedinIn } from 'react-icons/fa';
import {  FaInstagram } from 'react-icons/fa';
import {  FaYoutube } from 'react-icons/fa';
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.uid);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <>
    <section class=" py-2">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <ul class="nav">
                        <li className="ps-1 d-flex"> <span className="pt-1 pe-2"><BsFillTelephoneFill/></span>+8801621502211</li>
                        <li class="ps-3"><i class="fa fa-envelope"></i>info@beautyruralbengal.com</li>
                    </ul>
                </div>
                <div class="col-sm-6">
                    <ul class="nav float-end pt-2">
                    <Link to="/" class="me-3">< FaFacebookF /></Link>
                    <Link to="/" class="me-3">< FaTwitter /></Link>
                    <Link to="/" class="me-3">< FaLinkedinIn /></Link>
                    <Link to="/" class="me-3">< FaFacebookF /></Link>
                    <Link to="/" class="me-3">< FaYoutube /></Link>
                    </ul>
                </div>
            </div>
        </div>
    </section>
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://i.ibb.co/NCcdyxf/travel-logo-design-agency-vector-inspiration-template-218267349.jpg"
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <em className="tourist">Tourist</em>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-nav me-auto mb-4 mb-lg-0">
              {/* <Nav className="me-auto"> */}
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/dreamDestination">
                Destination
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About us
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact us
              </Nav.Link>
              </Nav>
              <Nav className="navbar-nav ms-auto mb-4 mb-lg-0">
              <Nav.Link as={Link} to="/tour-package">
                <button className="signIn">Tour Packages</button>
              </Nav.Link>

              {user?.uid ? (
                <>
                  <Nav.Link as={Link} to="/dashboard">
                    <button className="signIn">Dashboard</button>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/">
                    <button onClick={handleLogOut} className="signIn d-flex "> <span className="pt-2 pe-2"><FiLogOut/></span> Sign Out</button>
                  </Nav.Link>
                  <Link
                    id="user-profile"
                    title={user?.displayName || "User Name"}
                    style={{ width: "" }}
                  >
                    <img
                      className=" rounded-full md:w-14"
                      // src={user?.photoURL}
                      src={
                        user?.photoURL
                          ? user?.photoURL
                          : `https://i.ibb.co/G9jFD5Q/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg`
                      }
                      // src={user?.photoURL || `https://i.ibb.co/G9jFD5Q/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg`}
                      alt="profile"
                    ></img>
                  </Link>
                  {/* <Link onClick={handleLogOut} className="btn ml-2">
                    Log Out
                  </Link> */}
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <button className="signIn d-flex "> <span className="pt-2 pe-2">< FiLogIn/></span> Sign in</button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
