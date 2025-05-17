import React, { useState, useEffect } from "react";
import "./Header.css";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const companyNameMain = "Varalakshmi";
  const companyNameTagline = "Old Age Home & Homecare Services";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      className={`site-header ${isScrolled ? "scrolled" : ""} ${
        isMobileMenuOpen ? "mobile-menu-active" : ""
      }`}
    >
      <div className="header-container">
        <button
          className={`hamburger-menu ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>

        <a href="/" className="company-logo">
          <span className="company-name-main">{companyNameMain}</span>
          <span className="company-name-tagline">{companyNameTagline}</span>
        </a>

        <nav className="desktop-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Menu - Conditionally rendered */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.path} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
