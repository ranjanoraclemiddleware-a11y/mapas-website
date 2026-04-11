export default function Home() {
  return (
    <main style={{
      background: "black",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      
      {/* HEADER */}
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <h1>MAPAS</h1>
        <div>
          <span style={{marginRight: "15px"}}>Services</span>
          <span style={{marginRight: "15px"}}>Solutions</span>
          <span style={{marginRight: "15px"}}>About</span>
          <span>Contact</span>
        </div>
      </div>

      {/* HERO */}
      <div style={{textAlign: "center", marginTop: "80px"}}>
        <h2 style={{fontSize: "40px"}}>
          UPGRADE. OPTIMIZE. AUTOMATE.
        </h2>

        <p style={{color: "gray", marginTop: "10px"}}>
          Oracle WCC, Middleware, Cloud (OCI) & AI Solutions — All in One Place
        </p>

        <div style={{marginTop: "20px"}}>
          <button style={{
            background: "green",
            padding: "10px 20px",
            marginRight: "10px",
            border: "none"
          }}>
            Get Free Consultation
          </button>

          <button style={{
            border: "1px solid gray",
            padding: "10px 20px",
            background: "transparent",
            color: "white"
          }}>
            Explore Services
          </button>
        </div>
      </div>

      {/* SERVICES */}
      <div style={{
        marginTop: "80px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px"
      }}>
        
        <div style={{background: "#111", padding: "20px"}}>
          <h3>Oracle WCC</h3>
          <p>Content, Imaging, Capture, Workflow</p>
        </div>

        <div style={{background: "#111", padding: "20px"}}>
          <h3>Middleware</h3>
          <p>SOA, OIC, OSB Integration</p>
        </div>

        <div style={{background: "#111", padding: "20px"}}>
          <h3>Identity</h3>
          <p>OIM, OAM Security</p>
        </div>

        <div style={{background: "#111", padding: "20px"}}>
          <h3>ERP</h3>
          <p>Oracle EBS Solutions</p>
        </div>

        <div style={{background: "#111", padding: "20px"}}>
          <h3>Cloud (OCI)</h3>
          <p>Migration & Architecture</p>
        </div>

        <div style={{background: "#111", padding: "20px"}}>
          <h3>AI</h3>
          <p>GenAI, Automation, Smart Workflows</p>
        </div>

      </div>

    </main>
  );
}
