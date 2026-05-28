export default function Home() {
  const services = [
    ["Oracle WCC Support", "Production support, troubleshooting, integrations and administration."],
    ["Oracle Integration Cloud (OIC)", "Enterprise integrations, APIs, connectivity and automation flows."],
    ["WebLogic Administration", "Server setup, patching, performance tuning and monitoring."],
    ["SOA & Middleware", "SOA Suite troubleshooting, deployments and enterprise integrations."],
    ["OCI Cloud Services", "Oracle Cloud infrastructure guidance, migration and support."],
    ["Agentic AI Solutions", "AI-driven automation, intelligent workflows and enterprise GenAI enablement."],
  ];

  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <section style={{ padding: "90px 7%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <img src="/logo.png" alt="MAPAS Logo" style={{ width: "44px", marginBottom: "24px" }} />

            <h1 style={{ fontSize: "52px", lineHeight: "1.15", fontWeight: 800, marginBottom: "26px" }}>
              Oracle Middleware, OIC <br />& Agentic AI Specialists
            </h1>

            <p style={{ fontSize: "21px", color: "#ddd", lineHeight: "1.45", marginBottom: "22px" }}>
              Specialized in Oracle WCC, WebLogic, SOA, IPM, OIC, OCI, Agentic AI and Production Support Services.
            </p>

            <p style={{ fontSize: "17px", color: "#b7d7f5", lineHeight: "1.6", marginBottom: "34px" }}>
              Specialized consulting for Oracle middleware, content management, troubleshooting, upgrades, migration,
              enterprise integration and AI-driven automation.
            </p>

            <div style={{ display: "flex", gap: "16px" }}>
              <a href="#services" style={{ background: "#fff", color: "#000", padding: "14px 28px", borderRadius: "12px", fontWeight: 700, textDecoration: "none" }}>
                Our Services
              </a>
              <a href="#contact" style={{ color: "#fff", padding: "14px 28px", borderRadius: "12px", border: "1px solid #fff", fontWeight: 700, textDecoration: "none" }}>
                Contact Us
              </a>
            </div>
          </div>

          <div style={{ background: "#1b1b1b", border: "1px solid #333", borderRadius: "24px", padding: "38px" }}>
            <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Enterprise Expertise</h2>
            {[
              "Oracle WebCenter Content (WCC)",
              "Oracle IPM / Capture",
              "Oracle Integration Cloud (OIC)",
              "WebLogic Administration",
              "SOA Suite Troubleshooting",
              "OCI Cloud Services",
              "Agentic AI Solutions",
              "Production Support",
              "Migration & Upgrades",
              "Performance Tuning",
            ].map((item) => (
              <p key={item} style={{ fontSize: "17px", color: "#ddd", marginBottom: "16px" }}>✓ {item}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="about" style={{ padding: "80px 7%", background: "#0d0d0d", textAlign: "center" }}>
        <h2 style={{ fontSize: "38px", marginBottom: "24px" }}>About MAPAS</h2>
        <p style={{ fontSize: "18px", color: "#ccc", lineHeight: "1.8", maxWidth: "900px", margin: "0 auto" }}>
          MAPAS Technologies focuses on Oracle enterprise solutions, especially Oracle WebCenter Content,
          WebLogic Server, SOA, OIC, OCI and enterprise middleware support.
        </p>
        <p style={{ fontSize: "18px", color: "#aaa", lineHeight: "1.8", maxWidth: "900px", margin: "20px auto 0" }}>
          We help businesses manage production systems, resolve critical incidents, perform upgrades,
          improve enterprise application stability and adopt AI-driven automation.
        </p>
      </section>

      <section id="services" style={{ padding: "80px 7%", background: "#000" }}>
        <h2 style={{ fontSize: "38px", textAlign: "center", marginBottom: "50px" }}>Our Services</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "26px" }}>
          {services.map(([title, desc]) => (
            <div key={title} style={{ background: "#1b1b1b", padding: "30px", borderRadius: "24px", border: "1px solid #333" }}>
              <h3 style={{ fontSize: "24px", marginBottom: "14px" }}>{title}</h3>
              <p style={{ color: "#aaa", lineHeight: "1.6" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ padding: "80px 7%", background: "#0d0d0d", textAlign: "center" }}>
        <h2 style={{ fontSize: "38px", marginBottom: "20px" }}>Contact Us</h2>
        <p style={{ color: "#ccc", fontSize: "18px", marginBottom: "30px" }}>
          Looking for Oracle middleware, OIC, OCI or Agentic AI consulting support?
        </p>
        <p style={{ fontSize: "18px" }}>📧 info@mapastech.com</p>
        <p style={{ fontSize: "18px" }}>📞 +91-8861064794</p>
        <p style={{ fontSize: "18px" }}>🌐 www.mapasgenai.com</p>
        <p style={{ fontSize: "18px" }}>🔗 LinkedIn: MAPAS Technologies</p>
      </section>
    </main>
  );
}
