import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar as BSNavbar, Nav, Button } from "react-bootstrap";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";
import "../App.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // to detect route changes

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Solutionscape", path: "/services" },
    { name: "Workverse", path: "/testimonials" },
    { name: "Enquiry", path: "/contact" },
    { name: "Our Story", path: "/about" },
    { name: "Future", path: "/career" },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/916232363639", "_blank");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top when opening menu
  };

  const handleLinkClick = (path) => {
    setIsOpen(false); // close mobile menu
    // Scroll to top only if it's a new path
    if (location.pathname !== path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="navbar-container">
        <motion.div
          className="navbar-wrapper"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <BSNavbar expand="lg" className="navbar-custom rounded-pill">
            {/* BRAND */}
            <motion.div
              className="brand-wrapper ms-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={logo}
                alt="Brandsetu Digital"
                className="logo-img"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "linear" }}
              />
              <div className="logo-text">
                <div className="logo-title">BRANDSETU</div>
                <div className="logo-subtitle">DIGITAL</div>
              </div>
            </motion.div>

            {/* DESKTOP NAV */}
            <Nav className="nav-links-wrapper d-none d-lg-flex align-items-center ms-auto me-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="nav-link-custom"
                  onClick={() => handleLinkClick(link.path)}
                >
                  {link.name}
                </Link>
              ))}

              <Button
                className="main-btn rounded-pill px-4 py-2 d-flex align-items-center gap-2"
                onClick={handleWhatsApp}
              >
                Let's Talk <ArrowRight size={16} />
              </Button>
            </Nav>

            {/* MOBILE TOGGLE */}
            <div className="d-lg-none ms-auto me-3">
              <Button
                variant="link"
                className="text-white p-0"
                onClick={toggleMenu}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </BSNavbar>
        </motion.div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu d-lg-none"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="mobile-menu-inner">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="mobile-link"
                  onClick={() => handleLinkClick(link.path)}
                >
                  {link.name}
                </Link>
              ))}

              <Button
                className="main-btn rounded-pill d-flex align-items-center gap-2"
                onClick={handleWhatsApp}
              >
                Let's Talk <ArrowRight size={18} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
