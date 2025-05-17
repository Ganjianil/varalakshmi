import React from "react";
import { Header } from "./Header";
import { AboutUs } from "./About";
import { ContactUs } from "./ContactUs";
import { BranchServices } from "./BranchServices";
import { DirectorProfile } from "./DirectorProfile";
import { ServiceImageGallery } from "./ServiceImageGallery";
import { Footer } from "./Footer";
import { AutoScrollGallery } from "./AutoScrollGallery";
const Home = () => {
  return (
    <div>
      
      <DirectorProfile />
      <ServiceImageGallery />
      <AutoScrollGallery/>

      <BranchServices />
      <AboutUs />

      <ContactUs />
  
    </div>
  );
}

export default Home;
