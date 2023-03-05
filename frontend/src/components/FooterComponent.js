import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import app_logo from "../assets/images/app-logo.png";
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
          <div className="d-flex justify-content-center align-items-center mb-2">
          <img src={app_logo} width="40px" height="40px"  alt="footerImg" />
          <h5 className="text-dark"> &nbsp; BlindMatch </h5>
          </div>
          
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore magnam commodi animi et quasi earum iure ducimus, id dignissimos obcaecati nisi veniam atque natus repellendus cum a possimus nam unde accusantium mollitia.
          </div>
        </Col>
        <Col md={3} className="mt-4">
          <h5 className="mb-2">Quick Links</h5>
          <div>
            <div>Partner Dashboard</div>
            <div>Play Store</div>
            <div>App Store</div>
          </div>
        </Col>
        <Col md={3} className="mt-4">
        <h5 className="mb-2">Legal</h5>
        <div>
            <div>Terms</div>
            <div>Privacy Policy</div>
        </div>
        </Col>
        <Col md={3} className="mt-4">
        <h5 className="mb-2">Social</h5>
        <div>
            <div><i className="ri-facebook-box-fill"></i> Facebook</div>
            <div><i className="ri-twitter-fill"></i> Twitter</div>
            <div><i className="ri-instagram-fill"></i> Instagram</div>
            <div><i className="ri-youtube-fill"></i> Youtube</div>
            <div> <i className="ri-linkedin-box-fill"></i> LinkedIn</div>
        </div>
        </Col>
      </Row>
      <hr />
      <Row className="text-center mb-3">
        <div> &copy; 2023 Copyright: BlindMatch.com</div>
      </Row>
    </Container>
    </>
  );
};

export default FooterComponent;
