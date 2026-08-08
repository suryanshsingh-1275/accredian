import {
  GraduationCap,
  Lightbulb,
  Wrench,
} from "lucide-react";

const steps = [
  {
    title: "Concept",
    description:
      "Build foundational knowledge for deep subject understanding.",
    icon: Lightbulb,
  },
  {
    title: "Application",
    description:
      "Apply learning through practical real-world scenarios.",
    icon: GraduationCap,
  },
  {
    title: "Tools",
    description:
      "Master resources and techniques for effective skill development.",
    icon: Wrench,
  },
];

export default function CATFramework() {
  return (
    <section id="cat" className="section">
      <div className="container">
        <div className="section-heading">
          <h2>
            The <span>CAT Framework</span>
          </h2>

          <p>
            Our Proven Approach to Learning Excellence
          </p>
        </div>

        <div className="cat-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article className="cat-card" key={step.title}>
                <span className="cat-number">
                  {index + 1}
                </span>

                <div className="cat-icon">
                  <Icon size={30} />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}