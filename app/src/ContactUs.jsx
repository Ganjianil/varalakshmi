import React from "react";
import { Helmet } from "react-helmet-async";
import "./ContactUs.css";

// You can use react-icons for better icons, e.g., npm install react-icons
// import { FaPhone, FaMapMarkerAlt, FaRegIdCard, FaEnvelope, FaUser } from 'react-icons/fa';

export const ContactUs = () => {
  const contactDetails = {
    name: "Dr. L. Varalakshmi",
    phone1: "7382683337",
    phone2: "8374656997",
    regNo: "AP-20-16-001-02907431",
    address: {
      doorNo: "23-2-35, Ground Floor",
      street: "Bhagat Singh Road",
      landmark: "Near Food Junction",
      area: "Satyanarayanapuram",
      city: "Vijayawada",
      pincode: "520011",
      state: "Andhra Pradesh",
    },
    email: "info@varalakshmiservices.com", // Example email
  };

  const fullAddress = `${contactDetails.address.doorNo}, ${contactDetails.address.street}, ${contactDetails.address.landmark}, ${contactDetails.address.area}, ${contactDetails.address.city} - ${contactDetails.address.pincode}, ${contactDetails.address.state}.`;

  // Placeholder for Google Maps embed URL
  // To get this: Go to Google Maps, find the address, click Share -> Embed a map -> Copy HTML, extract the src URL.
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.79123456789!2d80.64600000000000!3d16.51000000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzM2LjAiTiA4MMKwMzgnNDUuNiJF!5e0!3m2!1sen!2sin!4vYOUR_EMBED_API_KEY_PART`; // Replace with your actual embed URL

  return (
    <div className="contact-us-page">
      <Helmet>
        <title>Contact Us - Varalakshmi Home Nursing Services</title>
        <meta
          name="description"
          content={`Contact Dr. L. Varalakshmi for home nursing services in Vijayawada. Phone: ${contactDetails.phone1}, ${contactDetails.phone2}. Address: ${fullAddress}`}
        />
        <meta
          property="og:title"
          content="Contact Us - Varalakshmi Home Nursing Services"
        />
        <meta
          property="og:description"
          content={`Get in touch with Varalakshmi Home Nursing Services. Contact Dr. L. Varalakshmi at ${contactDetails.address.city}.`}
        />
        {/* <meta property="og:image" content="your-contact-page-image.jpg" /> */}
        <meta
          property="og:url"
          content="https://www.yourwebsite.com/contact-us"
        />{" "}
        {/* Replace with actual URL */}
      </Helmet>

      <section className="contact-hero section-padding-small">
        <div className="container text-center">
          <h1>Get in Touch</h1>
          <p className="hero-subtitle">
            We're here to help and answer any questions you might have.
          </p>
        </div>
      </section>

      <section className="contact-content-section section-padding">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Information Column */}
            <div className="contact-info-column">
              <h2>Contact Information</h2>
              <div className="info-item">
                {/* <FaUser className="info-icon" /> */}
                <span className="info-icon-placeholder">👤</span>
                <div>
                  <strong>Contact Person:</strong>
                  <p>{contactDetails.name}</p>
                </div>
              </div>
              <div className="info-item">
                {/* <FaPhone className="info-icon" /> */}
                <span className="info-icon-placeholder">📞</span>
                <div>
                  <strong>Phone Numbers:</strong>
                  <p>
                    <a href={`tel:${contactDetails.phone1}`}>
                      {contactDetails.phone1}
                    </a>
                  </p>
                  <p>
                    <a href={`tel:${contactDetails.phone2}`}>
                      {contactDetails.phone2}
                    </a>
                  </p>
                </div>
              </div>
              <div className="info-item">
                {/* <FaEnvelope className="info-icon" /> */}
                <span className="info-icon-placeholder">✉️</span>
                <div>
                  <strong>Email:</strong>
                  <p>
                    <a href={`mailto:${contactDetails.email}`}>
                      {contactDetails.email}
                    </a>
                  </p>
                </div>
              </div>
              <div className="info-item">
                {/* <FaRegIdCard className="info-icon" /> */}
                <span className="info-icon-placeholder">💳</span>
                <div>
                  <strong>Registration No:</strong>
                  <p>{contactDetails.regNo}</p>
                </div>
              </div>
              <div className="info-item address-item">
                {/* <FaMapMarkerAlt className="info-icon" /> */}
                <span className="info-icon-placeholder">📍</span>
                <div>
                  <strong>Our Address:</strong>
                  <p>{contactDetails.address.doorNo},</p>
                  <p>{contactDetails.address.street},</p>
                  <p>{contactDetails.address.landmark},</p>
                  <p>{contactDetails.address.area},</p>
                  <p>
                    {contactDetails.address.city} -{" "}
                    {contactDetails.address.pincode},
                  </p>
                  <p>{contactDetails.address.state}</p>
                </div>
              </div>
            </div>

            {/* Contact Form Column (Placeholder) */}
            <div className="contact-form-column">
              <h2>Send Us a Message</h2>
              <form className="contact-form-placeholder">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g., John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="e.g., john.doe@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Your Phone (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="e.g., 9876543210"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="submit-button-placeholder"
                  disabled
                >
                  Send Message (Form Inactive)
                </button>
                <p className="form-note">
                  Note: This form is a placeholder. For inquiries, please call
                  us directly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="container-fluid no-padding">
          <h2 className="section-title map-title">Find Us On The Map</h2>
          <div className="map-placeholder">
            {/* Replace with your actual Google Maps iframe or a map component */}
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location on Google Maps"
            ></iframe>
            {/* <p>Google Map will be embedded here.</p>
            <p>Address: {fullAddress}</p> */}
          </div>
        </div>
      </section>
    </div>
  );
};
