export type Locale = "ru" | "en";

export interface ProjectCopy {
  title: string;
  description: string;
}

export interface Copy {
  nav: { about: string; projects: string; services: string; contact: string };
  brand: { firstName: string; lastName: string };
  hero: {
    eyebrow: string;
    title: string;
    copy: string;
    primary: string;
    ghost: string;
    scrollCue: string;
  };
  about: {
    label: string;
    title: string;
    lead: string;
    checks: string[];
  };
  projects: {
    label: string;
    title: string;
    count: string;
    demo: string;
    github: string;
    items: ProjectCopy[];
  };
  services: {
    label: string;
    title: string;
    items: { title: string; text: string }[];
  };
  stack: { intro: string; tools: string[] };
  contact: {
    label: string;
    title: string;
    lead: string;
    name: string;
    contact: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    errors: { name: string; contact: string; message: string; send: string };
  };
  footer: { rights: string; links: { telegram: string; github: string; email: string } };
}
