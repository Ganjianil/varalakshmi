import React from "react";
import "./AutoScrollGallery.css";
import img1 from "/img1.jpeg";
import img2 from "/img2.jpeg";
import img3 from "/img3.jpeg";
import img4 from "/img4.jpeg";
import img5 from "/img5.jpeg";
import img6 from "/img6.jpeg";
import img7 from "/img7.jpeg";
import img8 from "/img8.jpeg";





// Example Image Data - REPLACE with your actual image paths and details
// For a good scrolling effect with 5 images visible, aim for at least 10-15 unique images.
const galleryItems = [
  {
    id: 1,
    src: img1,
    alt: "Gallery Image 1",
  },
  {
    id: 2,
    src: img2,
    alt: "Gallery Image 2",
  },
  
  {
    id: 4,
    src: img4,
    alt: "Gallery Image 4",
  },
  {
    id: 5,
    src: img5,
    alt: "Gallery Image 5",
  },
  {
    id: 6,
    src: img6,
    alt: "Gallery Image 6",
  },
  {
    id: 7,
    src: img7,
    alt: "Gallery Image 7",
  },
  {
    id: 8,
    src: img8,
    alt: "Gallery Image 8",
  },
  
  
];

// Duplicate the items for seamless scrolling effect
const duplicatedGalleryItems = [...galleryItems, ...galleryItems];

export const AutoScrollGallery = ({ title = "Our Gallery Showcase" }) => {
  // Calculate animation duration based on number of items to make speed consistent
  // Adjust the base duration (e.g., 40s) and items per screen (e.g., 5) as needed
  const animationDuration = (galleryItems.length / 5) * 25; // e.g., 10 items / 5 per screen * 25s = 50s

  return (
    <section className="auto-scroll-gallery-section">
      <div className="container asg-container">
        {title && <h2 className="asg-title">{title}</h2>}
        <div
          className="auto-scroll-gallery-wrapper"
          role="region"
          aria-label={title || "Image Gallery"}
        >
          <div
            className="auto-scroll-gallery-inner"
            style={{ "--animation-duration": `${animationDuration}s` }}
          >
            {duplicatedGalleryItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="gallery-image-item-asg"
              >
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
