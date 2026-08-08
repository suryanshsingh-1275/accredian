const partners = [
  "Reliance",
  "HCL",
  "IBM",
  "DRF",
  "ADP",
  "BAYER",
];

export default function Partnerships() {
  return (
    <section id="clients" className="section partnerships">
      <div className="container">
        <div className="section-heading">
          <h2>
            Our Proven <span>Partnerships</span>
          </h2>

          <p>
            Successful Collaborations With the Industry&apos;s Best
          </p>
        </div>

        <div className="partner-grid">
          {partners.map((partner) => (
            <div
              key={partner}
              className={`partner ${
                partner === "IBM"
                  ? "ibm"
                  : partner === "ADP"
                    ? "adp"
                    : partner === "BAYER"
                      ? "bayer"
                      : ""
              }`}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}