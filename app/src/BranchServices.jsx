import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./BranchServices.css";

// Branch Images
import gunturImg from "/guntur.jpg"; // Assuming images are in src/components/BranchServices/images/
import hydImg from "/hyd.jpg";
import nelloreImg from "/nellore.jpg";
import ongoleImg from "/ongole.jpg";
import krishnaImg from "/krishna.webp";
import vijayawadaImg from "/vijayawada.png";

// Service Images
import homenursingImg from "/homenursing.jpg";
import bedriddenImg from "/bedridden.jpeg";
import postOperativeImg from "/post.jpg";
import seniorcitizenImg from "/seniorcitizen.webp";
import patientcare from "/patientcare.webp"
// If not, can use homenursingImg or a placeholder

// Fallback/Default Images
const defaultBranchImage =
  "https://via.placeholder.com/300x200.png?text=Our+Branch";
const defaultServiceImage =
  "https://via.placeholder.com/150x100.png?text=Service"; // A more fitting placeholder for service images

const branchesData = [
  {
    id: "vijayawada",
    name: "Vijayawada Branch",
    city: "Vijayawada",
    address:
      " Dodla Vari Street, Brts Road, Satyanarayanapuram, Vijayawada - 520011 (Opp Nadar Function Hall)",
    phone: "7382689997",
    email: "vijayawada@varalakshmiservices.com",
    image: vijayawadaImg,

    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61207.08079401068!2d80.60696025128513!3d16.51105903978906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff91c7c7269%3A0x452f1e3536759629!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4vYOUR_KEY",
    servicesOffered: [
      { id: "s1", name: "Home Nursing Services", img: homenursingImg },
      {
        id: "s2",
        name: "Patient Care Taker",
        img: patientcare,
      },
      { id: "s3", name: "Senior Citizen Care", img: seniorcitizenImg },
      { id: "s4", name: "Bedridden Patient Care", img: bedriddenImg },
      { id: "s5", name: "Post-Operative Care", img: postOperativeImg },
    ],
  },
  {
    id: "nellore",
    name: "Nellore Branch",
    city: "Nellore",
    address: "D.No: 33-44, XYZ Street, Nellore, AP 524001",
    phone: "7382689997",
    email: "nellore@varalakshmiservices.com",
    image: nelloreImg,
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345...YOUR_KEY_NELLORE",
    servicesOffered: [
      { id: "s1", name: "Home Nursing Services", img: homenursingImg },
      {
        id: "s2",
        name: "Patient Care Taker",
        img: patientcare,
      },
      { id: "s3", name: "Senior Citizen Care", img: seniorcitizenImg },
      { id: "s4", name: "Bedridden Patient Care", img: bedriddenImg },
    ],
  },
  {
    id: "guntur",
    name: "Guntur Branch",
    city: "Guntur",
    address: "D.No: 55-66, PQR Road, Guntur, AP 522001",
    phone: "7382689997",
    email: "guntur@varalakshmiservices.com",
    image: gunturImg,
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345...YOUR_KEY_GUNTUR",
    servicesOffered: [
      { id: "s1", name: "Home Nursing Services", img: homenursingImg },
      {
        id: "s2",
        name: "Patient Care Taker",
        img: patientcare,
      },
      { id: "s3", name: "Senior Citizen Care", img: seniorcitizenImg },
    ],
  },
  {
    id: "krishna",
    name: "Krishna Dist. Services",
    city: "Krishna District",
    address: "Servicing entire Krishna District, Main Office: Machilipatnam",
    phone: "7382689997",
    email: "krishna@varalakshmiservices.com",
    image: krishnaImg,
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345...YOUR_KEY_KRISHNA",
    servicesOffered: [
      { id: "s1", name: "Home Nursing Services", img: homenursingImg },
      {
        id: "s2",
        name: "Patient Care Taker",
        img: patientcare,
      },
      { id: "s3", name: "Senior Citizen Care", img: seniorcitizenImg },
      { id: "s4", name: "Bedridden Patient Care", img: bedriddenImg },
    ],
  },
  {
    id: "ongole",
    name: "Ongole Branch",
    city: "Ongole",
    address: "D.No: 77-88, LMN Avenue, Ongole, AP 523001",
    phone: "7382689997",
    email: "ongole@varalakshmiservices.com",
    image: ongoleImg,
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345...YOUR_KEY_ONGOLE",
    servicesOffered: [
      { id: "s1", name: "Home Nursing Services", img: homenursingImg },
      {
        id: "s2",
        name: "Patient Care Taker",
        img: patientcare,
      },
      { id: "s3", name: "Senior Citizen Care", img: seniorcitizenImg },
    ],
  },
  {
    id: "hyderabad",
    name: "Hyderabad Branch",
    city: "Hyderabad",
    address: "D.No: 99-00, JKL Street, Hyderabad, Telangana 500001",
    phone: "7382689997",
    email: "hyderabad@varalakshmiservices.com",
    image: hydImg,
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345...YOUR_KEY_HYDERABAD",
    servicesOffered: [
      { id: "s1", name: "Home Nursing Services", img: homenursingImg },
      {
        id: "s2",
        name: "Patient Care Taker",
        img: patientcare,
      },
      { id: "s3", name: "Senior Citizen Care", img: seniorcitizenImg },
      { id: "s4", name: "Bedridden Patient Care", img: bedriddenImg },
      { id: "s5", name: "Specialized Geriatric Care", img: seniorcitizenImg }, // Using seniorcitizenImg for this too
      { id: "s6", name: "Post-Operative Care", img: postOperativeImg }, // Added this if applicable
    ],
  },
];

export const BranchServices = () => {
  const [selectedBranchId, setSelectedBranchId] = useState(null);

  const handleBranchSelect = (branchId) => {
    setSelectedBranchId(branchId);
    const detailsSection = document.getElementById("branch-details-section");
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleGoBack = () => {
    setSelectedBranchId(null);
    const branchesGrid = document.getElementById("branches-grid-section");
    if (branchesGrid) {
      branchesGrid.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const selectedBranch = selectedBranchId
    ? branchesData.find((branch) => branch.id === selectedBranchId)
    : null;

  return (
    <div className="branch-services-page">
      <Helmet>
        <title>Our Services & Branches - Varalakshmi Home Nursing</title>
        <meta
          name="description"
          content="Explore our home nursing services offered across various branches in Andhra Pradesh and Hyderabad. Find contact details for your nearest branch."
        />
        <meta
          property="og:title"
          content="Our Services & Branches - Varalakshmi Home Nursing"
        />
        <meta
          property="og:description"
          content="Find detailed service information and contact details for Varalakshmi Home Nursing branches."
        />
      </Helmet>

      <section className="bs-hero section-padding-small">
        <div className="container text-center">
          <h1>Our Services by Branch</h1>
          <p className="hero-subtitle">
            {selectedBranch
              ? `Services and Contact Details for ${selectedBranch.name}`
              : "Select a branch below to view detailed service offerings and contact information."}
          </p>
        </div>
      </section>

      {!selectedBranch && (
        <section
          id="branches-grid-section"
          className="branches-grid-container section-padding"
        >
          <div className="container">
            <h2 className="section-title-bs">Our Branches</h2>
            <div className="branches-grid">
              {branchesData.map((branch) => (
                <div
                  key={branch.id}
                  className="branch-card-bs"
                  onClick={() => handleBranchSelect(branch.id)}
                >
                  <img
                    src={branch.image || defaultBranchImage}
                    alt={`${branch.name} office`}
                    className="branch-card-img-bs"
                  />
                  <div className="branch-card-content-bs">
                    <h3>{branch.name}</h3>
                    <p>{branch.city}</p>
                    <button className="branch-select-btn">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {selectedBranch && (
        <section
          id="branch-details-section"
          className="branch-details-container section-padding bg-light-bs"
        >
          <div className="container">
            <button onClick={handleGoBack} className="back-to-branches-btn">
              &larr; View All Branches
            </button>
            <h2 className="selected-branch-name">{selectedBranch.name}</h2>

            <div className="branch-details-layout">
              <div className="branch-info-section">
                <h3>Contact Details</h3>
                <p>
                  <strong>Address:</strong> {selectedBranch.address}
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href={`tel:${selectedBranch.phone}`}>
                    {selectedBranch.phone}
                  </a>
                </p>
                {selectedBranch.email && (
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${selectedBranch.email}`}>
                      {selectedBranch.email}
                    </a>
                  </p>
                )}

                {selectedBranch.mapEmbedUrl &&
                  selectedBranch.mapEmbedUrl.includes("embed") && (
                    <div className="branch-map-container">
                      <h4>Location Map</h4>
                      <iframe
                        src={selectedBranch.mapEmbedUrl}
                        width="100%"
                        height="300"
                        style={{
                          border: 0,
                          borderRadius: "8px",
                          marginTop: "10px",
                        }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${selectedBranch.name} Location`}
                      ></iframe>
                    </div>
                  )}
              </div>

              <div className="branch-services-section">
                <h3>Services Offered at this Branch</h3>
                {selectedBranch.servicesOffered &&
                selectedBranch.servicesOffered.length > 0 ? (
                  <div className="services-offered-grid">
                    {selectedBranch.servicesOffered.map((service) => (
                      <div key={service.id} className="service-offered-card">
                        {/* Use service.img and fallback to defaultServiceImage */}
                        <img
                          src={service.img || defaultServiceImage}
                          alt={service.name}
                          className="service-offered-img"
                        />{" "}
                        {/* Changed class name */}
                        <p>{service.name}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>
                    Please contact this branch directly for detailed service
                    information.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
