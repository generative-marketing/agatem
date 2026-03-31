"use client";

import Image from "next/image";

const whatsappNumber = "2348159711247";

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const stats = [
  {
    value: "25.9%",
    label: "share of global malaria cases attributed to Nigeria in 2023",
  },
  {
    value: "30.9%",
    label: "share of global malaria deaths attributed to Nigeria in 2023",
  },
  {
    value: "97%",
    label: "of Nigerians estimated to live at risk of malaria",
  },
];

const trustItems = [
  "NAFDAC Registered",
  "OTC Category",
  "Adult and Paediatric Variants",
  "Bulk Buyer Ready",
  "Grohe Pharmaceuticals",
];

const features = [
  {
    title: "Commercially Positioned",
    text: "Built for retail pharmacies, drug wholesalers, and hospitals looking for reliable anti-malaria supply.",
  },
  {
    title: "Clear Product Range",
    text: "AGATEM is available in adult and paediatric variants with pack formats that support institutional demand.",
  },
  {
    title: "Trusted Registration",
    text: "Backed by NAFDAC registration and listed under the Over The Counter category for approved indications.",
  },
  {
    title: "Fast Buyer Access",
    text: "The page is designed to move serious buyers directly into a WhatsApp conversation with sales.",
  },
];

const products = [
  {
    name: "AGATEM 80/480 Tablets",
    dosage: "Artemether 80 mg + Lumefantrine 480 mg",
    pack: "Approved pack size: 1 x 6 tablets. Adult option.",
    image: "/product-adult.jpg",
    badge: "NAFDAC Reg. No. A4-101253",
  },
  {
    name: "AGATEM 20/120 Tablets",
    dosage: "Artemether 20 mg + Lumefantrine 120 mg",
    pack: "Approved presentation includes 1 x 24 ALU-PVC blister. Paediatric option.",
    image: "/product-paediatric.jpg",
    badge: "NAFDAC Reg. No. A4-101254",
  },
  {
    name: "AGATEM Product Family",
    dosage: "Retail, paediatric, and commercial supply presentation",
    pack: "Suitable for bulk buyer conversations and commercial onboarding.",
    image: "/hero-family.jpg",
    badge: "Grohe Pharmaceuticals",
  },
];

const buyers = [
  {
    title: "Retail Pharmacies",
    text: "Reliable anti-malaria stock for daily movement and walk-in demand.",
  },
  {
    title: "Drug Wholesalers",
    text: "Positioned for larger commercial conversations and repeat supply.",
  },
  {
    title: "Hospitals / Clinics",
    text: "Suitable for treatment access discussions and institutional procurement.",
  },
];

const steps = [
  "Submit your interest",
  "Speak to sales",
  "Receive pricing and product details",
  "Move into onboarding and supply discussion",
];

export default function HomePage() {
  // function handleSubmit(formData: FormData) {
  //   const payload = {
  //     fullName: String(formData.get("fullName") || "").trim(),
  //     businessName: String(formData.get("businessName") || "").trim(),
  //     phone: String(formData.get("phone") || "").trim(),
  //     email: String(formData.get("email") || "").trim(),
  //     location: String(formData.get("location") || "").trim(),
  //     businessType: String(formData.get("businessType") || "").trim(),
  //     message: String(formData.get("message") || "").trim(),
  //   };

  //   if (!payload.fullName || !payload.businessName || !payload.phone) {
  //     window.alert(
  //       "Please fill in Full Name, Business Name, and Phone Number.",
  //     );
  //     return;
  //   }

  //   const message =
  //     `Hello, I would like to request AGATEM distributor pricing.\n\n` +
  //     `Full Name: ${payload.fullName}\n` +
  //     `Business Name: ${payload.businessName}\n` +
  //     `Phone Number: ${payload.phone}\n` +
  //     `Email Address: ${payload.email}\n` +
  //     `State / Location: ${payload.location}\n` +
  //     `Business Type: ${payload.businessType}\n` +
  //     `Message: ${payload.message}`;

  //   window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  // }

  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" aria-label="AGATEM home">
            <div className="brand-mark">AGATEM</div>
            <div className="brand-sub">Grohe Pharmaceuticals</div>
          </a>

          <nav className="nav" aria-label="Primary">
            <a href="#about">Why AGATEM</a>
            <a href="#products">Products</a>
            <a href="#buyers">Buyers</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            className="header-cta"
            href={buildWhatsAppUrl(
              "Hello, I want to speak to sales about AGATEM.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="reveal in">
            <div className="eyebrow">
              NAFDAC Registered • Bulk Buyer Focused
            </div>
            <h1>
              Trusted Anti-Malaria Treatment for Pharmacies, Hospitals, and
              Distributors
            </h1>
            <p className="hero-copy">
              AGATEM by Grohe Pharmaceuticals is an Artemether and Lumefantrine
              product line positioned for reliable malaria treatment access
              across Nigeria with adult, paediatric, and bulk-ready options.
            </p>
            <div className="hero-note">
              Nigeria accounted for about 25.9% of global malaria cases in 2023,
              about 30.9% of global malaria deaths, and about 97% of Nigerians
              live in areas at risk of malaria.
            </div>

            <div className="button-row">
              <a className="button button-primary" href="#contact">
                Request Distributor Pricing
              </a>
              <a
                className="button button-secondary"
                href={buildWhatsAppUrl(
                  "Hello, I want to speak to sales about AGATEM.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Speak to Sales
              </a>
              <a
                className="button button-accent"
                href={buildWhatsAppUrl(
                  "Hello, I am interested in becoming an AGATEM distributor.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Distributor
              </a>
            </div>

            <div className="stats">
              {stats.map((item) => (
                <div className="stat" key={item.label}>
                  <div className="stat-value">{item.value}</div>
                  <div className="stat-label">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="source-note">
              Data note: Burden figures above are based on WHO malaria reporting
              for 2023 in the World Malaria Report 2024 and WHO country burden
              summaries.
            </div>
          </div>

          <div className="hero-card reveal in">
            <div className="hero-image-shell">
              <Image
                className="hero-image"
                src="/hero-family.jpg"
                alt="AGATEM product family"
                width={1536}
                height={864}
                priority
              />
            </div>

            <div className="hero-pills">
              <div className="pill-card">
                <div className="pill-label">Core offer</div>
                <strong>Bulk buyer conversion page</strong>
                <div className="small-muted">
                  Built for retail pharmacies, drug wholesalers, and hospitals /
                  clinics.
                </div>
              </div>
              <div className="pill-card pill-card-green">
                <div className="pill-label pill-label-green">
                  Fast contact path
                </div>
                <strong className="green-strong">
                  WhatsApp-first response
                </strong>
                <div className="small-muted green-text">
                  Sales conversations start without friction.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="trust-bar">
        <div className="container trust-grid">
          {trustItems.map((item) => (
            <div className="trust-item" key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <section className="section" id="about">
        <div className="container feature-grid">
          <div>
            <p className="section-label">Why AGATEM</p>
            <h2 className="section-title">
              A cleaner product story with stronger commercial clarity
            </h2>
            <p className="section-copy">
              This landing page keeps the message simple and informative. It is
              structured to move serious buyers into a sales conversation while
              presenting trusted product information clearly.
            </p>
          </div>

          <div className="grid-2">
            {features.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container feature-grid">
          <div>
            <p className="section-label">Malaria Burden Snapshot</p>
            <h2 className="section-title">
              Malaria remains one of Nigeria’s biggest public health pressures
            </h2>
            <p className="section-copy">
              The page uses real headline-level burden indicators to establish
              urgency without becoming cluttered. It stays informative and keeps
              the product conversation commercially grounded.
            </p>
          </div>

          <div className="dark-list">
            <div className="dark-list-item">
              Nigeria accounted for about 25.9% of global malaria cases in 2023.
            </div>
            <div className="dark-list-item">
              Nigeria accounted for about 30.9% of global malaria deaths in
              2023.
            </div>
            <div className="dark-list-item">
              About 97% of the population lives at risk of malaria.
            </div>
            <div className="dark-list-item">
              Children under 5 remain among the most affected groups.
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="products">
        <div className="container">
          <p className="section-label">Product Range</p>
          <h2 className="section-title">
            Available for every serious buyer category
          </h2>
          <p className="section-copy">
            The AGATEM product family is presented for adult use, paediatric
            use, and bulk buyer conversations.
          </p>

          <div className="product-grid">
            {products.map((product) => (
              <article className="card product-card" key={product.name}>
                <div className="product-image-wrap">
                  <Image
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                    width={850}
                    height={300}
                  />
                </div>
                <div className="product-copy">
                  <span className="badge">{product.badge}</span>
                  <h3>{product.name}</h3>
                  <p>{product.dosage}</p>
                  <p className="small-muted">{product.pack}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section buyers-section" id="buyers">
        <div className="container">
          <p className="section-label">Who It Is For</p>
          <h2 className="section-title">
            Built for healthcare and distribution channels
          </h2>
          <p className="section-copy">
            The page speaks directly to the buyer groups you prioritised,
            without watering the message down.
          </p>

          <div className="buyer-grid">
            {buyers.map((item) => (
              <article className="card buyer-card" key={item.title}>
                <span className="badge buyer-badge">Priority Buyer</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div>
            <p className="section-label">How It Works</p>
            <h2 className="section-title">Simple onboarding for bulk buyers</h2>

            <div className="steps">
              {steps.map((step, index) => (
                <div className="step" key={step}>
                  <span className="step-num">{index + 1}</span>
                  <div>{step}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="value-box">
            <p className="section-label light-label">Why Partner With AGATEM</p>
            <h3>Stronger commercial direction</h3>
            <ul>
              <li>Competitive wholesale conversation path</li>
              <li>Direct WhatsApp connection to sales</li>
              <li>Adult and paediatric product coverage</li>
              <li>Positioned for retail and institutional demand</li>
              <li>Backed by Grohe Pharmaceuticals</li>
            </ul>
            <div className="button-row">
              <a
                className="button button-secondary"
                href={buildWhatsAppUrl(
                  "Hello, I am interested in becoming an AGATEM distributor.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Distributor
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div>
            <p className="section-label">Primary Conversion</p>
            <h2 className="section-title">
              Request distributor pricing and speak to sales
            </h2>
            <p className="section-copy">
              This is the main lead capture block. The form is wired to pass
              buyer details into WhatsApp for faster response and cleaner
              follow-through.
            </p>

            <div className="contact-list">
              <div>
                <strong>Company:</strong> Grohe Pharmaceuticals
              </div>
              <div>
                <strong>Phone:</strong> +2348159711247
              </div>
              <div>
                <strong>Email:</strong> agatem@grohepharm.com
              </div>
              <div>
                <strong>Alt Email:</strong> info@grohepharm.com
              </div>
            </div>
          </div>

          <div className="contact-card">
            <form>
              <div className="form-grid">
                <input
                  className="field"
                  name="fullName"
                  placeholder="Full Name"
                />
                <input
                  className="field"
                  name="businessName"
                  placeholder="Business Name"
                />
                <input
                  className="field"
                  name="phone"
                  placeholder="Phone Number"
                />
                <input
                  className="field"
                  name="email"
                  placeholder="Email Address"
                />
                <input
                  className="field full"
                  name="location"
                  placeholder="State / Location"
                />
                <select
                  className="field full"
                  name="businessType"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Business Type
                  </option>
                  <option>Retail Pharmacy</option>
                  <option>Drug Wholesaler</option>
                  <option>Hospital / Clinic</option>
                </select>
                <textarea
                  className="field full"
                  name="message"
                  placeholder="Tell us about your interest"
                />
              </div>

              <div className="form-actions">
                <button className="button button-primary" type="submit">
                  Request Distributor Pricing
                </button>
                <a
                  className="button button-secondary"
                  href={buildWhatsAppUrl("Hello, I want to chat about AGATEM.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container">
          <div className="final-shell">
            <p className="section-label light-label">Final CTA</p>
            <h2 className="section-title">
              Ready to supply AGATEM in your market?
            </h2>
            <p>
              Join pharmacies, wholesalers, and hospitals improving access to
              trusted malaria treatment across Nigeria.
            </p>
            <div className="button-row centered">
              <a
                className="button button-secondary"
                href={buildWhatsAppUrl(
                  "Hello, I am ready to become an AGATEM distributor.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Distributor
              </a>
              <a
                className="button button-accent"
                href={buildWhatsAppUrl(
                  "Hello, I want to speak to sales about AGATEM.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Speak to Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="brand-mark footer-mark">AGATEM</div>
            <div className="brand-sub">Grohe Pharmaceuticals</div>
          </div>
          <div className="footer-links">
            <a href="#about">Why AGATEM</a>
            <a href="#products">Products</a>
            <a href="#buyers">Buyers</a>
            <a href="#contact">Contact</a>
          </div>
          <div>© 2026 Grohe Pharmaceuticals. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
