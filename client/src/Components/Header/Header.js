import { signOut } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
// import { AuthContext } from '../Contexts/AuthProvider';
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
      <Navbar collapseOnSelect expand="lg" sticky="top" variant="light">
        <Container>
          <Navbar.Brand href="#home">
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
            <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
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
              <Nav.Link as={Link} to="/tour-package">
                <button className="signIn">Tour Packages</button>
              </Nav.Link>

              {user?.uid ? (
                <>
                  <Nav.Link as={Link} to="/dashboard">
                    <button className="signIn">Dashboard</button>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/dashboard">
                    <button className="signIn" onClick={handleLogOut}>Sign Out</button>
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
