"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useLocale } from "@/shared/lib/locale";

export function Hero() {
  const { t } = useLocale();

  return (
    <section id="top" className="hero container">
      <div className="hero-glow" />
      <div className="hero-grid" />
      <div className="hero-content">
        <div className="reveal">
          <p className="eyebrow">
            <span className="status-dot" />
            {t.hero.eyebrow}
          </p>
          <h1>{t.hero.title}</h1>
          <p className="hero-copy">{t.hero.copy}</p>
          <div className="hero-buttons">
            <a className="button button-primary" href="#contact">
              {t.hero.primary}
              <ArrowUpRight size={17} strokeWidth={2} aria-hidden />
            </a>
            <a className="button button-ghost" href="#projects">
              {t.hero.ghost}
              <ArrowDownRight size={17} strokeWidth={2} aria-hidden />
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <span>{t.hero.scrollCue}</span>
        <ArrowDownRight size={16} strokeWidth={2} aria-hidden />
      </div>
      <div className="hero-index">
        {"01 "}
        <span>/ 05</span>
      </div>
    </section>
  );
}
