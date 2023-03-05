import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { register } from "../apicalls/users";
import { message } from "antd";
import registerSideImage from "../assets/images/registerSideImage.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import ModalComponent from "../components/ModalComponent";

const SignUpPage = (props) => {
  AOS.init();
  const [modalShow, setModalShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneNo] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userId, setUserId] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (password === confirmPassword) {
        props.setProgress(30);
        const response = await register({
          name,
          email,
          password,
          phoneno,
        });
        props.setProgress(100);
        if (response.success) {
          message.success(response.message);
          console.log(response.data);
          setUserId(response.data);
          console.log(userId);
        } else {
          message.error(response.message);
        }
        console.log(modalShow);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <Container
      className="d-flex align-items-center"
      style={{ minHeight: "80vh", alignContent: "center" }}
    >
      <Row gap={16} className="d-flex align-items-center py-auto">
        <Col md={6} data-aos="fade-right">
          <img src={registerSideImage} alt="loginSideImage" width={"90%"} />
        </Col>
        <Col md={6} data-aos="fade-left">
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                required={true}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter phone no"
                value={phoneno}
                required={true}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                required={true}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                required={true}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Button
                  variant="danger"
                  type="submit"
                  size="lg"
                  onClick={() => {
                    setModalShow(true);
                    submitHandler();
                  }}
                >
                  Register
                </Button>
              </Col>
              <Col md={6}>
                <LinkContainer to="/login">
                  <div className="login-signup cursor-pointer mt-2">
                    Already a member? Login here.
                  </div>
                </LinkContainer>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      <ModalComponent
        show={modalShow}
        onHide={() => setModalShow(false)}
        userId={userId}
        setUserId={setUserId}
      />
    </Container>
  );
};

export default SignUpPage;
