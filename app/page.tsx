export default function Home() {
  const services = [
    {
      title: "Oracle WebCenter",
      desc: "Implementation, troubleshooting, migration, and performance guidance for Oracle WCC/IPM.",
    },
    {
      title: "Oracle Integration Cloud",
      desc: "OIC integrations, APIs, adapters, process automation, and enterprise connectivity.",
    },
    {
      title: "Cloud Migration",
      desc: "Move workloads to cloud platforms with better scalability and reliability.",
    },
    {
      title: "AI Automation",
      desc: "Automate workflows using intelligent AI-powered solutions.",
    },
    {
      title: "Middleware Support",
      desc: "Support for WebLogic, SOA, integrations, deployments, patches, and issues.",
    },
    {
      title: "Consulting & Training",
      desc: "Expert consulting and enterprise IT technical guidance.",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">
      {/* NAVBAR */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="MAPAS"
              className="h-14 object-contain"
            />
          </div>

          {/* MENU */}
          <nav className="hidden md:flex items-center gap-10 text-gray-300">
            <a href="#services" className="hover:text-cyan-400 transition">
              Services
            </a>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact Us
            </a>
          </nav>

          {/* PHONE */}
          <a
            href="tel:8861064794"
            className="border border-cyan-500 rounded-full px-6 py-3 text-cyan-400 hover:bg-cyan-500 hover:text-black transition font-semibold"
          >
            📞 8861064794
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-700/20 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <p className="text-cyan-400 font-semibold mb-4 text-lg">
              Enterprise Middleware • Cloud • AI Automation
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Modern Middleware & AI Solutions for Enterprise Growth
            </h1>

            <p className="mt-8 text-xl text-gray-400 leading-8">
              We help businesses transform, integrate, and scale with Oracle
              middleware, cloud, and intelligent automation solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href="#contact"
                className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-xl font-semibold text-lg transition"
              >
                Contact Us
              </a>

              <a
                href="#services"
                className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/10 transition text-lg"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* RIGHT HERO IMAGE */}
          <div className="relative flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200"
                alt="Cloud Technology"
                className="rounded-[30px] shadow-[0_0_80px_rgba(0,255,255,0.15)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-5">
          {[
            "Oracle Expertise",
            "Cloud Ready",
            "AI Automation",
            "Reliable Support",
          ].map((item) => (
            <div
              key={item}
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:border-cyan-500 transition"
            >
              <h3 className="text-xl font-semibold text-cyan-400">
                {item}
              </h3>
              <p className="text-gray-400 mt-3">
                Enterprise-grade technology solutions for modern businesses.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-6 lg:px-10 py-28"
      >
        <div className="mb-16">
          <p className="text-cyan-400 uppercase tracking-widest">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Technology Services for Modern Enterprises
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#0B0B0B] border border-white/10 rounded-3xl p-8 hover:border-cyan-500 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-5xl font-bold text-cyan-400">15+</h3>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-cyan-400">100+</h3>
            <p className="text-gray-400 mt-2">Projects Delivered</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-cyan-400">50+</h3>
            <p className="text-gray-400 mt-2">Enterprise Clients</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-cyan-400">24/7</h3>
            <p className="text-gray-400 mt-2">Support</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 lg:px-10 py-28"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-widest">
              Why MAPAS
            </p>

            <h2 className="text-5xl font-bold mt-4 leading-tight">
              Reliable technology partner for business transformation
            </h2>
          </div>

          <div className="space-y-5 text-lg text-gray-400">
            <p>✓ Enterprise-grade Oracle expertise</p>
            <p>✓ Fast issue analysis & resolution</p>
            <p>✓ Cloud & AI focused approach</p>
            <p>✓ Flexible support model</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="pb-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-cyan-600 to-blue-700 rounded-[40px] p-14">
          <h2 className="text-5xl font-bold text-black">
            Let’s build your digital platform
          </h2>

          <p className="text-black/80 mt-4 text-xl">
            Contact MAPAS for Oracle, middleware, cloud, and AI services.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="tel:8861064794"
              className="bg-black text-white px-8 py-4 rounded-xl font-semibold"
            >
              Call 8861064794
            </a>

            <a
              href="mailto:info@mapastech.com"
              className="border border-black px-8 py-4 rounded-xl text-black font-semibold"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 border-t border-white/10 py-8">
        © 2026 MAPAS. All rights reserved.
      </footer>
    </main>
  );
}
