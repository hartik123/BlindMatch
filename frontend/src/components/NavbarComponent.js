import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import app_logo from "../assets/images/app-logo.png";
import { useDispatch, useSelector } from 'react-redux'
import { SetAllChatsInitial, SetAllUsersInitial, SetInitialUser, SetSelectedChatInitial } from "../redux/usersSlice";

function NavbarComponent() {

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  useEffect(() => {}, [user]);

  return (
    <Navbar collapseOnSelect expand="lg"  style={{
      boxShadow: "0 2px 4px 0 rgba(0,0,0,.4)",
    }}>
      <Container>
        <Navbar.Brand>
          <LinkContainer to="/">
            <Nav.Link to="/" active={pathname === "/" ? true : false}>
              <span><img src={app_logo} width={50} height={50} className="mx-2 d-inline" alt="App_Logo"/>BlindMatch</span>
            </Nav.Link>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="ms-auto"
          >
            <LinkContainer to="/home">
              <Nav.Link to="/home" active={pathname === "/home" ? true : false}>
                Home
              </Nav.Link>
            </LinkContainer>
            {user ? (
              <Nav.Link>
                <i className="ri-user-line"></i> {user.name}
              </Nav.Link>
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
                  dispatch(SetAllUsersInitial())
                  dispatch(SetAllChatsInitial())
                  dispatch(SetSelectedChatInitial())
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
