import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Using Routes for v6
import ErrorBoundary from "./ErrorBoundary";
import { HelmetProvider } from "react-helmet-async";
import { Header } from "./Header";
import { AboutUs } from "./About";
import { ContactUs } from "./ContactUs";
import { BranchServices } from "./BranchServices";
import { DirectorProfile } from "./DirectorProfile";
import Home from "./Home";
// import HomePage from './components/HomePage'; // Example
// import ContactPage from './components/ContactPage'; // Example
// import Footer from './components/Footer'; // Example

import "./App.css";
import { ServiceImageGallery } from "./ServiceImageGallery";

function App() {
  return (
    <HelmetProvider>
      {" "}
      {/* Good to have HelmetProvider at the top level */}
      <Router>
        <ErrorBoundary>
          {" "}
          {/* Wrap the part of your app you want to protect */}
          <Header />
       
          <main style={{ paddingTop: "var(--header-height)" }}>
            {" "}
            {/* Ensure content isn't hidden by fixed header */}
            <Routes>
              {" "}
              {/* react-router-dom v6 uses Routes instead of Switch */}
              {/* <Route path="/" element={<HomePage />} /> */}
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/services" element={<BranchServices />} />
              {/* <Route path="/contact" element={<ContactPage />} /> */}
              {/* Add a default route or a 404 page */}
              <Route
                path="/"
                element={
                  <div style={{ padding: "20px", textAlign: "center" }}>
                    <h1>Welcome to Varalakshmi Services</h1>
                    <p>Navigate using the header to learn more about us.</p>
                  </div>
                }
              />
            </Routes>
          </main>
          {/* <Footer /> */}
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;
