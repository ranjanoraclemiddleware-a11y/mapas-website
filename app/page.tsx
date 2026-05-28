import "./style.css";

export default function Home() {
  return (
    <main>
      <header className="header">
        <img src="/logo.png" className="logo" />
        <nav>
          <a href="#services">Services</a>
          <a href="#why">Why MAPAS</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="call" href="tel:8861064794">Call 8861064794</a>
      </header>

      <section className="hero">
        <div>
          <p className="tag">Oracle • Middleware • Cloud • AI Automation</p>
          <h1>Enterprise Technology Support That Customers Can Trust</h1>
          <p className="desc">
            MAPAS Technologies helps businesses solve Oracle middleware,
            integration, cloud and automation challenges with reliable solutions.
          </p>
          <div className="buttons">
            <a href="#contact" className="primary">Talk to an Expert</a>
            <a href="#services" className="secondary">View Services</a>
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
          {[
            "Oracle WebCenter / IPM / Capture",
            "Oracle Integration Cloud",
            "WebLogic & Middleware Support",
            "Cloud & OCI Consulting",
            "AI & Automation",
            "Training & Consulting",
          ].map((item) => (
            <div className="service" key={item}>
              <h3>{item}</h3>
              <p>Professional consulting, implementation, support and troubleshooting services.</p>
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
        <a href="tel:8861064794">Call 8861064794</a>
      </section>

      <footer>© 2026 MAPAS Technologies. Solutions. Support. Success.</footer>
    </main>
  );
}
