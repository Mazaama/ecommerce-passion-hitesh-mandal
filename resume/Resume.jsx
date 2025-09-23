import React from "react";

// Enhanced Ecommerce Resume — added decorative hanging images and visual polish
export default function EcommerceResume() {
  return (
    <div className="relative min-h-screen bg-emerald-900 text-white font-sans overflow-hidden">
      {/* Subtle gradient overlay to make text pop over background */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/90 to-emerald-900/95 pointer-events-none" />

      {/* Decorative hanging / floating grocery icons (replace with your own images in public/) */}
      <img src="/hanging-basket.png" alt="basket" className="absolute w-14 h-14 left-6 top-6 animate-bounce opacity-95 drop-shadow-lg" />
      <img src="/hanging-apple.png" alt="apple" className="absolute w-12 h-12 right-6 top-10 animate-bounce delay-200 opacity-95 drop-shadow-lg" />
      <img src="/hanging-banana.png" alt="banana" className="absolute w-12 h-12 left-1/2 transform -translate-x-1/2 top-20 animate-bounce delay-500 opacity-90 drop-shadow-lg" />

      {/* Small decorative icons near sections */}
      <img src="/tomato.png" alt="tomato" className="absolute w-10 h-10 left-2 top-64 opacity-80" />
      <img src="/carrot.png" alt="carrot" className="absolute w-10 h-10 right-2 top-96 opacity-80" />
      <img src="/nuts.png" alt="nuts" className="absolute w-10 h-10 left-8 bottom-48 opacity-80" />

      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-emerald-800/80 backdrop-blur-sm shadow-md relative z-10 rounded-b-lg mx-6 mt-6">
        <div>
          <h1 className="text-2xl font-bold">Hitesh Kumar Ajay Kumar Mandal</h1>
          <p className="text-sm text-emerald-200">
            Store Incharge | Executive Buyer | Business Development | Sales & Marketing | Logistics
          </p>
        </div>
        <div className="text-right text-sm">
          <p>📞 +971-528235077 | +91-8850856825</p>
          <p>✉️ hiteshhothhh@gmail.com</p>
          <p>🌍 Abu Dhabi, UAE | Navi Mumbai, India</p>
          <a href="https://www.linkedin.com/in/hitesh-mandal-89100474" target="_blank" rel="noreferrer" className="underline text-emerald-300">
            LinkedIn
          </a>
        </div>
      </header>

      {/* Main content container */}
      <main className="relative z-10 max-w-6xl mx-auto mt-8 pb-20 px-6">
        {/* Summary + CTA */}
        <section className="bg-emerald-800/80 rounded-lg p-8 mb-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-extrabold mb-3">Results-driven Procurement & Store Management Professional</h2>
              <p className="text-emerald-200 max-w-xl">
                18+ years across UAE & India | Inventory, Procurement, Logistics, E-commerce, and Business Development | ADNOC compliance & Digital Transformation champion
              </p>

              <div className="mt-6 flex gap-4">
                <button className="bg-amber-400 text-emerald-900 px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transform transition">
                  🛒 Hire Me
                </button>
                <a href="#contact" className="bg-white text-emerald-800 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-100">
                  ⬇️ Download Resume
                </a>
              </div>
            </div>

            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mt-2 md:mt-0">
              <img src="/grocery-bag.png" alt="grocery bag" className="w-28 h-28" />
            </div>
          </div>
        </section>

        {/* Filters / Nav chips */}
        <nav className="mb-8 flex flex-wrap gap-3">
          {["Experience", "Education", "Certifications", "Skills", "Languages", "AI Tools", "Documents", "Family"].map((tab, i) => (
            <span key={i} className="px-4 py-2 bg-emerald-700 rounded-full cursor-pointer hover:bg-emerald-600 text-xs shadow-sm">{tab}</span>
          ))}
        </nav>

        {/* Experience grid with small price-tag badges */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Experience</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {/** Each card has a small icon and a floating "experience badge" */}
            <article className="bg-emerald-800 p-6 rounded-lg relative hover:-translate-y-1 transition-transform duration-200 shadow-md">
              <img src="/icon-store.png" alt="store" className="w-10 h-10 absolute -left-5 -top-5 bg-white rounded-full p-1 drop-shadow-md" />
              <div className="absolute top-3 right-3 bg-yellow-400 text-emerald-900 font-bold px-2 py-1 text-xs rounded-full">0.10 yrs</div>
              <h4 className="font-semibold">Store Incharge – Larsen & Toubro Ltd (2024–Present)</h4>
              <p className="text-sm text-emerald-200 mb-2">Abu Dhabi, ADNOC Gas Site</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Inventory & stock control across multi-category items</li>
                <li>Rental mobilization of DG sets, cranes, trailers, forklifts</li>
                <li>Material inspections, MRIR processing (Amogh)</li>
                <li>ADNOC compliance and workflow digitization</li>
              </ul>
            </article>

            <article className="bg-emerald-800 p-6 rounded-lg relative hover:-translate-y-1 transition-transform duration-200 shadow-md">
              <img src="/icon-team.png" alt="team" className="w-10 h-10 absolute -left-5 -top-5 bg-white rounded-full p-1 drop-shadow-md" />
              <div className="absolute top-3 right-3 bg-yellow-400 text-emerald-900 font-bold px-2 py-1 text-xs rounded-full">2.4 yrs</div>
              <h4 className="font-semibold">Unit Manager & Marketing – Dang Enterprises (2022–2024)</h4>
              <p className="text-sm text-emerald-200 mb-2">Navi Mumbai, India</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Led 100+ employees in sales, marketing, and warehouse ops</li>
                <li>Revenue growth via campaigns and e-commerce strategies</li>
                <li>Vendor relations, inventory optimization, and customer satisfaction</li>
              </ul>
            </article>

            <article className="bg-emerald-800 p-6 rounded-lg relative hover:-translate-y-1 transition-transform duration-200 shadow-md">
              <img src="/icon-ecom.png" alt="ecom" className="w-10 h-10 absolute -left-5 -top-5 bg-white rounded-full p-1 drop-shadow-md" />
              <div className="absolute top-3 right-3 bg-yellow-400 text-emerald-900 font-bold px-2 py-1 text-xs rounded-full">4.10 yrs</div>
              <h4 className="font-semibold">Business Development Coordinator – Hisuma Technologies (2017–2022)</h4>
              <p className="text-sm text-emerald-200 mb-2">Navi Mumbai, India</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Managed Amazon, BigBasket, Flipkart Grocery, Dunzo</li>
                <li>Negotiated JBPs, annual agreements, and festive launches</li>
                <li>Developed GTM strategies and improved e-commerce presence</li>
              </ul>
            </article>

            <article className="bg-emerald-800 p-6 rounded-lg relative hover:-translate-y-1 transition-transform duration-200 shadow-md">
              <img src="/icon-buy.png" alt="buy" className="w-10 h-10 absolute -left-5 -top-5 bg-white rounded-full p-1 drop-shadow-md" />
              <div className="absolute top-3 right-3 bg-yellow-400 text-emerald-900 font-bold px-2 py-1 text-xs rounded-full">5.5 yrs</div>
              <h4 className="font-semibold">Senior Executive Buyer – Fabtech Engineers & L&T (2012–2017)</h4>
              <p className="text-sm text-emerald-200 mb-2">Mumbai, India</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Procurement, vendor development, purchase orders</li>
                <li>Inventory control using Baan & ERP LN</li>
                <li>Vendor audits, cost optimization, and project planning</li>
              </ul>
            </article>

            {/* Remaining jobs */}
            <article className="bg-emerald-800 p-6 rounded-lg relative hover:-translate-y-1 transition-transform duration-200 shadow-md">
              <h4 className="font-semibold">Assistant Director & Payroll – PB Engineerings (2011)</h4>
              <p className="text-sm text-emerald-200 mb-2">Powai, India</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Payroll across 4 sites, PF compliance, expense tracking</li>
              </ul>
            </article>

            <article className="bg-emerald-800 p-6 rounded-lg relative hover:-translate-y-1 transition-transform duration-200 shadow-md">
              <h4 className="font-semibold">Computer Operator – Zilan Xerox (2010)</h4>
              <p className="text-sm text-emerald-200 mb-2">Mumbai, India</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Document processing, stationery management, and customer support</li>
              </ul>
            </article>

            <article className="bg-emerald-800 p-6 rounded-lg relative hover:-translate-y-1 transition-transform duration-200 shadow-md">
              <h4 className="font-semibold">Branch Assistant & Salesman – Osiyaji (2009)</h4>
              <p className="text-sm text-emerald-200 mb-2">Andheri, India</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Sales execution, customer assistance, inventory handling</li>
              </ul>
            </article>

            <article className="bg-emerald-800 p-6 rounded-lg relative hover:-translate-y-1 transition-transform duration-200 shadow-md">
              <h4 className="font-semibold">Mechanic – Gyani Garage (2005–2008)</h4>
              <p className="text-sm text-emerald-200 mb-2">Mumbai, India</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Two-wheeler repairs, troubleshooting, and customer service</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-8 bg-emerald-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-3">Education & Certifications</h3>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>Diplomas in Supply Chain, Warehouse, Polymer Physics, Industrial Engineering (Alison)</li>
            <li>Google Digital Garage – Fundamentals of Digital Marketing</li>
            <li>Great Learning Academy – Digital Marketing, Luxury Brand Mgmt, Blogging</li>
            <li>ERP LN & Baan Training, GST Awareness, Microsoft Power BI Certified</li>
            <li>Social Media Marketing: LinkedIn, Facebook, Instagram, YouTube, SEO, SEM</li>
          </ul>
        </section>

        {/* AI Tools */}
        <section className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-emerald-800 p-4 rounded shadow-sm">🤖 ChatGPT</div>
          <div className="bg-emerald-800 p-4 rounded shadow-sm">🎨 DALL·E</div>
          <div className="bg-emerald-800 p-4 rounded shadow-sm">📊 Gemini AI</div>
          <div className="bg-emerald-800 p-4 rounded shadow-sm">💻 Copilot</div>
        </section>

        {/* Skills */}
        <section className="mb-8 bg-emerald-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-3">Skills & Expertise</h3>
          <div className="flex flex-wrap gap-3 text-xs">
            {["Inventory Management", "Procurement", "E-commerce", "Digital Marketing", "Vendor Relations", "ERP (SAP, Oracle, Odoo)", "MS Office", "Google Workspace", "Power BI", "Leadership", "Negotiation", "Logistics", "SEO & SEM", "CRM Tools", "Project Management", "Problem Solving", "HSE Knowledge", "AI Tools", "Strategic Thinking"].map((skill, i) => (
              <span key={i} className="bg-emerald-700 px-3 py-1 rounded-full">{skill}</span>
            ))}
          </div>
        </section>

        {/* Languages & Documents & Family compact cards */}
        <section className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-emerald-800 p-4 rounded shadow-sm">
            <h4 className="font-semibold">Languages</h4>
            <p className="text-sm text-emerald-200">Arabic (Intermediate) | English (Fluent) | Hindi (Native) | Marathi (Fluent) | Gujarati (Intermediate)</p>
          </div>
          <div className="bg-emerald-800 p-4 rounded shadow-sm">
            <h4 className="font-semibold">Documents</h4>
            <p className="text-sm text-emerald-200">Aadhar, PAN, Passport, Visa, Emirates ID, Educational Certificates, Work Experience Certificates</p>
          </div>
          <div className="bg-emerald-800 p-4 rounded shadow-sm">
            <h4 className="font-semibold">Family</h4>
            <p className="text-sm text-emerald-200">Lives with Father, Younger Brother, Wife, and Two Daughters (1 & 4 years old)</p>
          </div>
        </section>

        {/* Contact form (anchor target) */}
        <section id="contact" className="bg-emerald-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-3">Get in Touch</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold">Contact Information</p>
              <p className="text-sm mt-2">📞 +971-528235077 | +91-8850856825</p>
              <p className="text-sm">✉️ hiteshhothhh@gmail.com</p>
              <p className="text-sm">🌍 Abu Dhabi, UAE | Navi Mumbai, India</p>
            </div>
            <form className="space-y-3">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input id="name" className="w-full px-3 py-2 rounded text-black" type="text" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input id="email" className="w-full px-3 py-2 rounded text-black" type="email" />
              </div>
              <div>
                <label htmlFor="msg" className="block mb-1">Message</label>
                <textarea id="msg" className="w-full px-3 py-2 rounded text-black" rows={3} />
              </div>
              <button className="bg-amber-400 text-emerald-900 px-4 py-2 rounded font-semibold">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer with app download buttons */}
      <footer className="fixed bottom-6 left-0 right-0 z-20">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4">
          <div className="bg-emerald-900/90 text-emerald-200 px-4 py-2 rounded shadow-md">© {new Date().getFullYear()} Hitesh Mandal</div>
          <div className="flex items-center gap-4">
            <a href="#" className="shadow-lg"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10" /></a>
            <a href="#" className="shadow-lg"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
