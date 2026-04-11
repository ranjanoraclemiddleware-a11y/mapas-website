"use client";

import React, { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    background: "#020617",
    color: "#fff",
    border: "1px solid #334155",
    borderRadius: "6px"
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.05)",
    padding: "24px",
    borderRadius: "12px",
    transition: "0.3s",
    cursor: "pointer",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)"
  };

  const handleMouseOver = (e: any) => {
    e.currentTarget.style.boxShadow =
      "0 0 25px rgba(34,197,94,0.6)";
    e.currentTarget.style.transform = "translateY(-6px)";
  };

  const handleMouseOut = (e: any) => {
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.transform = "translateY(0)";
  };

  return (
    <div style={{ color: "#fff", fontFamily: "sans-serif" }}>

      {/* NAVBAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 10,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)"
        }}
      >
        <h2
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          MAPAS
        </h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <span onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} style={{ cursor: "pointer" }}>
            Services
          </span>
          <span onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })} style={{ cursor: "pointer" }}>
            Solutions
          </span>
          <span onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} style={{ cursor: "pointer" }}>
            About
          </span>
          <span onClick={() => setShowForm(true)} style={{ cursor: "pointer" }}>
            Contact
          </span>
        </div>
      </div>

      {/* HERO */}
      <div
        style={{
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1677442136019-21780ecad995')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          padding: "0 60px"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to right, rgba(2,6,23,0.95), rgba(2,6,23,0.7))"
          }}
        />

        <div style={{ position: "relative", maxWidth: "700px" }}>
          <h1 style={{ fontSize: "56px", fontWeight: "bold" }}>
            Oracle Fusion Middleware <br />
            & Cloud Consulting Services
          </h1>

          <div
            style={{
              height: "4px",
              width: "120px",
              background: "#22c55e",
              margin: "20px 0"
            }}
          />

          <p style={{ fontSize: "18px", color: "#cbd5f5" }}>
            WebCenter Content, Imaging, AP Automation, SOA, OIC, EBS & OCI —
            Implementation, Upgrade & Optimization Experts
          </p>

          <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
            <button
              onClick={() => setShowForm(true)}
              style={{
                background: "#22c55e",
                padding: "12px 24px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Get Free Consultation
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                background: "transparent",
                border: "1px solid #fff",
                padding: "12px 24px",
                borderRadius: "8px",
                color: "#fff",
                cursor: "pointer"
              }}
            >
              Explore Services
            </button>
          </div>

          <p style={{ marginTop: "20px", color: "#94a3b8" }}>
            Helping enterprises modernize Oracle systems with Automation & GenAI
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <div id="services" style={{ padding: "60px", background: "#020617" }}>
        <h2>Our Services</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}>
          <div style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3>WebCenter Content</h3>
            <p>Content, Capture, Imaging, Workflow</p>
          </div>

          <div style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3>Imaging & WFR</h3>
            <p>AP Automation, Invoice Processing</p>
          </div>

          <div style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3>SOA / OIC / OSB</h3>
            <p>Integration & Process Automation</p>
          </div>

          <div style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3>Oracle EBS</h3>
            <p>Customization & Support</p>
          </div>

          <div style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3>OCI Cloud</h3>
            <p>Migration & Architecture</p>
          </div>

          <div style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3>GenAI Solutions</h3>
            <p>AI Automation & Smart Processing</p>
          </div>
        </div>
      </div>

      {/* SOLUTIONS */}
      <div id="solutions" style={{ padding: "60px" }}>
        <h2>Solutions</h2>
        <p>Enterprise Automation, AI Workflows, Digital Transformation</p>
      </div>

      {/* ABOUT */}
      <div id="about" style={{ padding: "60px" }}>
        <h2>About Us</h2>
        <p>
          We specialize in Oracle Fusion Middleware, helping enterprises
          modernize legacy systems and adopt cloud & AI-driven solutions.
        </p>
      </div>

      {/* CONTACT FORM */}
      {showForm && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.8)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{ background: "#020617", padding: "30px", borderRadius: "12px", width: "400px" }}>
            <h2>Contact Us</h2>

            <input placeholder="Your Name" style={inputStyle} />
            <input placeholder="Email" style={inputStyle} />
            <input placeholder="Phone" style={inputStyle} />
            <textarea placeholder="Your Requirement" style={inputStyle} />

            <button style={{
              background: "#22c55e",
              padding: "10px",
              width: "100%",
              marginTop: "10px"
            }}>
              Submit
            </button>

            <button onClick={() => setShowForm(false)} style={{ marginTop: "10px", width: "100%" }}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
