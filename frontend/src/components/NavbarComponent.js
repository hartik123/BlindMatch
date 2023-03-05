import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import app_logo from "../assets/images/app-logo.png";
import { useDispatch, useSelector } from 'react-redux'
import { SetAllChatsInitial, SetAllUsersInitial, SetInitialUser, SetSelectedChatInitial } from "../redux/usersSlice";
import ProfileComponent from "./ProfileComponent";


function NavbarComponent(props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector(state=>state.users);
  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
  }, [user]);

  const logoutHandler = async (e) => {
    props.setProgress(30);
    localStorage.removeItem("token");
    dispatch(SetInitialUser());
    dispatch(SetAllUsersInitial());
    dispatch(SetAllChatsInitial());
    dispatch(SetSelectedChatInitial());
    props.setProgress(100);
    navigate("/");
    
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.4)",
      }}
    >
      <Container>
        <Navbar.Brand>
          <LinkContainer to="/">
            <Nav.Link to="/" active={pathname === "/" ? true : false}>
              <span>
                <img
                  src={app_logo}
                  width={50}
                  height={50}
                  className="mx-2 d-inline"
                  alt="App_Logo"
                />
                BlindMatch
              </span>
            </Nav.Link>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/home">
              <Nav.Link
                to="/home"
                active={pathname === "/home" ? true : false}
              >
                Home
              </Nav.Link>
            </LinkContainer>
            {user ? (
              <Nav.Link>
                <strong>
                  {" "}
                  Welcome{" "}
                  {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
                </strong>
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
            {user && (
              <>
                <div class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle pe-md-3 pe-2"
                    href="#"
                    id="nav-dropdown-btn"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fas fa-user"></i>
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-sm-end"
                    aria-labelledby="nav-dropdown-btn"
                  >
                    <li>
                      <a class="dropdown-item" onClick={()=>setShowProfileModal(true)}>
                        <i class="fas fa-user-circle"></i> View profile
                      </a>
                    </li>
                    <hr class="dropdown-divider" />
                    <li>
                      <a class="dropdown-item" onClick={logoutHandler}>
                        <i class="fas fa-sign-out-alt"></i> Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      {showProfileModal && <ProfileComponent showProfileModal={showProfileModal} setShowProfileModal={setShowProfileModal}/>}
    </Navbar>
  );
}

export default NavbarComponent;
