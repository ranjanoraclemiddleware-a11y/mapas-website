"use client";

import { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "white" }}>
      
      {/* ================= NAVBAR ================ */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 50px",
          zIndex: 10,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)"
        }}
      >
        <h2>MAPAS</h2>

        <div style={{ display: "flex", gap: "20px", cursor: "pointer" }}>
          <span onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>Services</span>
          <span onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}>Solutions</span>
          <span onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>About</span>
          <span onClick={() => setShowForm(true)}>Contact</span>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <div style={{ height: "100vh", position: "relative" }}>
        
        {/* PARTICLES */}
        <Particles
          init={particlesInit}
          options={{
            background: { color: "#020617" },
            particles: {
              number: { value: 60 },
              size: { value: 3 },
              move: { enable: true, speed: 1 },
              links: {
                enable: true,
                color: "#22c55e",
                distance: 150
              },
              color: { value: "#22c55e" }
            }
          }}
        />

        {/* CONTENT */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "10%",
            transform: "translateY(-50%)",
            maxWidth: "600px"
          }}
        >
          <h1 style={{ fontSize: "56px", fontWeight: "bold" }}>
            Oracle Fusion Middleware <br />
            Consulting Services
          </h1>

          <p style={{ marginTop: "20px", color: "#cbd5f5" }}>
            WebCenter Content, Imaging, AP Automation, SOA, OIC, EBS & OCI Experts
          </p>

          <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
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
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                border: "1px solid white",
                padding: "12px 24px",
                background: "transparent",
                color: "#fff",
                cursor: "pointer"
              }}
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>

      {/* ================= SERVICES ================= */}
      <div id="services" style={{ padding: "80px 50px", background: "#020617" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Our Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px"
          }}
        >
          {[
            "Oracle WCC",
            "Middleware",
            "Identity",
            "ERP",
            "Cloud (OCI)",
            "Generative AI"
          ].map((item) => (
            <div
              key={item}
              onClick={() => alert(item + " Clicked")}
              style={{
                background: "#111",
                padding: "20px",
                borderRadius: "12px",
                cursor: "pointer",
                transition: "0.3s"
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 20px #22c55e")
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

      {/* ================= CONTACT MODAL ================= */}
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
            alignItems: "center",
            zIndex: 20
          }}
        >
          <div style={{ background: "#111", padding: "30px", borderRadius: "10px" }}>
            <h2>Contact Us</h2>

            <input placeholder="Name" style={{ display: "block", margin: "10px 0", padding: "10px", width: "300px" }} />
            <input placeholder="Email" style={{ display: "block", margin: "10px 0", padding: "10px", width: "300px" }} />
            <textarea placeholder="Message" style={{ display: "block", margin: "10px 0", padding: "10px", width: "300px" }} />

            <button style={{ background: "#22c55e", padding: "10px", border: "none" }}>
              Send
            </button>

            <button
              onClick={() => setShowForm(false)}
              style={{ marginLeft: "10px" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
