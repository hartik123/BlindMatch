import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <>
    <hr />
    <Container className="text-center">
      <Row >
        <Col md={3} className="mt-4">
          <h5>WEBSITE</h5>
          <div>
            Here you can use rows and columns to organize your footer content.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
        </Col>
        <Col md={3} className="mt-4">
          <h5>PRODUCTS</h5>
          <div>
            <div>Angular</div>
            <div>Vuew</div>
            <div>React JS</div>
            <div>Laravel</div>
          </div>
        </Col>
        <Col md={3} className="mt-4">
        <h5>USEFUL LINKS</h5>
        <div>
            <div>Pricing</div>
            <div>Settings</div>
            <div>Order</div>
            <div>Help</div>
        </div>
        </Col>
        <Col md={3} className="mt-4">
        <h5>CONTACT</h5>
        <div>
            <div><i class="ri-home-8-fill"></i> New York, NY 10012, US</div>
            <div><i class="ri-mail-fill"></i> info@example.com</div>
            <div><i class="ri-phone-fill"></i>+ 01 234 567 88</div>
            <div><i class="ri-printer-fill"></i>+ 01 234 567 89</div>
        </div>
        </Col>
      </Row>
      <hr />
      <Row className="text-center mb-3">
        <div> &copy; 2023 Copyright: Website.com</div>
      </Row>
    </Container>
    </>
  );
};

export default FooterComponent;
