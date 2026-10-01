"use client";

import { site } from "../data";

export default function ContactForm() {
  const handleEmailSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${name || "Visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleEmailSubmit} className="contact-form">
      <div className="field-row">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          required
        />
      </div>

      <div className="field-row">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="field-row">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Tell me a bit about your idea or project"
          required
        />
      </div>

      <button type="submit" className="button primary submit-button">
        Send email
      </button>
    </form>
  );
}
