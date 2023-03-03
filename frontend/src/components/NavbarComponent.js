// import React from 'react'

// const Navbar = () => {
  //   return (
    //     <div style={{ display: "flex", padding: "1rem 0" }}>
    //         <div
    //           style={{
      //             width: "50%",
      //             display: "flex",
      //             justifyContent: "space-evenly",
      //             alignItems: "center",
      //           }}
      //         >
      //           <img src={app_logo} alt="Image" width="50" height="50" />
      //           <div>Home</div>
      //           <div>About</div>
      //           <div>Services</div>
      //           <div>Case Study</div>
      //           <div>Contact</div>
      //         </div>
      //       </div>
      //   )
      // }
      
      
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

import app_logo from "../assets/images/app-logo.jpg";

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand><LinkContainer to="/"><img src={app_logo} width={50} height={50}/></LinkContainer></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <LinkContainer to="/login"><Nav.Link>Log In</Nav.Link></LinkContainer>
          <LinkContainer to="/signup"><Nav.Link>Sign Up</Nav.Link></LinkContainer>
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

            {/* <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}

          </Nav>
           
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavbarComponent