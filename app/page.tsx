import "./style.css";

export default function Home() {
  const services = [
    "Oracle WebCenter / IPM / Capture",
    "Oracle Integration Cloud",
    "WebLogic & Middleware Support",
    "Cloud & OCI Consulting",
    "AI & Automation",
    "Training & Consulting",
  ];

  return (
    <main>
      <header className="header">
        <img src="/logo.png" className="logo" alt="MAPAS Technologies" />

        <nav>
          <a href="#services">Services</a>
          <a href="#why">Why MAPAS</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="call" href="tel:8861064794">
          Call 8861064794
        </a>
      </header>

      <section className="hero">
        <div>
          <p className="tag flow-small">
            Oracle • Middleware • Cloud • AI Automation
          </p>

          <h1 className="flow-title">
            <span>Enterprise</span>
            <span>Technology</span>
            <span>Support</span>
            <span>That</span>
            <span>Customers</span>
            <span>Can</span>
            <span>Trust</span>
          </h1>

          <p className="desc flow-desc">
            <span>MAPAS Technologies helps businesses solve Oracle middleware,</span>
            <span>integration, cloud and automation challenges</span>
            <span>with reliable solutions.</span>
          </p>

          <div className="buttons">
            <a href="#contact" className="primary">
              Talk to an Expert
            </a>
            <a href="#services" className="secondary">
              View Services
            </a>
          </div>
        </div>

        <div className="card">
          <h2>How MAPAS Helps You</h2>
          <p>✅ Resolve production issues faster</p>
          <p>✅ Improve Oracle middleware stability</p>
          <p>✅ Build secure cloud integrations</p>
          <p>✅ Automate manual workflows</p>
        </div>
      </section>

      <section id="services" className="section">
        <h2>Our Services</h2>

        <div className="grid">
          {services.map((item, index) => (
            <div className="service flow-card" key={item} style={{ animationDelay: `${index * 0.15}s` }}>
              <h3>{item}</h3>
              <p>
                Professional consulting, implementation, support and
                troubleshooting services for modern enterprises.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="why">
        <h2>Why Customers Choose MAPAS</h2>
        <p>Clear communication, strong technical depth and reliable delivery.</p>
      </section>

      <section id="contact" className="contact">
        <h2>Need help with Oracle, Cloud or Automation?</h2>
        <p>Contact MAPAS Technologies for expert support and consulting.</p>
        <a href="tel:8861064794">Call 8861064794</a>
      </section>

      <footer>© 2026 MAPAS Technologies. Solutions. Support. Success.</footer>
    </main>
  );
}
