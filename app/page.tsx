"use client";

export default function Home() {
  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "22px 7%",
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(10px)",
          zIndex: 1000,
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ margin: 0 }}>MAPAS</h2>

        <div style={{ display: "flex", gap: "30px" }}>
          <span
            onClick={() =>
              document.getElementById("services")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            style={{ cursor: "pointer" }}
          >
            Services
          </span>

          <span
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            style={{ cursor: "pointer" }}
          >
            Contact
          </span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "120px 7% 80px",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT CONTENT */}
        <div style={{ maxWidth: "620px" }}>
          <img
            src="/logo.png"
            alt="MAPAS"
            style={{
              width: "48px",
              marginBottom: "20px",
            }}
          />

          <h1
            style={{
              fontSize: "58px",
              lineHeight: "1.15",
              fontWeight: "800",
              marginBottom: "30px",
            }}
          >
            Enterprise Oracle Middleware, OIC <br />
            & Agentic AI Solutions
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.5",
              marginBottom: "25px",
            }}
          >
            Specialized in Oracle WCC, WebLogic, SOA, IPM, OIC,
            OCI, Agentic AI and Production Support Services.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.7",
              color: "#b7d7f5",
              marginBottom: "35px",
            }}
          >
            Enterprise consulting for Oracle middleware,
            content management, integration cloud,
            automation, upgrades, migration,
            troubleshooting and AI-driven business solutions.
          </p>

          <div style={{ display: "flex", gap: "18px" }}>
            <button
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
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
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
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

        {/* RIGHT CARD */}
        <div
          id="services"
          style={{
            background: "#1b1b1b",
            border: "1px solid #333",
            borderRadius: "24px",
            padding: "38px",
            width: "460px",
            boxShadow: "0 0 30px rgba(255,255,255,0.05)",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "28px",
            }}
          >
            Enterprise Expertise
          </h2>

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
            <p
              key={item}
              style={{
                fontSize: "17px",
                marginBottom: "18px",
                color: "#ddd",
              }}
            >
              ✓ {item}
            </p>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        style={{
          padding: "80px 7%",
          background: "#0d0d0d",
          borderTop: "1px solid #222",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            marginBottom: "25px",
          }}
        >
          Contact Us
        </h2>

        <p
          style={{
            color: "#ccc",
            fontSize: "18px",
            marginBottom: "12px",
          }}
        >
          Email: ranjanofm@gmail.com
        </p>

        <p
          style={{
            color: "#aaa",
            fontSize: "16px",
          }}
        >
          Oracle Middleware, OIC, WCC, SOA, OCI &
          Agentic AI Consulting Services
        </p>
      </section>
    </main>
  );
}
