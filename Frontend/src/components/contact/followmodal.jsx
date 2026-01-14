import React from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaTiktok,
} from "react-icons/fa";
import "../../Style/Contact.css";

const socialMedia = [
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=61584792899210",
    color: "#1877F2",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/brandsetudigital?igsh=NDMyNzc4aHkxOW02",
    color: "#d7183b",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    link: "https://linkedin.com",
    color: "#0A66C2",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    link: "https://twitter.com",
    color: "#1DA1F2",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    link: "https://youtube.com",
    color: "#FF0000",
  },
  {
    name: "TikTok",
    icon: <FaTiktok />,
    link: "https://tiktok.com",
    color: "#69C9D0",
  },
];

export default function FollowModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered size="md">
      <Modal.Header closeButton className="border-0 bg-dark">
        <Modal.Title className="fw-bold display-4 text-warning">Follow Us:</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark">
        <h5 className="text-center text-warning mb-4">
          Connect with us on social media and stay updated!
        </h5>

        <Row className="social-grid g-3 justify-content-center">
          {socialMedia.map((social) => (
            <Col xs={4} sm={3} key={social.name} className="text-center">
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{ "--social-color": social.color }}
              >
                {social.icon}
              </a>
              <div className="mt-1 small">{social.name}</div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <Button className= "main-btn rounded-pill d-flex align-items-center" onClick={onHide}>
            Close
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
