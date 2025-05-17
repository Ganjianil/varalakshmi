import React from "react";
import "./DirectorProfile.css";
import header from "/header.jpeg";
// REPLACE with the actual path to the director's photo
const directorPhoto =
  "https://via.placeholder.com/300x300.png?text=Dr.+L.+Varalakshmi"; // Placeholder

export const DirectorProfile = () => {
  const directorDetails = {
    name: "Dr. L. Varalakshmi",
    title: "Founder & Director",
    // REPLACE with actual bio/message
    bio: `With a profound dedication to compassionate healthcare, Dr. L. Varalakshmi established Varalakshmi Old Age Home and Homecare Services to provide exceptional and personalized care to those in need. 
          Her vision is rooted in the belief that every individual deserves to live with dignity, comfort, and the highest quality of support, especially in their vulnerable years or during times of illness. 
          Dr. Varalakshmi brings [mention years of experience or key expertise if applicable, e.g., "years of experience in healthcare management and a deep understanding of geriatric and patient-centric care"] to the organization, ensuring that our services are not only professional but also delivered with genuine empathy and respect. 
          Her commitment is to make a meaningful difference in the lives of our clients and their families across Andhra Pradesh and Hyderabad.`,
    quote:
      "Our mission is to bring comfort, care, and compassion directly to your home.", // Optional quote
  };

  return (
    <section className="director-profile-section">
      <div className="container dp-container">
        <div className="director-photo-column">
          <img
            src={header}
            alt={`Photo of ${directorDetails.name}`}
            className="director-photo"
          />
        </div>
        <div className="director-info-column">
          <h2 className="director-name">{directorDetails.name}</h2>
          <p className="director-title">{directorDetails.title}</p>
          <div className="director-bio">
            <p>
              {directorDetails.bio.split("\n").map((paragraph, index) => (
                <React.Fragment key={index}>
                  {paragraph}
                  {index < directorDetails.bio.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
          {directorDetails.quote && (
            <blockquote className="director-quote">
              "{directorDetails.quote}"
            </blockquote>
          )}
        </div>
      </div>
    </section>
  );
};
