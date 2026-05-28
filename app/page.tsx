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
          background: "rgba(0,0,0,0.5)",
          zIndex: 10,
          backdropFilter: "blur(10px)"
        }}
      >
        <h2>MAPAS</h2>

        <div style={{ display: "flex", gap: "20px", cursor: "pointer" }}>
          <span onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>Services</span>
          <span onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>About</span>
          <span onClick={() => setShowForm(true)}>Contact</span>
        </div>
      </nav>

      {/* HERO WITH VIDEO */}
      <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        
        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -2
          }}
        >
          <source src="/videos/ai-bg.mp4" type="video/mp4" />
        </video>

        {/* DARK OVERLAY */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            zIndex: -1
          }}
        />

        {/* CONTENT */}
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            paddingLeft: "10%"
          }}
        >
          <div>
           <h1 style={{ fontSize: "56px", fontWeight: "bold", lineHeight: "1.2" }}>
  Enterprise Oracle Middleware, OIC <br />
  & Agentic AI Solutions
</h1>

            <p style={{ marginTop: "20px", color: "#ddd", maxWidth: "500px" }}>
              Oracle WCC, Imaging/IPM, OIC, SOA, OCI, EBS, AP Automation, Agentic AI & Enterprise Integration Solutions
            </p>

            <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
              <button
                onClick={() => setShowForm(true)}
                style={{
                  background: "#22c55e",
                  padding: "12px 24px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold"
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
            "OracleWCC",
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
          <div style={{ background: "#111", padding: "30px", borderRadius: "10px" }}>
            <h2>Contact Us</h2>

            <input placeholder="Name" style={{ display: "block", margin: "10px", padding: "10px", width: "250px" }} />
            <input placeholder="Email" style={{ display: "block", margin: "10px", padding: "10px", width: "250px" }} />
            <textarea placeholder="Message" style={{ display: "block", margin: "10px", padding: "10px", width: "250px" }} />

            <button style={{ background: "#22c55e", padding: "10px", border: "none" }}>
              Send
            </button>

            <button onClick={() => setShowForm(false)} style={{ marginLeft: "10px" }}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
