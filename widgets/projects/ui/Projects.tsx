"use client";

import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useLocale } from "@/shared/lib/locale";
import { projectLinks, projectVisuals } from "@/entities/project/model/projects";

export function Projects() {
  const { t } = useLocale();

  return (
    <section id="projects" className="section container projects">
      <div className="reveal">
        <div className="section-heading">
          <span className="section-number">02</span>
          <p className="eyebrow">{t.projects.label}</p>
        </div>
        <div className="section-title-row">
          <h2>{t.projects.title}</h2>
          <span className="project-count">{t.projects.count}</span>
        </div>
      </div>

      <div className="project-grid">
        {t.projects.items.map((project, index) => {
          const visual = projectVisuals[index];
          const links = projectLinks[index];

          return (
            <div key={visual.label} className="reveal">
              <article className="project-card">
                <a
                  href={links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-visual"
                >
                  <Image
                    src={visual.image}
                    alt={`${visual.label} — превью проекта`}
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                    className="project-shot"
                  />
                  <span className="visual-number">{visual.number}</span>
                  <span className="visual-label">{visual.label}</span>
                  <ExternalLink className="visual-link" size={17} strokeWidth={2} aria-hidden />
                </a>
                <div className="project-info">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="tag-row">
                    {visual.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={links.demo} target="_blank" rel="noreferrer">
                      {t.projects.demo}
                      <ArrowUpRight size={14} strokeWidth={2} aria-hidden />
                    </a>
                    <a href={links.repo} target="_blank" rel="noreferrer">
                      {t.projects.github}
                      <ArrowUpRight size={14} strokeWidth={2} aria-hidden />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
