"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [init, setInit] = useState(false);

  // Load particles safely
  useEffect(() => {
    loadSlim(window.tsParticles).then(() => {
      setInit(true);
    });
  }, []);

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
          <span onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}>Solutions</span>
          <span onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>About</span>
          <span onClick={() => setShowForm(true)}>Contact</span>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ height: "100vh", position: "relative" }}>
        
        {init && (
          <Particles
            options={{
              background: { color: "#020617" },
              particles: {
                number: { value: 50 },
                size: { value: 3 },
                move: { enable: true, speed: 1 },
                links: {
                  enable: true,
                  distance: 150,
                  color: "#22c55e"
                },
                color: { value: "#22c55e" }
              }
            }}
          />
        )}

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "10%",
            transform: "translateY(-50%)"
          }}
        >
          <h1 style={{ fontSize: "50px" }}>
            Oracle Middleware <br />
            Consulting Services
          </h1>

          <p style={{ marginTop: "20px", color: "#ccc" }}>
            WCC, WCC Imaging, SOA, OIC, EBS, OCI & AI Solutions
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
            "Middleware",
            "Identity",
            "ERP",
            "Cloud (OCI)",
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

            <input placeholder="Name" style={{ display: "block", margin: "10px" }} />
            <input placeholder="Email" style={{ display: "block", margin: "10px" }} />
            <textarea placeholder="Message" style={{ display: "block", margin: "10px" }} />

            <button style={{ background: "#22c55e", padding: "10px" }}>
              Send
            </button>

            <button onClick={() => setShowForm(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
