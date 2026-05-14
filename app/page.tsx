export default function MAPASLandingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-wide text-cyan-400">MAPAS</h1>
            <p className="text-sm text-gray-400">Oracle Fusion Middleware & WCC Experts</p>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#services" className="hover:text-cyan-400">Services</a>
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#jobs" className="hover:text-cyan-400">Freelancing Jobs</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-cyan-400 uppercase tracking-widest mb-3">Enterprise Middleware Solutions</p>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Connecting Businesses With <span className="text-cyan-400">Oracle Experts</span>
          </h2>

          <p className="text-lg text-gray-300 mb-8 leading-8">
            MAPAS helps customers with Oracle WebCenter Content (WCC), Oracle Fusion Middleware,
            WebLogic, SOA, OIC, UCM, Capture/IPM and enterprise integrations. We also connect
            skilled freelancers with global Oracle projects.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-2xl font-semibold shadow-lg">
              Start Your Project
            </button>

            <button className="border border-gray-700 hover:border-cyan-400 px-6 py-3 rounded-2xl">
              Join as Freelancer
            </button>
          </div>
        </div>

        <div>
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-gray-800 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
                <h3 className="text-cyan-400 font-bold text-lg">WCC</h3>
                <p className="text-sm text-gray-400 mt-2">Oracle WebCenter Content Support & Migration</p>
              </div>

              <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
                <h3 className="text-cyan-400 font-bold text-lg">SOA</h3>
                <p className="text-sm text-gray-400 mt-2">SOA Suite Integrations & APIs</p>
              </div>

              <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
                <h3 className="text-cyan-400 font-bold text-lg">OIC</h3>
                <p className="text-sm text-gray-400 mt-2">Oracle Integration Cloud Solutions</p>
              </div>

              <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
                <h3 className="text-cyan-400 font-bold text-lg">WebLogic</h3>
                <p className="text-sm text-gray-400 mt-2">Installation, Patching & Administration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-900/50 py-20 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              End-to-end Oracle middleware consulting and freelance project support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-950 p-8 rounded-3xl border border-gray-800 hover:border-cyan-400 transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">WCC Consulting</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• WCC Installation & Configuration</li>
                <li>• Content Migration</li>
                <li>• Security & LDAP Integration</li>
                <li>• Performance Tuning</li>
              </ul>
            </div>

            <div className="bg-gray-950 p-8 rounded-3xl border border-gray-800 hover:border-cyan-400 transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Fusion Middleware</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• WebLogic Administration</li>
                <li>• SOA Suite Support</li>
                <li>• Oracle HTTP Server</li>
                <li>• Enterprise Patching</li>
              </ul>
            </div>

            <div className="bg-gray-950 p-8 rounded-3xl border border-gray-800 hover:border-cyan-400 transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Freelancing Jobs</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Contract Opportunities</li>
                <li>• Remote Oracle Projects</li>
                <li>• Global Client Connections</li>
                <li>• Resume Shortlisting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Why MAPAS?</h2>

          <p className="text-gray-300 leading-8 mb-6">
            MAPAS is focused on enterprise Oracle technologies with practical production-level
            support experience. We help organizations solve complex middleware problems and
            connect them with experienced freelance consultants.
          </p>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
              <h3 className="text-3xl font-bold text-cyan-400">10+</h3>
              <p className="text-gray-400 mt-2">Years Experience</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
              <h3 className="text-3xl font-bold text-cyan-400">24/7</h3>
              <p className="text-gray-400 mt-2">Support Availability</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl border border-gray-800 p-10">
          <h3 className="text-2xl font-bold mb-6">Technologies We Support</h3>

          <div className="flex flex-wrap gap-4">
            {[
              'Oracle WCC',
              'WebLogic',
              'SOA Suite',
              'Oracle IPM',
              'Oracle Capture',
              'OIC',
              'Java',
              'Linux',
              'OCI',
              'Oracle DB'
            ].map((tech) => (
              <span
                key={tech}
                className="bg-gray-900 border border-gray-700 px-4 py-2 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section id="jobs" className="bg-gray-900/50 py-20 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Freelancing Opportunities</h2>

          <p className="text-gray-400 max-w-3xl mx-auto leading-8 mb-10">
            Looking for Oracle Fusion Middleware freelancers? Or searching for Oracle projects?
            MAPAS helps companies and consultants connect faster.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-gray-950 border border-gray-800 rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Remote WCC Admin</h3>
              <p className="text-gray-400 text-sm">Contract | Remote | Oracle WebCenter Content</p>
            </div>

            <div className="bg-gray-950 border border-gray-800 rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">SOA Consultant</h3>
              <p className="text-gray-400 text-sm">Freelance | Integration Projects</p>
            </div>

            <div className="bg-gray-950 border border-gray-800 rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">WebLogic Expert</h3>
              <p className="text-gray-400 text-sm">Production Support | Middleware</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Build MAPAS Together</h2>

        <p className="text-gray-400 leading-8 mb-10 max-w-3xl mx-auto">
          Start with a professional Oracle middleware services platform and grow into a global
          freelancing network for enterprise technologies.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-2xl font-semibold">
            Contact MAPAS
          </button>

          <button className="border border-gray-700 hover:border-cyan-400 px-8 py-4 rounded-2xl">
            Upload Resume
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        © 2026 MAPAS Technologies | Oracle Fusion Middleware & WCC Consulting
      </footer>
    </div>
  )
}
