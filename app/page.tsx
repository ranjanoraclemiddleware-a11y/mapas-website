"use client";

import { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ fontFamily: "Arial", color: "white" }}>
      
      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
          background: "rgba(0,0,0,0.6)",
          zIndex: 10
        }}
      >
        <h2>MAPAS</h2>

        <div style={{ display: "flex", gap: "20px", cursor: "pointer" }}>
          <span onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>Services</span>
          <span onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>About</span>
          <span onClick={() => setShowForm(true)}>Contact</span>
        </div>
      </nav>

      {/* HERO */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          paddingLeft: "10%",
          background: "linear-gradient(-45deg, #020617, #0f172a, #020617, #020617)",
          backgroundSize: "400% 400%",
          animation: "gradientMove 10s ease infinite"
        }}
      >
        <div>
          <h1 style={{ fontSize: "52px", fontWeight: "bold" }}>
            Oracle Middleware <br />
            Consulting Services
          </h1>

          <p style={{ marginTop: "20px", color: "#ccc" }}>
            WebCenter Content, Imaging, SOA, OIC, EBS, OCI & AI Solutions
          </p>

          <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
            <button
              onClick={() => setShowForm(true)}
              style={{
                background: "#22c55e",
                padding: "12px 24px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Get Free Consultation
            </button>

            <button
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                border: "1px solid white",
                padding: "12px 24px",
                background: "transparent",
                color: "white",
                cursor: "pointer"
              }}
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div id="services" style={{ padding: "80px", background: "#020617" }}>
        <h2 style={{ textAlign: "center" }}>Our Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
            marginTop: "40px"
          }}
        >
          {[
            "Oracle WCC",
            "Imaging & AP Automation",
            "SOA & OIC",
            "EBS & ERP",
            "OCI Cloud",
            "Generative AI"
          ].map((item) => (
            <div
              key={item}
              onClick={() => alert(item)}
              style={{
                background: "#111",
                padding: "20px",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "0.3s"
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "0 0 20px #22c55e")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "none")
              }
            >
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT MODAL */}
      {showForm && (
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div style={{ background: "#111", padding: "30px" }}>
            <h2>Contact Us</h2>

            <input placeholder="Name" style={{ display: "block", margin: "10px", padding: "10px" }} />
            <input placeholder="Email" style={{ display: "block", margin: "10px", padding: "10px" }} />
            <textarea placeholder="Message" style={{ display: "block", margin: "10px", padding: "10px" }} />

            <button style={{ background: "#22c55e", padding: "10px" }}>
              Send
            </button>

            <button onClick={() => setShowForm(false)}>Close</button>
          </div>
        </div>
      )}

      {/* ANIMATION STYLE */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
}
