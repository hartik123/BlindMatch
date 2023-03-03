import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import app_logo from "../assets/images/app-logo.jpg";
import HomePageCard from "../components/HomePageCard";
import landingBackground from "../assets/images/landingBackground.jpg";
import AOS from 'aos'
import 'aos/dist/aos.css'

const LandingPage = () => {
  AOS.init();
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "auto",
        backgroundColor: "white",
      }}
    >
      <Container fluid={true}
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundImage: "url(/landingBackground.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }} data-aos="fade-down"
      >
        <Container fluid={true} className="mt-5 text-center">
          <h2 className="mt-4">We are glad that we are supporting the community...</h2>
          <p className="px-5 mx-5">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati <br />
          </p>
          <Button variant="primary" onClick={() => navigate("/login")} className="mb-5">
            Log In Now
          </Button>
        </Container>
      </Container>

      <h2 className="text-center my-4">Our features</h2>

      <Container className="text-center">
        <Row>
          {[1, 2, 3].map((ele, idx) => {
            return <HomePageCard key={idx} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
