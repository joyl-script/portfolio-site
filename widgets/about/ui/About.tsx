"use client";

import { Check } from "lucide-react";
import { useLocale } from "@/shared/lib/locale";

export function About() {
  const { t } = useLocale();

  return (
    <section id="about" className="section container about">
      <div className="reveal">
        <div className="section-heading">
          <span className="section-number">01</span>
          <p className="eyebrow">{t.about.label}</p>
        </div>
        <div className="about-grid">
          <h2>{t.about.title}</h2>
          <div>
            <p className="lead">{t.about.lead}</p>
            <ul className="check-list">
              {t.about.checks.map((item) => (
                <li key={item}>
                  <Check size={16} strokeWidth={2} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
