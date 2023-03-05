import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import HomePageCard from "../components/HomePageCard";
import AOS from "aos";
import "aos/dist/aos.css";
import landingBackgroundImage from "../assets/images/banner.jpg";
import Safety from "../assets/landingPageImage/safety.png";
import Smart from "../assets/landingPageImage/smart.png";
import Need from "../assets/landingPageImage/need.png";
import Catify from "../assets/landingPageImage/catify.png";

const LandingPage = () => {
  const cardData = [
    {
      img: Need,
      title: "NEED FOR SPEED",
      text: "Say the magic word, and we offer speedy meet ups with people of your handpicked preferences!"
    },
    {
      img:  Safety,
      title: "SAFETY IS SEXY",
      text: "Location of meet up will be a public popular place. Your safety is our first priority."
    },
    {
      img: Catify,
      title: "CATFISH PROOFED",
      text: "Fakers can fake elsewhere. Our app provides you a space for real interactions with genuine people."
    },
    {
      img: Smart,
      title: "SMART SOCIALIZING",
      text: "Hit the 'Nearby' option to hang out with somebody at any time of the day! You are never alone in this world."
    },
  ];

  AOS.init();
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "auto",
        backgroundColor: "white",
      }}
    >
      <Container
        fluid={true}
        className="p-0"
        style={{
          height: "400px",
          background: `url(${landingBackgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        data-aos="fade-down"
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            position: "relative",
            zIndex: "1",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Container fluid={true} className="m-3 m-md-5 text-center p-5">
            <h1 className="mt-4 text-white">
              Meet someone new without any preconceptions
            </h1>
            <p className="px-5 my-3 mx-5 text-white d-none d-sm-block">
              Let your heart lead the way with our blind dating platform <br />
            </p>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="btn btn-outline-light mt-4 mt-sm-1"
            >
              Let's Explore
            </button>
          </Container>
        </div>
      </Container>

      <h2 className="text-center my-4">Our Features</h2>

      <Container className="text-center">
        <Row>
          {cardData.map((ele, idx) => {
            return <HomePageCard key={idx} ele={ele} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
