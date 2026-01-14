import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Logo from "../assets/Logo.png";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  // Generate floating particles
  const particles = Array.from({ length: 15 });

  return (
    <footer className="footer-modern position-relative overflow-hidden">
      {/* Floating Particles */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="footer-particle"
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, Math.random() + 0.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ pointerEvents: "none" }} // 🔑 ensures particles don't block clicks
        />
      ))}

      <div className="container py-3 position-relative" style={{ zIndex: 2 }}>
        <div className="row gy-4">
          {/* Brand */}
          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-start">
            <div className="footer-brand d-flex align-items-center gap-2 mb-3">
              <img src={Logo} alt="BrandSetu" height="70" />
              <div className="logo-text d-flex flex-column">
                <div className="logo-title">BRANDSETU</div>
                <div className="logo-subtitle">DIGITAL</div>
              </div>
            </div>
            <p className="text-light-50 glow-text">
              Driving digital growth with creative strategies, modern design, and
              measurable results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-title text-light mb-3">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Home
                </a>
              </li>
              <li>
                <a href="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Contact
                </a>
              </li>
              <li>
                <a href="/testimonials" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Our Story
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-title text-light mb-3">Services</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="/services#web" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Web Design & Development
                </a>
              </li>
              <li>
                <a href="/services#seo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  SEO & Marketing
                </a>
              </li>
              <li>
                <a href="/services#branding" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Brand Strategy
                </a>
              </li>
              <li>
                <a href="/services#social" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a href="/services#social" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Shoots & Editing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-title text-light mb-3">Contact Us</h6>
            <p className="text-light-50 mb-2">📧 Brandsetudigital@gmail.com</p>
            <p className="text-light-50 mb-3">📞 +91 6232363639</p>

            <div className="d-flex gap-3 mt-2">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com"
                className="social-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.instagram.com/brandsetudigital?igsh=NDMyNzc4aHkxOW02"
                className="social-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.facebook.com/share/1GsguCpjJq/?mibextid=wwXIfr"
                className="social-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </motion.a>
            </div>
          </div>
        </div>

        <hr className="footer-divider my-2" />

        {/* Bottom Bar */}
        <motion.div
          className="d-flex justify-content-between flex-column flex-md-row text-light-50 small"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span>
            © {new Date().getFullYear()} BrandSetu Digitals. All rights
            reserved.
          </span>
          <span>Designed & Developed by BrandSetu Team</span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
