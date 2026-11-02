"use client";

import { useLocale } from "@/shared/lib/locale";
import { contacts } from "@/entities/project/model/projects";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="footer container">
      <a className="brand" href="#top">
        <span className="brand-mark">AV</span>
        <span>
          {t.brand.firstName}
          <br />
          <em>{t.brand.lastName}</em>
        </span>
      </a>
      <p>{t.footer.rights}</p>
      <div className="footer-links">
        <a href={contacts.telegram} target="_blank" rel="noreferrer">
          {t.footer.links.telegram}
        </a>
        <a href={contacts.github} target="_blank" rel="noreferrer">
          {t.footer.links.github}
        </a>
        <a href={`mailto:${contacts.email}`}>{t.footer.links.email}</a>
      </div>
    </footer>
  );
}
