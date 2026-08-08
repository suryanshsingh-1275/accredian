"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Home", "home"],
  ["Stats", "stats"],
  ["Clients", "clients"],
  ["Accredian Edge", "edge"],
  ["Expertise", "expertise"],
  ["CAT", "cat"],
  ["How It Works", "how-it-works"],
  ["FAQs", "faq"],
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMobileOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <button className="logo" onClick={() => scrollTo("home")}>
          accredian
          <span className="logo-subtitle">credentials that matter</span>
        </button>

        <nav className="nav-links">
          {links.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}

          <button
            className="nav-cta"
            onClick={() => scrollTo("lead-form")}
          >
            Enquire Now
          </button>
        </nav>

        <button
          className="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="mobile-nav">
          {links.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}

          <button onClick={() => scrollTo("lead-form")}>
            Enquire Now
          </button>
        </nav>
      )}
    </header>
  );
}