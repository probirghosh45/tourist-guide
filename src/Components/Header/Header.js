import { signOut } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
// import { AuthContext } from '../Contexts/AuthProvider';
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://thumbs.dreamstime.com/z/travel-logo-design-agency-vector-inspiration-template-218267349.jpg"
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <em className="tourist">Tourist</em>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <Nav className="me-auto"> */}
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/destination">
                Destination
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact us
              </Nav.Link>
            </Nav>

            <Nav>
              {user?.uid ? (
                <>
                  
                  <Link
                    id="user-profile"
                    title={user?.displayName || "User Name"}
                    style={{ width: "" }}
                  >
                    <img
                      className=" rounded-full md:w-14"
                      src={user?.photoURL}
                      alt="profile"
                    ></img>
                  </Link>
                  <Link onClick={handleLogOut} className="btn ml-2">
                    Log Out
                  </Link>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <button className="signIn">Sign in</button>
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
