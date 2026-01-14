import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Style/Home.css";
import "../../App.css";

import Founder1Img from "../../assets/Founder1.png";
import Founder2Img from "../../assets/Founder2.png";
import MissionValues from "../Home/mission";

const FounderPage = () => {
  const founders = [
    {
      name: "Saumitra Bajpai",
      role: "Co-Founder & CEO",
      img: Founder1Img,
      bio: "Saumitra Bhajpai founded Brand Setu with a clear mission: to build brands that stand with authority, not uncertainty. He believes branding is more than visibility — it is identity, trust, and long-term influence. With strong strategic insight and fearless thinking, he leads Brand Setu as a force that transforms vision into brands people recognize, remember, and respect.",
    },
    {
      name: "Devesh Jain",
      role: "Co-Founder & COO",
      img: Founder2Img,
      bio: "Devesh Jain is the driving force behind execution and growth at Brand Setu. Known for his precision and results-focused mindset, he ensures that every idea turns into measurable impact. He believes powerful brands are built through strong systems, clarity, and consistency — making Brand Setu not just creative, but undeniably effective.",
    },
  ];

  return (
    <div className="founder-page">
      <MissionValues />
      {/* ===== HERO ===== */}
      <section className="founder-hero text-center d-flex align-items-center">
        <div className="container-fluid px-3 px-md-5">
          <h1 className="display-3 fw-bold text-dark mb-4">
            Meet Our <span className="text-danger">Founders</span>
          </h1>

          <p className="lead text-dark fw-bold mx-auto col-lg-8 mb-4">
            The visionaries behind BRANDSETU who made exploring the market
            seamless, authentic, and meaningful.
          </p>
        </div>
      </section>

      {/* ===== FOUNDERS ===== */}
      <section className="founder-bio py-5">
        <div className="container-fluid px-4 px-md-5">
          <Row className="g-5">
            {founders.map((founder, idx) => (
              <Col xl={6} key={idx}>
                <div className="founder-card position-relative overflow-hidden p-4 d-flex flex-column flex-md-row align-items-center gap-4">
                  <div className="bg-blob blob-1"></div>
                  <div className="bg-blob blob-2"></div>

                  <div className="position-relative z-2">
                    <img
                      src={founder.img}
                      alt={founder.name}
                      className="rounded-circle shadow founder-img"
                    />
                  </div>

                  <div className="position-relative z-2">
                    <h3 className="fw-bold text-white mb-1">{founder.name}</h3>
                    <p className="text-primary fw-semibold mb-2">
                      {founder.role}
                    </p>
                    <p className="text-light text-justify mb-3 lh-lg">{founder.bio}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </div>
  );
};

export default FounderPage;
