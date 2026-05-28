export default function Home() {
  const services = [
    {
      title: "Oracle WebCenter / IPM / Capture",
      desc: "Implementation, support, troubleshooting, migration and performance tuning for Oracle WCC, IPM and Capture.",
    },
    {
      title: "Oracle Integration Cloud",
      desc: "Build secure integrations using OIC, APIs, adapters, process automation and enterprise connectivity.",
    },
    {
      title: "WebLogic & Middleware Support",
      desc: "Support for WebLogic, SOA, BPM, deployments, patching, monitoring and production issue resolution.",
    },
    {
      title: "Cloud & OCI Consulting",
      desc: "Cloud migration planning, OCI guidance, architecture review and deployment support.",
    },
    {
      title: "AI & Automation",
      desc: "Automate business workflows, document processing and repetitive enterprise tasks using AI solutions.",
    },
    {
      title: "Training & Consulting",
      desc: "Hands-on technical consulting, team enablement and practical enterprise training.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center">
            <img src="/logo.png" alt="MAPAS Technologies" className="h-16 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#why" className="hover:text-blue-700">Why MAPAS</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </nav>

          <a
            href="tel:8861064794"
            className="rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white hover:bg-blue-800"
          >
            Call 8861064794
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-4 font-bold text-blue-700">
              Oracle • Middleware • Cloud • AI Automation
            </p>

            <h1 className="text-4xl font-extrabold leading-tight text-slate-950 md:text-6xl">
              Enterprise Technology Support That Customers Can Trust
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              MAPAS Technologies helps businesses solve Oracle middleware,
              integration, cloud and automation challenges with practical,
              reliable and cost-effective solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-blue-700 px-8 py-4 font-bold text-white hover:bg-blue-800"
              >
                Talk to an Expert
              </a>

              <a
                href="#services"
                className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-bold text-slate-800 hover:border-blue-700 hover:text-blue-700"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
            <h2 className="text-2xl font-extrabold text-slate-950">
              How MAPAS Helps You
            </h2>

            <div className="mt-6 space-y-4">
              {[
                "Resolve production issues faster",
                "Improve Oracle middleware stability",
                "Build secure cloud integrations",
                "Automate manual business workflows",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-blue-50 p-5 font-semibold text-slate-700">
                  ✅ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 text-center md:grid-cols-4">
          <div>
            <h3 className="text-3xl font-extrabold text-blue-700">15+</h3>
            <p className="text-sm text-slate-600">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-blue-700">Oracle</h3>
            <p className="text-sm text-slate-600">Middleware Expertise</p>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-blue-700">Cloud</h3>
            <p className="text-sm text-slate-600">Ready Solutions</p>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-blue-700">24/7</h3>
            <p className="text-sm text-slate-600">Support Focus</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="font-bold uppercase tracking-widest text-blue-700">
            Our Services
          </p>
          <h2 className="mt-3 text-4xl font-extrabold text-slate-950">
            Practical enterprise IT services for real business problems
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-xl font-extrabold text-slate-950">
                {service.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section id="why" className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-cyan-300">
              Why Customers Choose MAPAS
            </p>
            <h2 className="mt-4 text-4xl font-extrabold">
              Clear communication, strong technical depth and reliable delivery
            </h2>
          </div>

          <div className="grid gap-4">
            {[
              "Deep Oracle middleware and WebCenter experience",
              "Fast troubleshooting and RCA support",
              "Cloud and AI-ready solution approach",
              "Flexible support for startups and enterprises",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white/10 p-5">
                ✅ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-blue-700 p-10 text-white md:p-14">
          <h2 className="text-4xl font-extrabold">
            Need help with Oracle, Cloud or Automation?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Contact MAPAS Technologies today for expert technical support and consulting.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:8861064794"
              className="rounded-xl bg-white px-8 py-4 font-bold text-blue-700"
            >
              Call 8861064794
            </a>

            <a
              href="mailto:info@mapastech.com"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 text-center text-slate-500">
        © 2026 MAPAS Technologies. Solutions. Support. Success.
      </footer>
    </main>
  );
}
