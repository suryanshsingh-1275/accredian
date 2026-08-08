const stats = [
  {
    number: "10K+",
    text: "Professionals trained for exceptional career success",
  },
  {
    number: "200+",
    text: "Sessions delivered with unmatched learning excellence",
  },
  {
    number: "5K+",
    text: "Active learners engaged in dynamic courses",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="section stats">
      <div className="container">
        <div className="section-heading">
          <h2>
            Our <span>Track Record</span>
          </h2>

          <p>The Numbers Behind Our Success</p>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat" key={stat.number}>
              <span className="stat-number">
                {stat.number}
              </span>

              <p>{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}