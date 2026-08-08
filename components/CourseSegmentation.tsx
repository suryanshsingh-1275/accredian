import {
  BarChart3,
  BriefcaseBusiness,
  Cpu,
  GraduationCap,
} from "lucide-react";

const courses = [
  {
    title: "Program Specific",
    description:
      "Certificate, Executive and Post Graduate Certificate programs.",
    icon: GraduationCap,
  },
  {
    title: "Industry Specific",
    description:
      "IT, Healthcare, Retail, Finance, Education and Manufacturing.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Topic Specific",
    description:
      "Machine Learning, Design, Analytics, Cybersecurity and Cloud.",
    icon: Cpu,
  },
  {
    title: "Level Specific",
    description:
      "Senior Leadership, Mid-Career Professionals and Freshers.",
    icon: BarChart3,
  },
];

export default function CourseSegmentation() {
  return (
    <section id="segmentation" className="section">
      <div className="container">
        <div className="section-heading">
          <h2>
            Tailored <span>Course Segmentation</span>
          </h2>

          <p>
            Explore Custom-fit Courses Designed to Address Every
            Professional Focus
          </p>
        </div>

        <div className="course-grid">
          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <article className="course-card" key={course.title}>
                <div className="course-image">
                  <Icon size={55} />
                </div>

                <div className="course-content">
                  <h3>{course.title}</h3>

                  <p>{course.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}