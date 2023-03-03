import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

import registerSideImage from "../assets/images/registerSideImage.jpg";
import ToastComponent from "../components/ToastComponent";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [toast, setToast] = useState(false);
  const [toastText, setToastText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      setToastText("✅ Registered Successfully");
      setToast(true);
      console.log("Register Details:  ", {
        name,
        email,
        password,
        confirmPassword,
      });
    } else {
      setToastText("❌ Password Mismatch");
      setToast(true);
      console.log("Password Mismatch");
    }
  };

  return (
    <Container
      className="d-flex align-items-center"
      style={{ minHeight: "80vh", alignContent: "center" }}
    >
      {toast && (
        <ToastComponent
          toast={toast}
          setToast={setToast}
          toastText={toastText}
        />
      )}
      <Row gap={16} className="d-flex align-items-center py-auto">
        <Col md={6}>
          <img src={registerSideImage} alt="loginSideImage" width={"90%"} />
        </Col>
        <Col md={6}>
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
                <Button variant="danger" type="submit" size="lg">
                  Register
                </Button>
              </Col>
              <Col md={6}>
                <LinkContainer to="/login">
                  <div className="login-signup cursor-pointer mt-2">Already a member? Login here.</div>
                </LinkContainer>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
