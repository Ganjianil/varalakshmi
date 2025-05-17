import React from "react";
import { Helmet } from "react-helmet-async";
import "./ServiceImageGallery.css";
import mealsupport from "/mealsupport.jpg";
import medication from "/medicationmanagementathome.jpg"
import mobility from "/mobilityservices.jpg"
import patientcarecamping from "/patientcarecamping.jpg"
import proffesionalcare from "/proffesionalwoundcare.webp"
import reading from "/reading.jpg"
import seniorcitizencomfort from "/seniorcitizencomfortjpg.jpg"
import outdoor from "/outdoor.jpg"
import vital from "/vitalsign.jpg"

import daily from "/dailyactivity.jpeg"
// Example Image Data - REPLACE with your actual image paths and details
const galleryImagesData = [
  // Home Nursing Services
  {
    id: "hns1",
    src: medication,
    alt: "Nurse providing medication to a patient at home",
    caption: "Medication Management at Home",
    category: "Home Nursing Services",
  },
  {
    id: "hns2",
    src: proffesionalcare,
    alt: "Wound care being administered by a home nurse",
    caption: "Professional Wound Care",
    category: "Home Nursing Services",
  },
  {
    id: "hns3",
    src: vital,
    alt: "Nurse checking vitals of a patient in their home",
    caption: "Vital Signs Monitoring",
    category: "Home Nursing Services",
  },
  // Patient Care Taker Service (General)
  {
    id: "pcts1",
    src: mobility,
    alt: patientcarecamping,
    caption: "Mobility Assistance",
    category: "Patient Care Taker Service",
  },
  {
    id: "pcts2",
    src: patientcarecamping,
    alt: "Caretaker providing companionship to a patient",
    caption: "Companionship & Support",
    category: "Patient Care Taker Service",
  },
  {
    id: "pcts3",
    src: daily,
    alt: "Caretaker helping with daily activities",
    caption: "Daily Activity Support",
    category: "Patient Care Taker Service",
  },
  // Patient Care Taker Service for Senior Citizen
  {
    id: "scs1",
    src: mealsupport,
    alt: "Caretaker assisting a senior citizen with a meal",
    caption: "Meal Assistance for Seniors",
    category: "Senior Citizen Care",
  },
  {
    id: "scs2",
    src: outdoor,
    alt: "Senior citizen enjoying a walk with a caretaker",
    caption: "Outdoor Activities & Walks",
    category: "Senior Citizen Care",
  },
  {
    id: "scs3",
    src: reading,
    alt: "Caretaker reading to a senior citizen",
    caption: "Engaging Activities for Seniors",
    category: "Senior Citizen Care",
  },
  {
    id: "scs4", // Added one more for this category as it was repeated in the prompt
    src: seniorcitizencomfort,
    alt: "Caretaker ensuring a safe environment for a senior",
    caption: "Safe & Comfortable Living",
    category: "Senior Citizen Care",
  },
];

export const ServiceImageGallery = () => {
  // Group images by category
  const imagesByCategory = galleryImagesData.reduce((acc, image) => {
    if (!acc[image.category]) {
      acc[image.category] = [];
    }
    acc[image.category].push(image);
    return acc;
  }, {});

  // Define the order of categories if needed
  const categoryOrder = [
    "Home Nursing Services",
    "Patient Care Taker Service",
    "Senior Citizen Care",
  ];

  return (
    <div className="service-image-gallery-page">
      <Helmet>
        <title>Our Service Gallery - Varalakshmi Home Nursing</title>
        <meta
          name="description"
          content="View images of our home nursing, patient care, and senior citizen care services. See our compassionate care in action."
        />
        <meta
          property="og:title"
          content="Service Gallery - Varalakshmi Home Nursing"
        />
        <meta
          property="og:description"
          content="A gallery showcasing our dedicated home healthcare services."
        />
        {/* <meta property="og:image" content="your-gallery-preview-image.jpg" /> */}
      </Helmet>

      <section className="gallery-hero section-padding-small-gallery">
        <div className="container text-center">
          <h1>Our Care in Pictures</h1>
          <p className="hero-subtitle-gallery">
            A glimpse into the compassionate and professional care we provide.
          </p>
        </div>
      </section>

      <div className="gallery-main-content section-padding-gallery">
        <div className="container">
          {categoryOrder.map((categoryName) => {
            const images = imagesByCategory[categoryName];
            if (!images || images.length === 0) return null;

            return (
              <section key={categoryName} className="image-category-section">
                <h2 className="category-title-gallery">{categoryName}</h2>
                <div className="image-grid-gallery">
                  {images.map((image) => (
                    <div key={image.id} className="image-card-gallery">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="gallery-img"
                      />
                      {image.caption && (
                        <p className="image-caption-gallery">{image.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};
