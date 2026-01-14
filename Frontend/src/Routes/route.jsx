import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Hero } from "../components/Home/Hero";
import Services from "../components/Servive/servicepage"; 
import ContactPage from "../components/contact/contact";
import OurStory from "../components/OurStory/storymain";
import Portfolio from "../components/Testimonials/whowe";
import Career from "../components/Career/openings";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<OurStory />} />
        <Route path="/testimonials" element={<Portfolio />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
