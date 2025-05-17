import React from "react";
import { Link } from "react-router-dom"; // Assuming you use React Router for navigation
import "./Footer.css";

// Placeholder for social media icons - consider using react-icons
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const companyLogoPlaceholder =
  "https://via.placeholder.com/150x50.png?text=Varalakshmi+Logo"; // Replace with your logo path

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services-by-branch" }, // Or your main services page
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  const servicesOverview = [
    "Home Nursing Services",
    "Patient Care Taker",
    "Senior Citizen Care",
    "Bedridden Patient Care",
    "Post-Operative Care",
  ];

  const contactInfo = {
    address:
      "D.No: 23-2-35, Ground Floor, Bhagat Singh Road, Near Food Junction, Satyanarayanapuram, Vijayawada - 520011, AP",
    phone1: "7382683337",
    phone2: "8374656997",
    email: "info@varalakshmiservices.com", // Replace with actual
  };

  const socialMediaLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com/yourpage",
      icon: "FB" /* <FaFacebookF /> */,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourprofile",
      icon: "TW" /* <FaTwitter /> */,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourprofile",
      icon: "IG" /* <FaInstagram /> */,
    },
    // { name: 'LinkedIn', url: 'https://linkedin.com/company/yourcompany', icon: <FaLinkedinIn /> },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-main container">
        <div className="footer-column footer-about">
          <img
            src={companyLogoPlaceholder}
            alt="Varalakshmi Services Logo"
            className="footer-logo"
          />
          <p className="footer-about-text">
            Providing compassionate and professional home nursing and caretaker
            services across Andhra Pradesh and Hyderabad. Your health and
            comfort are our priority.
          </p>
          <div className="footer-social-media">
            {socialMediaLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="social-icon"
              >
                {social.icon} {/* Replace with actual icon component */}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-column footer-links">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column footer-services-overview">
          <h4>Our Key Services</h4>
          <ul>
            {servicesOverview.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h4>Contact Us</h4>
          <address>
            {contactInfo.address.split(",").map((part, index) => (
              <React.Fragment key={index}>
                {part.trim()}
                {index < contactInfo.address.split(",").length - 1 && <br />}
              </React.Fragment>
            ))}
          </address>
          <p>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${contactInfo.phone1}`}>{contactInfo.phone1}</a>
            {contactInfo.phone2 && (
              <>
                , <a href={`tel:${contactInfo.phone2}`}>{contactInfo.phone2}</a>
              </>
            )}
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>
            &copy; {currentYear} Varalakshmi Old Age Home and Homecare Services.
            All Rights Reserved.
          </p>
          <p className="footer-legal-links">
            {/* <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-service">Terms of Service</Link> */}
            {/* Placeholder for legal links */}
          </p>
        </div>
      </div>
    </footer>
  );
};
