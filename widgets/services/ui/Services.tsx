"use client";

import { Earth, Gauge, Layers, ShoppingBag } from "lucide-react";
import { useLocale } from "@/shared/lib/locale";

const icons = [Earth, Layers, ShoppingBag, Gauge];

export function Services() {
  const { t } = useLocale();

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="reveal">
          <div className="section-heading">
            <span className="section-number">03</span>
            <p className="eyebrow">{t.services.label}</p>
          </div>
          <h2 className="services-title">{t.services.title}</h2>
        </div>

        <div className="services-grid">
          {t.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <div key={service.title} className="reveal">
                <div className="service-card">
                  <Icon size={25} strokeWidth={1.5} aria-hidden />
                  <span className="service-no">
                    0{index + 1}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
