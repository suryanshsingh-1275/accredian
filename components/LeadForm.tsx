"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    const form = new FormData(event.currentTarget);

    const data = {
      name: form.get("name"),
      email: form.get("email"),
      company: form.get("company"),
      message: form.get("message"),
    };

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Something went wrong."
        );
      }

      setMessage(result.message);

      event.currentTarget.reset();
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit the form."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="lead-form" className="lead-section">
      <div className="container">
        <div className="lead-box">
          <div className="lead-content">
            <span className="eyebrow">
              WANT TO LEARN MORE?
            </span>

            <h2>
              Want to Learn More About Our Training Solutions?
            </h2>

            <p>
              Speak with our advisor and discover the right
              learning solution for your organization.
            </p>
          </div>

          <form
            className="lead-form"
            onSubmit={handleSubmit}
          >
            <input
              name="name"
              placeholder="Your Name *"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Work Email *"
              required
            />

            <input
              name="company"
              placeholder="Company"
            />

            <textarea
              name="message"
              rows={3}
              placeholder="Tell us about your requirements"
            />

            <button
              className="lead-submit"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Enquire Now"}

              {!loading && <ArrowRight size={15} />}
            </button>

            {message && (
              <p className="form-message">
                <CheckCircle2 size={15} />
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}