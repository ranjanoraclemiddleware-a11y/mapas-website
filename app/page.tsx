import "./style.css";

export default function Home() {
  return (
    <main>
      <header className="header">
        <img src="/logo.png" className="logo" alt="MAPAS Technologies" />

        <nav>
          <a href="#services">Services</a>
          <a href="#ai">AI Platform</a>
          <a href="#founder">Founder</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="call" href="tel:8861064794">Call MAPAS</a>
      </header>

      <section className="hero">
        <div>
          <p className="tag">Oracle • Middleware • Cloud • AI Automation</p>

          <h1 className="flow-title">
            <span>Enterprise</span>
            <span>Technology</span>
            <span>Support</span>
            <span>That</span>
            <span>Customers</span>
            <span>Can</span>
            <span>Trust</span>
          </h1>

          <p className="desc">
            MAPAS Technologies helps businesses solve Oracle middleware,
            integration, cloud and automation challenges with reliable
            enterprise solutions.
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

      <section id="services" className="oracle-services">
        <div className="service-group">
          <h2>Infrastructure</h2>
          <div className="oracle-box-row">
            {["Oracle WebCenter", "Oracle IPM", "Oracle Capture", "Oracle Integration Cloud"].map((item) => (
              <div className="oracle-box" key={item}>{item}</div>
            ))}
          </div>
        </div>

        <div className="service-group">
          <h2>Applications</h2>
          <div className="oracle-box-row">
            {["WebLogic", "SOA", "Cloud & OCI", "AI Automation", "Training", "Consulting"].map((item) => (
              <div className="oracle-box" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="ai" className="ai-platform">
        <div className="ai-left">
          <h2>AI Data Platform</h2>

          <h3>AI Models in MAPAS Cloud</h3>
          <p>Google Gemini, Meta Llama, OpenAI ChatGPT, xAI Grok, and enterprise AI models.</p>

          <h3>AI Data Catalog</h3>
          <p>
            Unifies private structured and unstructured business data without moving it,
            using a secure AI-ready data catalog.
          </p>

          <a href="#contact">Get started with AI Data Catalog</a>

          <h3>AI Automation Workbench</h3>
          <p>
            Build AI applications, workflows, document automation, chatbots,
            and business process automation on enterprise data.
          </p>

          <a href="#contact">Get started with AI Workbench</a>
          <br />
          <a href="#contact" className="learn-btn">Learn More</a>
        </div>

        <div className="ai-right">
          <div className="circle top">Multimodal<br />AI Models</div>
          <div className="circle left">Public Data</div>
          <div className="circle right">Private Data<br />Lakehouse</div>

          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>

          <div className="ai-note">
            <h3>AI models reason on private data</h3>
            <p>All private data unified in MAPAS data catalog</p>
          </div>
        </div>
      </section>

      <section id="founder" className="founder">
        <div className="founder-image-wrap">
          <img src="/rajeev.jpg" alt="Rajeev Ranjan" className="founder-image" />
        </div>

        <div className="founder-content">
          <p className="tag">Founder of MAPAS</p>
          <h2>Rajeev Ranjan</h2>
          <p>
            Helping enterprises solve Oracle middleware, WebCenter,
            cloud, automation and integration challenges with practical
            and enterprise-grade solutions.
          </p>

          <div className="skills">
            <span>Oracle WCC</span>
            <span>OIC</span>
            <span>Cloud</span>
            <span>AI Automation</span>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Need Help with Oracle, Cloud or Automation?</h2>
        <p>Contact MAPAS Technologies for enterprise support and consulting.</p>
        <a href="tel:8861064794">Call MAPAS</a>
      </section>

      <footer>
        © 2026 MAPAS Technologies. Solutions. Support. Success.
      </footer>
    </main>
  );
}
