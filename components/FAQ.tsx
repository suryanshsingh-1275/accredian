"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question:
      "What types of corporate training programs does Accredian offer?",
    answer:
      "Accredian provides industry-specific and customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, technology, data, AI and fintech.",
  },
  {
    question:
      "What domain specializations are available?",
    answer:
      "We offer expertise across Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management and Generative AI.",
  },
  {
    question:
      "Can programs be customized for our organization?",
    answer:
      "Yes. Enterprise programs can be customized around your organization's business goals, skill gaps, learner profiles and preferred delivery model.",
  },
  {
    question:
      "How are the training programs delivered?",
    answer:
      "Programs can be delivered through flexible online, offline or blended learning formats depending on organizational requirements.",
  },
  {
    question:
      "How can we get started with an enterprise program?",
    answer:
      "Submit the enquiry form below and the enterprise team can connect with you to understand your requirements.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="section-heading">
          <h2>
            Frequently Asked <span>Questions</span>
          </h2>
        </div>

        <div className="faq-tabs">
          <button className="faq-tab active">
            About the Course
          </button>

          <button className="faq-tab">
            About the Delivery
          </button>

          <button className="faq-tab">
            Miscellaneous
          </button>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div className="faq-item" key={faq.question}>
                <button
                  className="faq-question"
                  onClick={() =>
                    setActive(isOpen ? -1 : index)
                  }
                >
                  <span>{faq.question}</span>

                  <ChevronDown
                    size={18}
                    style={{
                      transform: isOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "0.2s ease",
                    }}
                  />
                </button>

                {isOpen && (
                  <p className="faq-answer">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}