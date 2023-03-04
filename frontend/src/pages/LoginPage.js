import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { login } from "../apicalls/users";
import { message } from "antd";
import loginVector from "../assets/images/loginVector.jpg";
import loginBackgroundImage from "../assets/images/loginBackground.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const LoginPage = (props) => {
  AOS.init();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      props.setProgress(30)
      const response = await login({ email, password });
      props.setProgress(100)
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);
        window.location.href = "/home";
      } else {        
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <Container
      className="d-flex align-items-center m-0 p-0"
      id="loginBackground"
      style={{
        minHeight: "80vh",
        minWidth: "100%",
        position: "relative",
        alignContent: "center",
        background: `url(${loginBackgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "1",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="card my-5 mx-2"
          style={{ width: "600px", maxWidth: "80vw", maxHeight:"100vh" }}
        >
          <div className="card-body text-center my-4 mt-0 mt-sm-4">
            <div className="row">
              <div className="col-12 col-sm-5 d-block px-3">
                <img className="sideVector" src={loginVector} alt="" width="210px" height="240px" />
              </div>
              <div
                className="col-12 col-sm-7"
                style={{ borderLeft: "1px solid lightgrey", height: "120%" }}
              >
                <h5 className="mb-4">
                  <b>Login</b>
                </h5>
                <Form onSubmit={submitHandler}>
                  <div className="mb-3 text-start">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                      value={email}
                      required={true}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      required={true}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-dark shadow-2 mt-3 mb-4 w-75"
                  >
                    Submit
                  </button>
                </Form>
                <p className="mb-2 text-muted">
                  Forgot password? <a href="/forgotPassword"> Reset</a>
                </p>
                <p className="mb-0 text-muted">
                  Don't have account yet? <a href="/signUp">Signup</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
