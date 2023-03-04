import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from 'aos'
import 'aos/dist/aos.css'

const FooterComponent = () => {
  AOS.init();
  return (
    <>
    <hr />
    <Container className="text-center" data-aos="fade-up">
      <Row >
        <Col md={3} className="mt-4">
          <h5>BLIND MATCH</h5>
          <div>
            Here you can use rows and columns to organize your footer content.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
        </Col>
        <Col md={3} className="mt-4">
          <h5>Quick Links</h5>
          <div>
            <div>Partner Dashboard</div>
            <div>Play Store</div>
            <div>App Store</div>
          </div>
        </Col>
        <Col md={3} className="mt-4">
        <h5>Legal</h5>
        <div>
            <div>Terms</div>
            <div>Privacy Policy</div>
        </div>
        </Col>
        <Col md={3} className="mt-4">
        <h5>Social</h5>
        <div>
            <div><i class="ri-facebook-box-fill"></i> Facebook</div>
            <div><i class="ri-twitter-fill"></i> Twitter</div>
            <div><i class="ri-instagram-fill"></i> Instagram</div>
            <div><i class="ri-youtube-fill"></i> Youtube</div>
            <div> <i class="ri-linkedin-box-fill"></i> LinkedIn</div>
        </div>
        </Col>
      </Row>
      <hr />
      <Row className="text-center mb-3">
        <div> &copy; 2023 Copyright: Blindmatch.com</div>
      </Row>
    </Container>
    </>
  );
};

export default FooterComponent;
