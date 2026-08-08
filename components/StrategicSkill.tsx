import {
  Briefcase,
  Building2,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

const audiences = [
  {
    title: "Working Professionals",
    text: "Upskill without pausing your career momentum.",
    icon: Briefcase,
  },
  {
    title: "Freshers & Graduates",
    text: "Build job-ready skills employers actually look for.",
    icon: GraduationCap,
  },
  {
    title: "Career Switchers",
    text: "Pivot into new domains with structured, guided learning.",
    icon: TrendingUp,
  },
  {
    title: "Enterprises & Teams",
    text: "Upskill entire teams with programs built around your goals.",
    icon: Building2,
  },
];

export default function StrategicSkill() {
  return (
    <section id="strategic" className="section strategic">
      <div className="container">
        <div className="strategic-banner">
          <div>
            <small>STRATEGIC SKILL ENHANCEMENT</small>
            <h2>Built for Every Stage of Your Career Journey</h2>
          </div>

          <div className="audience-grid">
            {audiences.map((audience) => {
              const Icon = audience.icon;

              return (
                <div className="audience" key={audience.title}>
                  <Icon className="audience-icon" size={20} />
                  <strong>{audience.title}</strong>
                  <small>{audience.text}</small>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}