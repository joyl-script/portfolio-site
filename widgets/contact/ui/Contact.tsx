"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CodeXml, Mail, Send } from "lucide-react";
import { useLocale } from "@/shared/lib/locale";
import { contacts } from "@/entities/project/model/projects";

export function ContactForm() {
  const { t } = useLocale();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const project = String(data.get("project") ?? "").trim();

    if (name.length < 2) {
      setError(t.contact.errors.name);
      return;
    }
    if (contact.length < 3) {
      setError(t.contact.errors.contact);
      return;
    }
    if (project.length < 10) {
      setError(t.contact.errors.message);
      return;
    }

    setError(null);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, project }),
      });

      if (!response.ok) throw new Error("request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("idle");
      setError(t.contact.errors.send);
    }
  }

  if (status === "sent") {
    return <p className="form-success">{t.contact.success}</p>;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label>
        {t.contact.name}
        <input name="name" autoComplete="name" required />
      </label>
      <label>
        {t.contact.contact}
        <input name="contact" type="text" autoComplete="email" required />
      </label>
      <label>
        {t.contact.message}
        <textarea name="project" rows={4} required />
      </label>
      {error && <p className="form-error">{error}</p>}
      <button className="button button-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? t.contact.sending : t.contact.submit}
        <ArrowUpRight size={17} strokeWidth={2} aria-hidden />
      </button>
    </form>
  );
}

export function Contact() {
  const { t } = useLocale();

  return (
    <section id="contact" className="section container contact">
      <div className="reveal">
        <div className="section-heading">
          <span className="section-number">04</span>
          <p className="eyebrow">{t.contact.label}</p>
        </div>
        <div className="contact-grid">
          <div>
            <h2>{t.contact.title}</h2>
            <p className="lead">{t.contact.lead}</p>
            <div className="direct-links">
              <a href={contacts.telegram} target="_blank" rel="noreferrer">
                <Send size={16} strokeWidth={2} aria-hidden />
                {contacts.telegramHandle}
              </a>
              <a href={`mailto:${contacts.email}`}>
                <Mail size={16} strokeWidth={2} aria-hidden />
                {contacts.email}
              </a>
              <a href={contacts.github} target="_blank" rel="noreferrer">
                <CodeXml size={16} strokeWidth={2} aria-hidden />
                {contacts.githubHandle}
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
