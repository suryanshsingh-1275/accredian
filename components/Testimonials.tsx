const testimonials = [
  {
    company: "ADP",
    quote:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service and expertise throughout the entire process.",
  },
  {
    company: "BAYER",
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
  },
  {
    company: "RELIANCE",
    quote:
      "Choosing Accredian for the learning and development of our employees was a beneficial decision. The value derived from the course is immense and their support team is always there to help our employees.",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <h2>
            Testimonials from <span>Our Partners</span>
          </h2>

          <p>What Our Clients Are Saying</p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article
              className="testimonial"
              key={testimonial.company}
            >
              <div className="testimonial-logo">
                {testimonial.company}
              </div>

              <p>
                &quot;{testimonial.quote}&quot;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}