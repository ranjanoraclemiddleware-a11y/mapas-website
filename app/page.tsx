export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="MAPAS Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold tracking-wide">MAPAS</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact Us</a>
        </div>

        <a
          href="tel:8861064794"
          className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-black hover:bg-cyan-400"
        >
          Call: 8861064794
        </a>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 md:px-16 py-24">
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute left-20 bottom-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative max-w-4xl">
          <p className="mb-4 text-cyan-400 font-semibold">
            Enterprise Middleware • Cloud • AI Automation
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Modern Middleware & AI Solutions for Enterprise Growth
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            MAPAS helps businesses with Oracle WebCenter, OIC, cloud migration,
            automation, support, and enterprise technology consulting.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 text-center font-semibold text-black"
            >
              Contact Us
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/20 px-8 py-3 text-center font-semibold text-white hover:bg-white/10"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Trust / Stats */}
      <section className="px-6 md:px-16 py-10 border-y border-white/10 bg-white/[0.03]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold text-cyan-400">15+</h3>
            <p className="text-gray-400 text-sm">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-cyan-400">Oracle</h3>
            <p className="text-gray-400 text-sm">Middleware Expertise</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-cyan-400">Cloud</h3>
            <p className="text-gray-400 text-sm">Migration Support</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-cyan-400">AI</h3>
            <p className="text-gray-400 text-sm">Automation Ready</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 md:px-16 py-20">
        <div className="max-w-3xl mb-12">
          <p className="text-cyan-400 font-semibold mb-3">Our Services</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Technology services designed for modern enterprises
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Oracle WebCenter",
              desc: "Implementation, support, troubleshooting, migration, and performance guidance for Oracle WCC/IPM.",
            },
            {
              title: "Oracle Integration Cloud",
              desc: "OIC integrations, APIs, adapters, process automation, and enterprise connectivity.",
            },
            {
              title: "Cloud Migration",
              desc: "Move applications and workloads to cloud platforms with better scalability and reliability.",
            },
            {
              title: "AI Automation",
              desc: "Automate business workflows using AI-powered solutions and intelligent process design.",
            },
            {
              title: "Middleware Support",
              desc: "Support for WebLogic, SOA, integrations, deployments, patches, and production issues.",
            },
            {
              title: "Consulting & Training",
              desc: "Expert consulting, technical guidance, and training for enterprise IT teams.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.07] transition"
            >
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 md:px-16 py-20 bg-white/[0.03]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-cyan-400 font-semibold mb-3">Why MAPAS</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Reliable technology partner for business transformation
            </h2>
            <p className="text-gray-300 text-lg">
              We combine enterprise middleware experience with modern cloud and
              AI capabilities to deliver practical, scalable, and cost-effective
              solutions.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Enterprise-grade Oracle expertise",
              "Fast issue analysis and resolution",
              "Cloud and automation focused approach",
              "Flexible support for growing businesses",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-[#0b1020] p-5 text-gray-200"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-16 py-20">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-10 md:p-14 text-black">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Let’s build your digital platform
          </h2>
          <p className="max-w-2xl text-lg mb-8">
            Contact MAPAS for Oracle, middleware, cloud, AI automation, and
            enterprise technology services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:8861064794"
              className="rounded-full bg-black px-8 py-3 text-center font-semibold text-white"
            >
              Call 8861064794
            </a>

            <a
              href="mailto:info@mapas.com"
              className="rounded-full border border-black px-8 py-3 text-center font-semibold"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-8 border-t border-white/10 text-center text-gray-500">
        © 2026 MAPAS. All rights reserved.
      </footer>
    </main>
  );
}
