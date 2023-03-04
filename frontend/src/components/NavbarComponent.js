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

import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import app_logo from "../assets/images/app-logo.jpg";
import { userInfo } from "../apicalls/users";
import { useDispatch, useSelector } from 'react-redux'
import { SetInitialUser } from "../redux/usersSlice";

function NavbarComponent() {
  // const [user, setUser] = useState();
  // const [toastText, setToastText] = useState('');
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector(state=>state.users);
  useEffect(() => {
  }, [user]);

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
          <LinkContainer to="/">
            <Nav.Link to="/" active={pathname === "/" ? true : false}><i class="ri-message-3-line "></i> BLIND MATCH </Nav.Link>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/home">
              <Nav.Link to="/home" active={pathname === "/home" ? true : false}>
                Home
              </Nav.Link>
            </LinkContainer>
            {user ? (
              <Nav.Link><i className="ri-user-line"></i> {user.name}</Nav.Link>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link
                  to="/login"
                  active={pathname === "/login" ? true : false}
                >
                  Log In
                </Nav.Link>
              </LinkContainer>
            )}
              {
                user &&
                <Nav.Link onClick={()=>{
                  localStorage.removeItem("token")
                  dispatch(SetInitialUser())
                  navigate('/')
                }} className="btn btn-danger text-white mx-3">
                  Log out
                </Nav.Link>
                }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
