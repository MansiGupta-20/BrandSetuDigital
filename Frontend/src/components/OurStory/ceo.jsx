import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsHeart, BsLightbulb, BsPeople } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";

import customBoyImage from "../../assets/Founder1.png";
import customGirlImage from "../../assets/Founder2.png";

const VisionariesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="container-fluid page-background position-relative overflow-hidden py-5">
      {/* Soft blobs – already in your theme */}
      <div className="blobss blobss1"></div>
      <div className="blobss blobss4"></div>
      <div className="blobss blobss5"></div>

      <Container className="position-relative">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2
            className="display-4 fw-bold gradient-text mb-3"
            data-aos="fade-down"
          >
            Meet the Visionaries
          </h2>
          <p
            className="lead text-muted fw-semibold mx-auto"
            style={{ maxWidth: "720px" }}
            data-aos="fade-up"
          >
            Two passionate friends from Sage University who believed that travel
            should feel personal, safe, and deeply connected to local culture.
          </p>
        </div>

        {/* Founder Cards */}
        <Row className="justify-content-center g-4 mb-5">
          {/* Founder 1 */}
          <Col md={6} lg={5} data-aos="fade-right">
            <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden visionary-card">
              <div className="visionary-image-container">
                <img
                  src={customBoyImage}
                  alt="Vaibhav Singh Baghel"
                  className="img-fluid w-100"
                />
              </div>

              <Card.Body className="p-4">
                <h4 className="fw-bold mb-1">SOUMITRA BAJPAI</h4>
                <p className="text-warning fw-semibold mb-3">
                  Co-Founder & Visionary
                </p>
                <p className="text-white mb-0">
                  At BrandSetu Digital, I believe great brands are built where
                  strategy meets creativity. Every idea we craft is rooted in
                  purpose, clarity, and measurable impact. We don’t follow
                  trends — we shape digital identities that last. Innovation is
                  our mindset, excellence is our standard. Our goal is simple:
                  turn brands into experiences people remember.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Founder 2 */}
          <Col md={6} lg={5} data-aos="fade-left">
            <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden visionary-card">
              <div className="visionary-image-container">
                <img
                  src={customGirlImage}
                  alt="Mansi Gupta"
                  className="img-fluid w-100"
                />
              </div>

              <Card.Body className="p-4">
                <h4 className="fw-bold mb-1">DEVESH JAIN</h4>
                <p className="text-warning fw-semibold mb-3">
                  Co-Founder & Strategist
                </p>
                <p className="text-white mb-0">
                  BrandSetu Digital was created to help businesses grow with
                  meaning, not noise. Technology, design, and data come together
                  in everything we deliver. We focus on solutions that drive
                  trust, engagement, and real results. Every project is a
                  partnership, not just a service. Because true growth happens
                  when vision meets execution.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Core Values */}
        <Row className="text-center g-4 mt-4">
          <Col md={4} data-aos="fade-up">
            <div className="icon-circle bg-success bg-opacity-75 mb-3 mx-auto">
              <BsHeart size={26} className="text-white" />
            </div>
            <h5 className="fw-bold">Friendship First</h5>
            <p className="text-dark small px-3">
              Built on trust, respect, and years of friendship that transformed
              into a shared mission.
            </p>
          </Col>

          <Col md={4} data-aos="fade-up" data-aos-delay="150">
            <div className="icon-circle bg-dark bg-opacity-75 mb-3 mx-auto">
              <BsLightbulb size={26} className="text-white" />
            </div>
            <h5 className="fw-bold">Purpose-Driven Innovation</h5>
            <p className="text-dark small px-3">
              Every feature is designed to solve real Businesses problems with
              simplicity and clarity.
            </p>
          </Col>

          <Col md={4} data-aos="fade-up" data-aos-delay="300">
            <div className="icon-circle bg-danger bg-opacity-75 mb-3 mx-auto">
              <BsPeople size={26} className="text-white" />
            </div>
            <h5 className="fw-bold">People-Centric Thinking</h5>
            <p className="text-dark small px-3">
              designing strategies and digital experiences that prioritize real
              human needs.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VisionariesPage;
