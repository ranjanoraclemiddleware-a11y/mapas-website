"use client";

import React, { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    background: "#000",
    color: "#fff",
    border: "1px solid #333",
    borderRadius: "6px"
  };

  const cardStyle = {
    background: "#111",
    padding: "24px",
    borderRadius: "12px",
    transition: "0.3s",
    cursor: "pointer"
  };

  const handleMouseOver = (e: any) => {
    e.currentTarget.style.boxShadow =
      "0 0 25px rgba(34,197,94,0.7)";
    e.currentTarget.style.transform = "translateY(-5px)";
  };

  const handleMouseOut = (e: any) => {
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.transform = "translateY(0)";
  };

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>

      {/* NAVBAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
          borderBottom: "1px solid #1f2937"
        }}
      >
        <h2>MAPAS</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <span>Services</span>
          <span>Solutions</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>

      {/* HERO */}
      <div style={{ textAlign: "center", padding: "100px 20px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
          Upgrade Your Oracle Systems.<br />
          Automate Your Business. Scale Faster.
        </h1>

        <p style={{ color: "#9ca3af", marginTop: "20px" }}>
          Oracle WCC, Middleware, Cloud (OCI) & AI Solutions — All in One Place
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "20px",
            justifyContent: "center"
          }}
        >
          <button
            onClick={() => setShowForm(true)}
            style={{
              background: "#22c55e",
              padding: "12px 24px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Get Free Consultation
          </button>

          <button
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

        <p style={{ marginTop: "20px", color: "#6b7280" }}>
          Trusted for Oracle WCC, Middleware & Cloud Transformations
        </p>
      </div>

      {/* SERVICES */}
      <div style={{ padding: "40px" }}>
        <h2 style={{ marginBottom: "30px" }}>Our Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px"
          }}
        >
          <div style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3>Oracle WCC</h3>
            <p>Content, Imaging, Capture, Workflow</p>
          </div>

          <div style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3>Middleware</h3>
            <p>SOA, OIC, OSB Integration</p>
          </div>

          <div style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3>Identity</h3>
            <p>OIM, OAM Security</p>
          </div>

          <div style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3>ERP</h3>
            <p>Oracle EBS Solutions</p>
          </div>

          <div style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3>Cloud (OCI)</h3>
            <p>Migration & Architecture</p>
          </div>

          <div style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3>AI</h3>
            <p>GenAI, Automation, Smart Workflows</p>
          </div>
        </div>
      </div>

      {/* CONTACT FORM POPUP */}
      {showForm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              background: "#111",
              padding: "30px",
              borderRadius: "12px",
              width: "400px"
            }}
          >
            <h2>Contact Us</h2>

            <input placeholder="Your Name" style={inputStyle} />
            <input placeholder="Email" style={inputStyle} />
            <input placeholder="Phone" style={inputStyle} />
            <textarea placeholder="Your Requirement" style={inputStyle} />

            <button
              style={{
                background: "#22c55e",
                padding: "10px",
                width: "100%",
                border: "none",
                marginTop: "10px",
                borderRadius: "6px"
              }}
            >
              Submit
            </button>

            <button
              onClick={() => setShowForm(false)}
              style={{
                marginTop: "10px",
                width: "100%",
                padding: "10px"
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
