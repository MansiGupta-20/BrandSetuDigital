import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Search, Share2, BarChart3, Palette } from "lucide-react";
import "../../Style/Home.css";
import "../../App.css";

const services = [
  {
    title: "Website/App Design & Development",
    desc: "We craft high-performing, visually stunning websites that convert visitors into customers. Our focus is speed, UX, SEO readiness, and scalability.",
    points: [
      "Custom UI/UX Design",
      "Fast & SEO Optimized",
      "Mobile-first Approach",
      "Conversion Focused",
      "Graphics Design & E-commerce",
    ],
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "Automation & Maintenance",
    desc: "We provide reliable maintenance to keep your digital assets running smoothly. This includes updates, security monitoring, and performance optimization.",
    points: [
      "Workflow automation solutions",
      "API & tool integrations",
      "Performance optimization",
      "Ongoing technical support",
      "CRM setup & Business Automation",
    ],
    icon: Monitor,
    image:
      "https://radiantappliances.com/images/it_service/top%20automation.jpg",
  },
  {
    title: "Shoots & Video Editing",
    desc: "We provide reliable maintenance to keep your digital assets running smoothly. This includes updates, security monitoring, and performance optimization.",
    points: [
      "Reels, shorts & social videos",
      "Promotional & ad video editing",
      "Product & brand shoots",
      "High-quality visual assets",
      "Event & Product Shoot/Promotion",
    ],
    icon: Monitor,
    image:
      "https://vegas-magazine.com/wp-content/uploads/2020/01/header-landingpage-vegas-pro-video-photography-int-2.jpg",
  },
  {
    title: "WhatsApp/Instagram Marketing",
    desc: "Build a strong brand presence with engaging content, reels, campaigns, and data-driven growth strategies.",
    points: [
      "Instant Communication & High Engagement",
      "Cost-Effective & Interactive Features",
      "Customer Support",
      "Broadcast & Group",
    ],
    icon: Monitor,
    image:
      "https://img.freepik.com/premium-vector/whatsapp-marketing-megaphone-digital-marketing-social-media-concept_112255-1878.jpg",
  },
  {
    title: "SEO(Search Engine Optimization) & Local Visibility on Google",
    desc: "Rank higher on Google and dominate your local market with proven SEO strategies that bring consistent organic traffic.",
    points: [
      "Keyword Research",
      "On-Page SEO",
      "Google My Business",
      "Local Ranking Boost",
    ],
    icon: Search,
    image:
      "https://img.freepik.com/premium-vector/seo-search-engine-optimization-concept-vector-illustration_185038-486.jpg",
  },
  {
    title: "Social Media Marketing",
    desc: "Build a strong brand presence with engaging content, reels, campaigns, and data-driven growth strategies.",
    points: [
      "Content Strategy",
      "Reels & Creatives",
      "Audience Growth",
      "Brand Engagement",
    ],
    icon: Share2,
    image:
      "https://gosharpener.com/content/uploads/photos/2024/09/sngine_554b7fb4220580094ff96ca152962eb8.jpg",
  },
  {
    title: "Google & Meta Ads",
    desc: "ROI-focused paid campaigns that generate leads, sales, and measurable business growth.",
    points: [
      "Lead Generation",
      "Performance Ads",
      "A/B Testing",
      "High ROI Campaigns",
      "CGI Ads",
    ],
    icon: BarChart3,
    image:
      "https://img.freepik.com/free-vector/pop-ups-concept-illustrated_23-2149121840.jpg",
  },
  {
    title: "Branding & Graphic Design",
    desc: "Designs that communicate your brand story with clarity, creativity, and consistency.",
    points: [
      "Brand Identity",
      "Logo Design",
      "Social Creatives",
      "Marketing Collaterals",
    ],
    icon: Palette,
    image:
      "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2024/01/9_types_graphic_design.jpg",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);
  const previewRef = useRef(null);

  const handleServiceClick = (service) => {
    setActiveService(service);

    // ✅ FIXED SCROLL (OFFSET APPLIED)
    setTimeout(() => {
      if (previewRef.current) {
        const yOffset = -120; // heading safe space
        const y =
          previewRef.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <section className="services-section py-5 mt-5 pt-5">
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <div className="container services-inner mt-4">
        {/* HEADER */}
        <div className="text-center mb-5">
          <span className="services-badge">OUR SERVICES</span>
          <h1 className="display-3 fw-bold text-white mt-3">
            Powerful Digital Solutions
          </h1>
          <p className="text-light opacity-75 mt-2">
            Everything your brand needs to grow digitally
          </p>
        </div>

        <div className="row align-items-center">
          {/* LEFT — PREVIEW */}
          <div className="col-lg-6 mb-4 mb-lg-0" ref={previewRef}>
            <div className="service-preview glass-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -25 }}
                  transition={{ duration: 0.45 }}
                >
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="img-fluid preview-image mb-4"
                  />

                  <h2 className="fw-bold text-white">
                    {activeService.title}
                  </h2>

                  <p className="preview-desc mt-3">
                    {activeService.desc}
                  </p>

                  <ul className="service-points mt-4">
                    {activeService.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT — LIST */}
          <div className="col-lg-6">
            <div className="service-list">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`service-item ${
                      activeService.title === service.title ? "active" : ""
                    }`}
                    onClick={() => handleServiceClick(service)}
                  >
                    <div className="service-icon">
                      <Icon size={26} />
                    </div>
                    <div>
                      <h4 className="fw-bold mb-1">{service.title}</h4>
                      <p className="mb-0">
                        Strategy • Creativity • Execution
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
