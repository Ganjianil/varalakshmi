import React from "react";
import "./About.css";
import homenursingImg from "/homenursing.jpg";
import bedriddenImg from "/bedridden.jpeg";
import postOperativeImg from "/post.jpg";
import seniorcitizenImg from "/seniorcitizen.webp";
import patientcare from "/patientcare.webp"


// Placeholder image URLs - replace with your actual image paths
const placeholderBanner =
  "https://via.placeholder.com/1200x400.png?text=Compassionate+Care+Banner";
const placeholderBranchMap =
  "https://via.placeholder.com/600x400.png?text=Our+Reach+in+AP";
const serviceImage1 =
  "https://via.placeholder.com/400x300.png?text=Home+Nursing";
const serviceImage2 =
  "https://via.placeholder.com/400x300.png?text=Skilled+Nursing";
const serviceImage3 =
  "https://via.placeholder.com/400x300.png?text=Patient+Care";
const serviceImage4 =
  "https://via.placeholder.com/400x300.png?text=Senior+Care";

export const AboutUs = () => {
  const branches = [
    "Vijayawada",
    "Nellore",
    "Guntur",
    "Krishna District",
    "Ongole",
    "Hyderabad",
    // 'and other key locations across the region.'
  ];

  const services = [
    {
      id: 1,
      name: "Home Nursing Services",
      description:
        "Professional, personalized medical care delivered by qualified nurses in the comfort of your home.",
      image: patientcare,
      alt: "Nurse providing home nursing care",
    },
    {
      id: 2,
      name: "Skilled Nursing Services",
      description:
        "Comprehensive nursing support for various medical conditions, post-operative recovery, and chronic illness management.",
      image: seniorcitizenImg,
      alt: "Skilled nurse with medical equipment",
    },
    {
      id: 3,
      name: "Patient Care Taker Service",
      description:
        "Dedicated and compassionate assistance with daily activities, personal hygiene, mobility, and companionship for patients.",
      image: bedriddenImg,
      alt: "Caretaker assisting a patient",
    },
    {
      id: 4,
      name: "Senior Citizen Care Taker Service",
      description:
        "Specialized care focusing on the unique needs of seniors, promoting their well-being, safety, and independence at home.",
      image: postOperativeImg,
      alt: "Caretaker with a senior citizen",
    },
  ];

  return (
    <div className="about-us-page">
      <Helmet>
        <title>About Us - Varalakshmi Home Nursing Services</title>
        <meta
          name="description"
          content="Learn about Varalakshmi Home Nursing Services, our commitment to providing quality home nursing and caretaker services across Andhra Pradesh and Hyderabad."
        />
        <meta
          property="og:title"
          content="About Us - Varalakshmi Home Nursing Services"
        />
        <meta
          property="og:description"
          content="Dedicated home nursing and caretaker services in Andhra Pradesh and Hyderabad. Discover our branches and comprehensive care options."
        />
        <meta property="og:image" content={placeholderBanner} />
        <meta
          property="og:url"
          content="https://www.yourwebsite.com/about-us"
        />{" "}
        {/* Replace with actual URL */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us - Varalakshmi Home Nursing Services"
        />
        <meta
          name="twitter:description"
          content="Quality home nursing and caretaker services across Andhra Pradesh and Hyderabad."
        />
        <meta name="twitter:image" content={placeholderBanner} />
      </Helmet>

      <section
        className="about-hero"
        style={{ backgroundImage: `url(${placeholderBanner})` }}
      >
        <div className="hero-overlay">
          <h1>About Varalakshmi Home Nursing Services</h1>
          <p className="hero-subtitle">
            Compassionate Care, Right at Your Home
          </p>
        </div>
      </section>

      <section className="about-intro section-padding">
        <div className="container">
          <h2>Our Commitment to You</h2>
          <p>
            At Varalakshmi Old Age Home and Homecare Services, we are dedicated
            to providing compassionate, professional, and reliable home nursing
            services across the entirety of Andhra Pradesh and in Hyderabad. Our
            mission is to ensure your loved ones receive the highest quality
            care in the comfort, safety, and familiarity of their own homes. We
            understand the importance of trust and empathy in healthcare, and
            our team of skilled nurses and caretakers is committed to upholding
            these values in every interaction.
          </p>
        </div>
      </section>

      <section className="about-services section-padding-deep bg-light">
        <div className="container">
          <h2 className="section-title">
            Comprehensive Care Services We Offer
          </h2>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="service-card-img"
                />
                <div className="service-card-content">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-branches section-padding">
        <div className="container">
          <div className="branches-content">
            <div className="branches-text">
              <h2 className="section-title">
                Our Reach: Branches Across the Region
              </h2>
              <p>
                We are proud to extend our services through a network of
                branches, ensuring accessibility and prompt support. You can
                find us in:
              </p>
              <ul className="branch-list">
                {branches.map((branch) => (
                  <li key={branch}>{branch}</li>
                ))}
                <li>And many other key locations.</li>
              </ul>
              <p>
                Our expanding presence allows us to bring quality home
                healthcare closer to you and your family.
              </p>
            </div>
            <div className="branches-image-container">
              <img
                src={placeholderBranchMap}
                alt="Map showing service locations in Andhra Pradesh and Hyderabad"
                className="branch-map-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta section-padding bg-primary text-light">
        <div className="container text-center">
          <h2>Your Family's Health is Our Priority</h2>
          <p>
            We believe in providing care that not only meets medical needs but
            also enriches lives. Trust Varalakshmi Home Nursing Services for
            dependable and heartfelt support.
          </p>
          <a href="/contact" className="cta-button">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

// It's good practice to include react-helmet-async for managing document head
// If you haven't installed it: npm install react-helmet-async
// Then import it:
import { Helmet } from "react-helmet-async";
// And wrap your app in <HelmetProvider> in index.js or App.js
