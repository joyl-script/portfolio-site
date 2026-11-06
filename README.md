# ✨ Анастасия Ведерникова — Portfolio

Персональный сайт-портфолио frontend-разработчика: обо мне, стек, проекты, услуги, контакты.

**🌐 Живой сайт:** **https://joyl-script.github.io/portfolio-site/**

[![Deploy](https://github.com/joyl-script/portfolio-site/actions/workflows/deploy.yml/badge.svg)](https://github.com/joyl-script/portfolio-site/actions/workflows/deploy.yml)

---

## 📂 Проекты на сайте

| Проект | Демо | Исходники |
| --- | --- | --- |
| 💼 Job Portal — портал удалённых вакансий | [joyl-script.github.io/job-portal](https://joyl-script.github.io/job-portal/) | [repo](https://github.com/joyl-script/job-portal) |
| 🛒 Ecobazar — интернет-магазин эко-товаров | [joyl-script.github.io/next-syte](https://joyl-script.github.io/next-syte/) | [repo](https://github.com/joyl-script/next-syte) |
| 🏢 Test Company — лендинг дизайн-агентства | [joyl-script.github.io/test-company](https://joyl-script.github.io/test-company/) | [repo](https://github.com/joyl-script/test-company) |
| 🎬 Kinopoisk clone — каталог фильмов | [joyl-script.github.io/my-eight-syte](https://joyl-script.github.io/my-eight-syte/) | [repo](https://github.com/joyl-script/my-eight-syte) |

## ✅ Особенности

- Два языка интерфейса — **RU / EN** с переключением
- Адаптивная вёрстка, плавные анимации появления при скролле
- Форма обратной связи открывает почтовый клиент (`mailto`) — сервер и ключи не нужны
- Метаданные, `sitemap.xml` и `robots.txt` для SEO
- Схема `schema.org/Person` в разметке страницы

## 🛠 Стек

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- Архитектура **FSD-lite**: `app` → `widgets` → `entities` → `shared`

## 🚀 Запуск локально

```bash
git clone https://github.com/joyl-script/portfolio-site.git
cd portfolio-site
npm install
npm run dev
```

Откройте http://localhost:3000

## 📜 Скрипты

| Команда | Действие |
| --- | --- |
| `npm run dev` | дев-сервер |
| `npm run build` | продакшн-сборка |
| `npm run lint` | проверка ESLint |

## 🗂 Структура

```
app/                 роуты, layout, метаданные, sitemap, robots
entities/project/    данные проектов и тексты RU/EN
widgets/             секции (header, hero, about, projects, services, stack, contact, footer)
shared/              конфиг сайта, локаль RU/EN, скролл-анимации
```

## ✍️ Контент

Тексты и проекты лежат в `entities/project/model/projects.ts` (два языка, `ru` и `en`):

- новый проект — запись в `projects.items` и `projectVisuals` + ссылка в `projectLinks`;
- контакты — в `contacts`.

## ⚙️ Деплой

Сайт опубликован на **GitHub Pages**: https://joyl-script.github.io/portfolio-site/

Сборка и выкладка автоматические: GitHub Actions запускаются при каждом обновлении ветки `main` (`output: "export"` + `basePath: "/portfolio-site"`). Ничего настраивать вручную не нужно.
