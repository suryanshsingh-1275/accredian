"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const scrollToLead = () => {
    document
      .getElementById("lead-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Next-Gen
              <br />
              <span>Expertise</span> For
              <br />
              Your <span>Enterprise</span>
            </h1>

            <p className="hero-description">
              Cultivate high-performance teams through expert learning.
            </p>

            <div className="hero-features">
              <div className="hero-feature">
                <CheckCircle2 size={16} />
                Tailored Solutions
              </div>

              <div className="hero-feature">
                <CheckCircle2 size={16} />
                Industry Insights
              </div>

              <div className="hero-feature">
                <CheckCircle2 size={16} />
                Expert Guidance
              </div>

              <div className="hero-feature">
                <CheckCircle2 size={16} />
                Measurable Impact
              </div>
            </div>

            <button className="primary-button" onClick={scrollToLead}>
              Enquire Now
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="hero-image">
            <div className="hero-circle" />

            <div className="hero-person-back">👨🏻‍💼</div>

            <div className="hero-person">👩🏻‍💼</div>

            <div className="hero-laptop" />
          </div>
        </div>
      </div>
    </section>
  );
}