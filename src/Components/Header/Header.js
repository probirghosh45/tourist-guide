import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
      <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
        <img src="https://thumbs.dreamstime.com/z/travel-logo-design-agency-vector-inspiration-template-218267349.jpg" alt="" 
            width="30"
            height="30"
           className="d-inline-block align-top"
            />
            Tourist
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>

            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

          </Nav>
         
          <Nav>
          <Nav.Link as={Link} to="/login">Sign in</Nav.Link>
          <Nav.Link as={Link} to="/dashboard">
            Dashboard
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </>
  
    );
};

export default Header;