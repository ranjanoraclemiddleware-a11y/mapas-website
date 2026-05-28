export default function Home() {
  const services = [
    {
      title: "Oracle WebCenter",
      desc: "Implementation, troubleshooting, migration, and support for Oracle WCC, IPM and Capture.",
    },
    {
      title: "Oracle Integration Cloud",
      desc: "OIC integrations, APIs, adapters, process automation and enterprise connectivity.",
    },
    {
      title: "Cloud & OCI",
      desc: "Cloud-ready architecture, deployment support, migration planning and infrastructure guidance.",
    },
    {
      title: "AI Automation",
      desc: "AI-powered workflow automation, document intelligence and business productivity solutions.",
    },
    {
      title: "Middleware Support",
      desc: "WebLogic, SOA, BPM, AIA, deployments, patches, performance and issue resolution.",
    },
    {
      title: "Consulting & Training",
      desc: "Practical enterprise consulting, technical support and hands-on training.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.png" alt="MAPAS Technologies" className="h-14 w-auto" />
          </a>

          <nav className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#services" className="hover:text-cyan-400">Services</a>
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#contact" className="hover:text-cyan-400">Contact Us</a>
          </nav>

          <a
            href="tel:8861064794"
            className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-300"
          >
            📞 8861064794
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0ea5e966,transparent_35%),radial-gradient(circle_at_bottom_left,#2563eb66,transparent_35%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-cyan-300 font-semibold mb-5">
              Enterprise Middleware • Cloud • AI Automation
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Modern Middleware & AI Solutions for Enterprise Growth
            </h1>

            <p className="mt-7 text-xl text-slate-300 leading-8">
              MAPAS Technologies helps businesses transform, integrate and scale
              with Oracle expertise, cloud solutions and intelligent automation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-cyan-400 px-8 py-4 font-bold text-slate-950 hover:bg-cyan-300"
              >
                Contact Us
              </a>
              <a
                href="#services"
                className="rounded-xl border border-white/20 px-8 py-4 font-semibold hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl">
            <img
              src="/logo.png"
              alt="MAPAS Logo"
              className="mx-auto max-h-72 w-full object-contain rounded-3xl bg-white p-8"
            />
            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="rounded-2xl bg-slate-900 p-5">
                <h3 className="text-3xl font-bold text-cyan-300">15+</h3>
                <p className="text-slate-400">Years Experience</p>
              </div>
              <div className="rounded-2xl bg-slate-900 p-5">
                <h3 className="text-3xl font-bold text-cyan-300">24/7</h3>
                <p className="text-slate-400">Support Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-5">
        {["Oracle Expertise", "Cloud Ready", "AI Automation", "Reliable Support"].map((item) => (
          <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-cyan-300">{item}</h3>
            <p className="mt-3 text-slate-400">
              Enterprise-grade technology solutions for modern businesses.
            </p>
          </div>
        ))}
      </section>

      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-cyan-300 uppercase tracking-widest font-semibold">
          Our Services
        </p>
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
          Technology Services for Modern Enterprises
        </h2>

        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-slate-900 p-8 hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="mt-4 text-slate-400 leading-7">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-white text-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-700 uppercase tracking-widest font-semibold">
              Why MAPAS
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
              Reliable technology partner for business transformation
            </h2>
          </div>

          <div className="grid gap-4 text-lg">
            <p>✅ Enterprise-grade Oracle expertise</p>
            <p>✅ Fast issue analysis and resolution</p>
            <p>✅ Cloud and AI focused approach</p>
            <p>✅ Flexible support model</p>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-[2.5rem] bg-gradient-to-r from-cyan-400 to-blue-600 p-10 md:p-16 text-slate-950">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Let’s build your digital platform
          </h2>
          <p className="mt-4 text-xl">
            Contact MAPAS for Oracle, middleware, cloud and AI services.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="tel:8861064794"
              className="rounded-xl bg-slate-950 px-8 py-4 font-bold text-white"
            >
              Call 8861064794
            </a>
            <a
              href="mailto:info@mapastech.com"
              className="rounded-xl border border-slate-950 px-8 py-4 font-bold"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-slate-400">
        © 2026 MAPAS Technologies. Solutions. Support. Success.
      </footer>
    </main>
  );
}
