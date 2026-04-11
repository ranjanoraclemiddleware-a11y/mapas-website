"use client";
export default function Home() {
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
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        borderBottom: "1px solid #1f2937"
      }}>
        <h2>MAPAS</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <span>Services</span>
          <span>Solutions</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>

      {/* HERO */}
      <div style={{
        textAlign: "center",
        padding: "100px 20px"
      }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
          Upgrade Your Oracle Systems.<br />
          Automate Your Business. Scale Faster.
        </h1>

        <p style={{ color: "#9ca3af", marginTop: "20px" }}>
          Oracle WCC, Middleware, Cloud (OCI) & AI Solutions — All in One Place
        </p>

        <div style={{ marginTop: "30px", display: "flex", gap: "20px", justifyContent: "center" }}>
          <button style={{
            background: "#22c55e",
            padding: "12px 24px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}>
            Get Free Consultation
          </button>

          <button style={{
            background: "transparent",
            border: "1px solid #fff",
            padding: "12px 24px",
            borderRadius: "8px",
            color: "#fff",
            cursor: "pointer"
          }}>
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

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}>

          {/* CARD 1 */}
          <div style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3>Oracle WCC</h3>
            <p>Content, Imaging, Capture, Workflow</p>
          </div>

          {/* CARD 2 */}
          <div style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3>Middleware</h3>
            <p>SOA, OIC, OSB Integration</p>
          </div>

          {/* CARD 3 */}
          <div style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3>Identity</h3>
            <p>OIM, OAM Security</p>
          </div>

          {/* CARD 4 */}
          <div style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3>ERP</h3>
            <p>Oracle EBS Solutions</p>
          </div>

          {/* CARD 5 */}
          <div style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3>Cloud (OCI)</h3>
            <p>Migration & Architecture</p>
          </div>

          {/* CARD 6 */}
          <div style={cardStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3>AI</h3>
            <p>GenAI, Automation, Smart Workflows</p>
          </div>

        </div>
      </div>

    </div>
  );
}
