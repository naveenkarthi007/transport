import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Loginpage.jsx";
import "../styles/landing.css";
import { FaCopyright } from "react-icons/fa";
export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="landing-container">
      <header className="header">
        <div className="overlay"></div>
        <h1 className="title"> JK Transport </h1>
        <h2 className="till">Fast, Safe and Reliable Transport </h2>
        <button
          className="btn primary"
          onClick={() => navigate("/login")}   
        >
          Get Started
        </button>
      </header>
      <section className="section">
        <h2 className="section-title">Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Freight Transport</h3>
            <p>Heavy trucks & long-distance transportation.</p>
          </div>
          <div className="service-card">
            <h3>Logistics Solutions</h3>
            <p>Smart route planning and supply chain support.</p>
          </div>
          <div className="service-card">
            <h3>Last-mile Delivery</h3>
            <p>Quick delivery to your final destination.</p>
          </div>
        </div>
      </section>
      <footer className="footer">
       <FaCopyright />   {new Date().getFullYear()}   Transport Services
      </footer>
    </div>
  );
}
