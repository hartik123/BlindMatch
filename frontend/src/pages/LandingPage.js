import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import app_logo from "../assets/images/app-logo.jpg";
import HomePageCard from "../components/HomePageCard";
import AOS from "aos";
import "aos/dist/aos.css";
import landingBackgroundImage from "../assets/images/landingBackground.gif";
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
        style={{
          height: "400px",
          display: "flex",
          justifyContent: "center",
          backgroundImage: `url(${landingBackgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        data-aos="fade-down"
      >
        <Container fluid={true} className="mt-5 text-center">
          <h2 className="mt-4">
            We are glad that we are supporting the community...
          </h2>
          <p className="px-5 mx-5">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati <br />
          </p>
          <Button
            variant="primary"
            onClick={() => navigate("/login")}
            className="mb-5"
          >
            Log In Now
          </Button>
        </Container>
      </Container>

      <h2 className="text-center my-4">Our features</h2>

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
