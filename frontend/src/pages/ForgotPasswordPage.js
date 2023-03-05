import React, { useState, useRef } from "react";
import { Container, Form } from "react-bootstrap";
import { forgotPassword, checkOtp, resetPassword } from "../apicalls/users";
import { message } from "antd";
import forgotPassVector from "../assets/images/forgotPassVector.png";
import loginBackgroundImage from "../assets/images/loginBackground.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const ForgotPasswordPage = (props) => {
  AOS.init();
  const [phoneno, setPhoneno] = useState("");
  const [otp, setOtp] = useState("");
  const [newPass1, setNewPass1] = useState("");
  const [newPass2, setNewPass2] = useState("");
  const mobileRef = useRef();
  const otpRef = useRef();
  const passRef = useRef();

  const mobileHandler = async (e) => {
    try {
      e.preventDefault();
      props.setProgress(30);
      const response = await forgotPassword({ phoneno });
      props.setProgress(100);
      if (response.success) {
        message.success(response.message);
        mobileRef.current.classList.add("d-none");
        otpRef.current.classList.remove("d-none");
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const otpHandler = async (e) => {
    try {
      e.preventDefault();
      props.setProgress(30);
      const response = await checkOtp({ otp, phoneno });
      props.setProgress(100);
      if (response.success) {
        message.success(response.message);
        otpRef.current.classList.add("d-none");
        passRef.current.classList.remove("d-none");
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const passHandler = async (e) => {
    try {
      e.preventDefault();
      props.setProgress(30);
      const response = await resetPassword({ phoneno, newPass1 });
      props.setProgress(100);
      if (response.success) {
        message.success(response.message);
        window.location.href = "/login";
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <Container
    id="forgotPassBackground"
      className="d-flex align-items-center m-0 p-0"
      style={{
        minHeight: "70vh",
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
        <div className="card my-5 mx-2" id="forgotPassCard" style={{ height: "300px" }}>
          <div className="card-body text-center my-0 my-sm-4">
            <div className="row my-2">
              <div className="col-12 col-sm-6 d-block px-3">
                <img
                  class="sideVector"
                  src={forgotPassVector}
                  alt=""
                  width="200px"
                  height="200px"
                />
              </div>

              <div
                id="mobileCol"
                className="col-12 col-sm-6"
                style={{ borderLeft: "1px solid lightgrey", height: "120%" }}
                ref={mobileRef}
              >
                <h5 className="mb-4">
                  <b>Forgot Password</b>
                </h5>
                <Form onSubmit={mobileHandler}>
                  <div className="mb-3 text-start">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Mobile No."
                      value={phoneno}
                      required={true}
                      onChange={(e) => setPhoneno(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-dark shadow-2 mt-3 mb-4 w-75"
                  >
                    Get OTP
                  </button>
                </Form>
              </div>

              <div
                id="otpCol"
                className="col-12 col-sm-7 d-none"
                style={{ borderLeft: "1px solid lightgrey", height: "120%" }}
                ref={otpRef}
              >
                <h5 className="mb-4">
                  <b>OTP Verification</b>
                </h5>
                <Form onSubmit={otpHandler}>
                  <div className="mb-3 text-start">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter 4 digit OTP"
                      maxLength={4}
                      value={otp}
                      required={true}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-dark shadow-2 mt-3 mb-4 w-75"
                  >
                    Submit
                  </button>
                </Form>
              </div>

              <div
                id="passCol"
                className="col-12 col-sm-7 d-none"
                style={{ borderLeft: "1px solid lightgrey", height: "120%" }}
                ref={passRef}
              >
                <h5 className="mb-4">
                  <b>Reset Password</b>
                </h5>
                <Form onSubmit={passHandler}>
                  <div className="mb-3 text-start">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter New Password"
                      value={newPass1}
                      required={true}
                      onChange={(e) => setNewPass1(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Re-enter New Password"
                      value={newPass2}
                      required={true}
                      onChange={(e) => setNewPass2(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-dark shadow-2 mt-3 mb-4 w-75"
                  >
                    Submit
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ForgotPasswordPage;
