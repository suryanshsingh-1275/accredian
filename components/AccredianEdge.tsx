import {
  ArrowUpRight,
  Globe2,
  Lightbulb,
  RefreshCw,
  Settings,
  Target,
  Users,
} from "lucide-react";

const edgeItems = [
  {
    title: "Tailored Solutions",
    text: "Programs customized to your organization’s goals and challenges.",
    icon: Lightbulb,
  },
  {
    title: "Expert Guidance",
    text: "Learn from industry leaders with real-world success.",
    icon: Users,
  },
  {
    title: "Innovative Framework",
    text: "Proprietary methods for impactful, application-driven results.",
    icon: RefreshCw,
  },
  {
    title: "Advanced Technology",
    text: "State-of-the-art LMS for seamless learning experiences.",
    icon: Globe2,
  },
  {
    title: "Diverse Offerings",
    text: "Courses across industries, skill levels, and emerging fields.",
    icon: ArrowUpRight,
  },
  {
    title: "Proven Impact",
    text: "Trusted by leading organizations for measurable ROI.",
    icon: Target,
  },
  {
    title: "Flexible Delivery",
    text: "Online and offline options tailored to your needs.",
    icon: Settings,
  },
];

export default function AccredianEdge() {
  return (
    <section id="edge" className="section">
      <div className="container">
        <div className="section-heading">
          <h2>
            The <span>Accredian Edge</span>
          </h2>

          <p>Key Aspects of Our Strategic Training</p>
        </div>

        <div className="edge-wrapper">
          <div className="edge-line" />

          <div className="edge-grid">
            {edgeItems.map((item) => {
              const Icon = item.icon;

              return (
                <div className="edge-item" key={item.title}>
                  <div className="edge-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                  <div className="edge-icon">
                    <Icon size={28} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}