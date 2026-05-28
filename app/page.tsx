"use client";

export default function Home() {
  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "Arial" }}>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 7%",
          gap: "60px",
        }}
      >
        <div style={{ maxWidth: "620px" }}>
          <img src="/logo.png" alt="MAPAS" style={{ width: "42px", marginBottom: "20px" }} />

          <h1 style={{ fontSize: "50px", lineHeight: "1.18", fontWeight: "800", marginBottom: "30px" }}>
            Oracle Middleware, OIC <br />
            & Agentic AI Specialists
          </h1>

          <p style={{ fontSize: "21px", lineHeight: "1.4", marginBottom: "25px" }}>
            Specialized in Oracle WCC, WebLogic, SOA, IPM, OIC, OCI,
            Agentic AI and Production Support Services.
          </p>

          <p style={{ fontSize: "17px", lineHeight: "1.6", color: "#b7d7f5", marginBottom: "35px" }}>
            Enterprise consulting for Oracle middleware, content management,
            integration cloud, automation, upgrades, migration, troubleshooting
            and AI-driven business solutions.
          </p>

          <div style={{ display: "flex", gap: "16px" }}>
            <button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "#fff",
                color: "#000",
                padding: "14px 28px",
                borderRadius: "10px",
                border: "none",
                fontWeight: "700",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Our Services
            </button>

            <button
              style={{
                background: "transparent",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: "10px",
                border: "1px solid #fff",
                fontWeight: "700",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Contact Us
            </button>
          </div>
        </div>

        <div
          id="services"
          style={{
            background: "#1b1b1b",
            border: "1px solid #333",
            borderRadius: "22px",
            padding: "35px",
            width: "480px",
            boxShadow: "0 0 30px rgba(255,255,255,0.05)",
          }}
        >
          <h2 style={{ fontSize: "26px", marginBottom: "25px" }}>Enterprise Expertise</h2>

          {[
            "Oracle WebCenter Content (WCC)",
            "Oracle IPM / Capture",
            "Oracle Integration Cloud (OIC)",
            "SOA Suite & API Integration",
            "OCI Cloud Services",
            "Agentic AI Solutions",
            "Migration & Upgrades",
            "Performance Tuning",
          ].map((item) => (
            <p key={item} style={{ fontSize: "17px", marginBottom: "18px", color: "#ddd" }}>
              ✓ {item}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}
