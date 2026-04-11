export default function Home() {
  return (
    <main className="bg-gradient-to-br from-black via-slate-900 to-indigo-900 text-white min-h-screen">

      {/* HEADER */}
      <header className="flex justify-between items-center px-8 py-6 backdrop-blur-md bg-white/5 sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-wide">MAPAS</h1>

        <div className="hidden md:flex gap-6 text-gray-300">
          <span className="hover:text-white cursor-pointer">Services</span>
          <span className="hover:text-white cursor-pointer">Solutions</span>
          <span className="hover:text-white cursor-pointer">About</span>
          <span className="hover:text-white cursor-pointer">Contact</span>
        </div>

        <button className="bg-green-500 text-black px-5 py-2 rounded-xl hover:bg-green-400">
          Book Call
        </button>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-28 px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          UPGRADE. OPTIMIZE. AUTOMATE.
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Oracle WCC, Middleware, Cloud (OCI) & AI Solutions — All in One Place
        </p>

        <div className="flex gap-4">
          <button className="bg-green-500 text-black rounded-xl px-6 py-3 hover:scale-105 transition">
            Get Free Consultation
          </button>

          <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
            Explore Services
          </button>
        </div>

        <p className="mt-10 text-gray-400">
          MAPAS – Make A Path And Succeed
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Oracle WCC", desc: "Content, Imaging, Capture, Workflow" },
            { title: "Middleware", desc: "SOA, OIC, OSB Integration" },
            { title: "Identity", desc: "OIM, OAM Security" },
            { title: "ERP", desc: "Oracle EBS Solutions" },
            { title: "Cloud (OCI)", desc: "Migration & Architecture" },
            { title: "AI / GenAI", desc: "Automation & Intelligence" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:scale-105 hover:border-green-400 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI SECTION */}
      <section className="py-20 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">
          AI-Powered Oracle Transformation
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Leverage AI/ML and Generative AI to automate document processing,
          enhance workflows, and integrate intelligence into your Oracle ecosystem.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Transform Your Oracle Systems?
        </h3>

        <button className="bg-green-500 text-black rounded-xl px-6 py-3 hover:scale-105 transition">
          Get Started
        </button>
      </section>
      {/* CONTACT */}
<section className="py-20 px-8 text-center">
  <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

  <form className="max-w-xl mx-auto space-y-4">
    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-3 rounded-xl bg-white/10 border border-white/20"
    />

    <input
      type="email"
      placeholder="Your Email"
      className="w-full p-3 rounded-xl bg-white/10 border border-white/20"
    />

    <textarea
      placeholder="Your Requirement"
      rows={4}
      className="w-full p-3 rounded-xl bg-white/10 border border-white/20"
    />

    <button className="bg-green-500 text-black px-6 py-3 rounded-xl">
      Submit
    </button>
  </form>
</section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-400 border-t border-white/10">
        MAPAS – Make A Path And Succeed
      </footer>

    </main>
  );
}