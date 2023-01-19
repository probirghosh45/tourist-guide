import { signOut } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../Contexts/AuthProvider';
import './Header.css';

const Header = () => {
  // const {user, logOut } = useContext(AuthContext);

  // const handleLogOut = () =>{
  //   logOut()
  //   .then(() =>{})
  //   .catch(err => console.log(err));
  // }


    return (
        <>
      <Navbar collapseOnSelect expand="lg" sticky="top" variant="light">
      <Container>
        <Navbar.Brand href="#home">
        <img src="https://thumbs.dreamstime.com/z/travel-logo-design-agency-vector-inspiration-template-218267349.jpg" alt="" 
            width="30"
            height="30"
           className="d-inline-block align-top"
            />
            <em className='tourist'>Tourist</em>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="navbar-nav ms-auto mb-2 mb-lg-0"> */}
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
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
     
          {/* <Nav.Link as={Link} to="/home">PK</Nav.Link> */}
          <Nav.Link as={Link} to="/home">
    
            <Image style={{height: '30px'}} roundedCircle
            src=""></Image>
          
            <i class="fa-solid fa-right-to-bracket"></i>
      
            </Nav.Link>
          {/* <button className='signIn'>logout</button> */}
          <Nav.Link as={Link} to="/login">
          <button className='signIn'>Sign in</button>
           </Nav.Link>

          <Nav.Link as={Link} to="/register">
            <button className='signIn'>Register</button>
          </Nav.Link>
          {/* <Nav.Link as={Link} to="/dashboard">
            Dashboard
          </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </>
  
    );
};

export default Header;


