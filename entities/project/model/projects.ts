import type { Copy } from "./types";

export const tools = [
  "HTML5",
  "CSS3",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "App Router",
  "SSR / SSG",
  "Redux Toolkit",
  "TanStack Query",
  "Tailwind CSS",
  "REST API",
  "Git",
  "Figma",
  "Vercel",
  "BEM",
  "FSD",
];

export const projectLinks = [
  {
    demo: "https://joyl-script.github.io/job-portal/",
    repo: "https://github.com/joyl-script/job-portal",
  },
  { demo: "https://joyl-script.github.io/next-syte/", repo: "https://github.com/joyl-script/next-syte" },
  { demo: "https://joyl-script.github.io/test-company/", repo: "https://github.com/joyl-script/test-company" },
  { demo: "https://joyl-script.github.io/my-eight-syte/", repo: "https://github.com/joyl-script/my-eight-syte" },
];

export const projectVisuals = [
  {
    number: "01",
    label: "Job Portal",
    image: "/projects/job-portal.webp",
    tags: ["Next.js", "Redux Toolkit", "TanStack Query"],
  },
  {
    number: "02",
    label: "Ecobazar",
    image: "/projects/ecobazar.webp",
    tags: ["Next.js", "Tailwind CSS", "SSR"],
  },
  {
    number: "03",
    label: "Test Company",
    image: "/projects/test-company.webp",
    tags: ["Next.js", "Tailwind CSS", "Figma"],
  },
  {
    number: "04",
    label: "Kinopoisk clone",
    image: "/projects/kinopoisk.webp",
    tags: ["JavaScript", "CSS Grid", "Swiper.js"],
  },
];

export const copy: Record<"ru" | "en", Copy> = {
  ru: {
    nav: { about: "Обо мне", projects: "Работы", services: "Услуги", contact: "Контакты" },
    brand: { firstName: "Anastasia", lastName: "Vedernikova" },
    hero: {
      eyebrow: "Frontend developer · Anastasia Vedernikova",
      title: "Сайты, которые работают на ваш бизнес",
      copy: "Frontend-разработчик React / Next.js — быстрые адаптивные сайты для малого бизнеса.",
      primary: "Обсудить проект",
      ghost: "Смотреть работы",
      scrollCue: "Scroll to explore",
    },
    about: {
      label: "Обо мне",
      title: "Превращаю идеи в понятные цифровые продукты.",
      lead: "2+ года коммерческой разработки в команде и на фрилансе. Делаю сайты, которые легко поддерживать, приятно использовать и не стыдно показывать клиентам.",
      checks: [
        "Чистая архитектура FSD",
        "TypeScript для предсказуемости данных",
        "SSR / SSG и оптимизация загрузки",
      ],
    },
    projects: {
      label: "Избранные работы",
      title: "Проекты, которые решают задачи",
      count: "04 / 04",
      demo: "Демо",
      github: "GitHub",
      items: [
        {
          title: "Job Portal",
          description:
            "Платформа поиска работы с ролями соискателя и работодателя, фильтрацией вакансий через URL-параметры.",
        },
        {
          title: "Ecobazar",
          description:
            "Интернет-магазин эко-товаров с SSR для SEO карточек товаров и аккуратной тёмной темой.",
        },
        {
          title: "Test Company",
          description:
            "Корпоративный лендинг дизайн-агентства по Figma с переходами и бегущей строкой логотипов.",
        },
        {
          title: "Киносервис",
          description:
            "Промо-лендинг стриминг-сервиса на CSS Grid и vanilla JS с поиском и слайдерами Swiper.js.",
        },
      ],
    },
    services: {
      label: "Что я делаю",
      title: "Фокусируюсь на результате, а не только на коде.",
      items: [
        { title: "Лендинги и промо-сайты", text: "Сайты под ключ — от структуры до запуска." },
        { title: "Адаптивный редизайн", text: "Обновляю существующие сайты для всех экранов." },
        { title: "E-commerce витрины", text: "Каталоги, карточки и понятный путь к покупке." },
        { title: "Скорость загрузки", text: "Ускоряю сайт и улучшаю пользовательский опыт." },
      ],
    },
    stack: { intro: "Tools I use every day", tools },
    contact: {
      label: "Давайте знакомиться",
      title: "Обсудим ваш проект?",
      lead: "Расскажите о задаче — вернусь с оценкой в течение дня.",
      name: "Ваше имя",
      contact: "Telegram или email",
      message: "Расскажите о проекте",
      submit: "Отправить заявку",
      sending: "Отправляю…",
      success: "Спасибо! Заявка отправлена — вернусь с ответом в течение дня.",
      errors: {
        name: "Укажите имя",
        contact: "Укажите Telegram или email",
        message: "Опишите задачу подробнее",
        send: "Не удалось отправить. Напишите в Telegram или на email.",
      },
    },
    footer: {
      rights: "© 2026 Anastasia Vedernikova · Frontend Developer",
      links: { telegram: "Telegram", github: "GitHub", email: "Email" },
    },
  },
  en: {
    nav: { about: "About", projects: "Work", services: "Services", contact: "Contact" },
    brand: { firstName: "Anastasia", lastName: "Vedernikova" },
    hero: {
      eyebrow: "Frontend developer · Anastasia Vedernikova",
      title: "Websites that work for your business",
      copy: "Frontend developer working with React / Next.js — fast, responsive websites for small businesses.",
      primary: "Start a project",
      ghost: "View work",
      scrollCue: "Scroll to explore",
    },
    about: {
      label: "About",
      title: "I turn ideas into clear digital products.",
      lead: "2+ years of commercial development in a team and freelance. I build sites that are easy to maintain, pleasant to use, and worth showing to clients.",
      checks: [
        "Clean FSD architecture",
        "TypeScript for predictable data",
        "SSR / SSG and load optimization",
      ],
    },
    projects: {
      label: "Selected work",
      title: "Projects that solve real tasks",
      count: "04 / 04",
      demo: "Demo",
      github: "GitHub",
      items: [
        {
          title: "Job Portal",
          description:
            "Job search platform with candidate and employer roles, filtering vacancies through URL parameters.",
        },
        {
          title: "Ecobazar",
          description: "Eco goods store with SSR for SEO product pages and a tidy dark theme.",
        },
        {
          title: "Test Company",
          description:
            "Corporate landing page for a design agency from Figma with transitions and a logo marquee.",
        },
        {
          title: "Kinopoisk clone",
          description:
            "Streaming service promo landing built with CSS Grid and vanilla JS, with search and Swiper.js sliders.",
        },
      ],
    },
    services: {
      label: "What I do",
      title: "I focus on the result, not just the code.",
      items: [
        { title: "Landing and promo sites", text: "Turnkey sites — from structure to launch." },
        { title: "Responsive redesign", text: "I update existing sites for every screen." },
        { title: "E-commerce storefronts", text: "Catalogs, cards and a clear path to purchase." },
        { title: "Load speed", text: "I speed up sites and improve user experience." },
      ],
    },
    stack: { intro: "Tools I use every day", tools },
    contact: {
      label: "Let's get acquainted",
      title: "Shall we discuss your project?",
      lead: "Tell me about the task — I'll get back with an estimate within a day.",
      name: "Your name",
      contact: "Telegram or email",
      message: "Tell me about the project",
      submit: "Send request",
      sending: "Sending…",
      success: "Thank you! Your request is sent — I'll reply within a day.",
      errors: {
        name: "Please enter your name",
        contact: "Please enter Telegram or email",
        message: "Please describe the task in more detail",
        send: "Could not send. Reach out via Telegram or email.",
      },
    },
    footer: {
      rights: "© 2026 Anastasia Vedernikova · Frontend Developer",
      links: { telegram: "Telegram", github: "GitHub", email: "Email" },
    },
  },
};

export const contacts = {
  telegram: "https://t.me/spi2er",
  telegramHandle: "@spi2er",
  email: "majpotejto@gmail.com",
  github: "https://github.com/joyl-script",
  githubHandle: "github.com/joyl-script",
};
