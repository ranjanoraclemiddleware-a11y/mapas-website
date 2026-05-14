export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO SECTION */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              MAPAS Technologies
            </h1>

            <p className="text-xl text-gray-300 mb-6">
              Oracle WebCenter Content (WCC), WebLogic, SOA & Enterprise
              Production Support Services.
            </p>

            <p className="text-gray-400 mb-8">
              Specialized consulting for Oracle middleware, content management,
              troubleshooting, upgrades, migration and production support.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#services"
                className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
              >
                Our Services
              </a>

              <a
                href="#contact"
                className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-4">
              Enterprise Expertise
            </h2>

            <ul className="space-y-3 text-gray-300">
              <li>✔ Oracle WebCenter Content (WCC)</li>
              <li>✔ Oracle IPM / Capture</li>
              <li>✔ WebLogic Administration</li>
              <li>✔ SOA Suite Troubleshooting</li>
              <li>✔ Production Support</li>
              <li>✔ Migration & Upgrades</li>
              <li>✔ Performance Tuning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About MAPAS</h2>

          <p className="text-lg text-gray-600 leading-8">
            MAPAS Technologies focuses on Oracle enterprise solutions,
            especially Oracle WebCenter Content, WebLogic Server, SOA and
            enterprise middleware support.
          </p>

          <p className="text-lg text-gray-600 leading-8 mt-6">
            We help businesses manage production systems, resolve critical
            incidents, perform upgrades, and improve enterprise application
            stability.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-20 px-6 bg-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Oracle WCC Support",
                desc: "Production support, troubleshooting, integrations and administration.",
              },
              {
                title: "WebLogic Administration",
                desc: "Server setup, patching, performance tuning and monitoring.",
              },
              {
                title: "SOA & Middleware",
                desc: "SOA Suite troubleshooting, deployments and enterprise integrations.",
              },
              {
                title: "Upgrade & Migration",
                desc: "Version upgrades, migration planning and execution support.",
              },
              {
                title: "Incident Management",
                desc: "Critical production issue analysis and resolution support.",
              },
              {
                title: "Consulting Services",
                desc: "Architecture guidance and Oracle middleware best practices.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 px-6 bg-black text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

          <p className="text-gray-300 text-lg mb-8">
            Looking for Oracle middleware consulting or production support?
          </p>

          <div className="space-y-4 text-lg">
            <p>📧 info@mapastech.com</p>
            <p>📞 +91-XXXXXXXXXX</p>
            <p>🌐 www.mapastech.com</p>
            <p>🔗 LinkedIn: MAPAS Technologies</p>
          </div>
        </div>
      </section>
    </main>
  );
}
