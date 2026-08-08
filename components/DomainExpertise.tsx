import {
  BarChart3,
  Brain,
  Globe2,
  Lightbulb,
  Settings,
  Users,
  WalletCards,
} from "lucide-react";

const domains = [
  ["Product & Innovation Hub", Lightbulb],
  ["Gen-AI Mastery", Brain],
  ["Leadership Elevation", Users],
  ["Tech & Data Insights", BarChart3],
  ["Operations Excellence", Settings],
  ["Digital Enterprise", Globe2],
  ["Fintech Innovation Lab", WalletCards],
];

export default function DomainExpertise() {
  return (
    <section id="expertise" className="section">
      <div className="container">
        <div className="section-heading">
          <h2>
            Our <span>Domain Expertise</span>
          </h2>

          <p>
            Specialized Programs Designed to Fuel Innovation
          </p>
        </div>

        <div className="domain-grid">
          {domains.map(([name, Icon]) => {
            const DomainIcon =
              Icon as React.ComponentType<{
                size?: number;
              }>;

            return (
              <div className="domain-card" key={name as string}>
                <DomainIcon size={35} />

                <h3>{name as string}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}