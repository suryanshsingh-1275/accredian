"use client";

const company: [string, string][] = [
  ["About Us", "home"],
  ["Our Clients", "clients"],
  ["Careers", "home"],
];

const explore: [string, string][] = [
  ["Domain Expertise", "expertise"],
  ["CAT Framework", "cat"],
  ["How It Works", "how-it-works"],
  ["FAQs", "faq"],
  ["Enquire Now", "lead-form"],
];

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width={13} height={13} fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23h-4V8z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" width={13} height={13} fill="currentColor">
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.2l-5.6-6.9L4 22H1l8.1-9.3L.8 2h7.4l5.1 6.3L18.9 2zm-1.3 18h2L6.5 4H4.4l13.2 16z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width={13} height={13} fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>accredian</h3>
          <p>
            Enterprise learning and development programs built to move
            your teams forward.
          </p>

          <div className="socials">
            <a className="social" href="#" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a className="social" href="#" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a className="social" href="#" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div>
          <h4>Company</h4>
          {company.map(([label, id]) => (
            <button key={label} onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </div>

        <div>
          <h4>Explore</h4>
          {explore.map(([label, id]) => (
            <button key={label} onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Accredian Enterprise. All rights reserved.
      </div>
    </footer>
  );
}