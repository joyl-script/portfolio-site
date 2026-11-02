"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { useLocale } from "@/shared/lib/locale";

export function Header() {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#services", label: t.nav.services },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label={`${t.brand.firstName} ${t.brand.lastName} home`}>
          <span className="brand-mark">AV</span>
          <span>
            {t.brand.firstName}
            <br />
            <em>{t.brand.lastName}</em>
          </span>
        </a>

        <div className={`nav-links${open ? " open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <div className="lang-switch" aria-label="Language switcher">
            <button
              type="button"
              className={locale === "ru" ? "active" : ""}
              onClick={() => setLocale("ru")}
            >
              RU
            </button>
            <span>/</span>
            <button
              type="button"
              className={locale === "en" ? "active" : ""}
              onClick={() => setLocale("en")}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <Menu size={21} strokeWidth={2} aria-hidden />
          </button>
        </div>
      </nav>
    </header>
  );
}
