"use client";

import { Sparkles } from "lucide-react";
import { useLocale } from "@/shared/lib/locale";

export function Stack() {
  const { t } = useLocale();
  const tools = [...t.stack.tools, ...t.stack.tools];

  return (
    <section className="stack-section">
      <div className="container">
        <div className="reveal">
          <div className="stack-intro">
            <Sparkles size={18} strokeWidth={2} aria-hidden />
            {t.stack.intro}
          </div>
        </div>
      </div>
      <div className="marquee" aria-label="Technology stack">
        <div className="marquee-track">
          {tools.map((tool, index) => (
            <span key={`${tool}-${index}`}>
              {tool}
              <b>·</b>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
