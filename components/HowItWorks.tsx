import {
  BarChart3,
  ClipboardCheck,
  Rocket,
} from "lucide-react";

const steps = [
  {
    title: "Skill Gap Analysis",
    description:
      "Assess current capabilities and identify areas for growth.",
    icon: BarChart3,
  },
  {
    title: "Customized Training Plan",
    description:
      "Create a tailored roadmap addressing organizational goals.",
    icon: ClipboardCheck,
  },
  {
    title: "Flexible Program Delivery",
    description:
      "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: Rocket,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="section-heading">
          <h2>
            How We Deliver <span>Results That Matter?</span>
          </h2>

          <p>
            A Structured Three-Step Approach to Skill Development
          </p>
        </div>

        <div className="how-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article className="how-card" key={step.title}>
                <span className="how-number">
                  {index + 1}
                </span>

                <Icon size={29} />

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