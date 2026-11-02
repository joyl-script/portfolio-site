# Портфолио — Анастасия Ведерникова

Персональный сайт-портфолио frontend-разработчика.

## Стек

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Архитектура FSD-lite (`app`, `widgets`, `entities`, `shared`)

## Запуск

```bash
npm install
npm run dev
```

Откройте http://localhost:3000

## Скрипты

| Команда | Действие |
| --- | --- |
| `npm run dev` | Дев-сервер |
| `npm run build` | Продакшн-сборка |
| `npm run start` | Запуск собранного проекта |
| `npm run lint` | Проверка ESLint |

## Переменные окружения

Скопируйте `.env.example` в `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
TELEGRAM_BOT_TOKEN=123456:ABC...
TELEGRAM_CHAT_ID=123456789
CONTACT_WEBHOOK_URL=https://...
```

`NEXT_PUBLIC_SITE_URL` используется для метаданных, `sitemap.xml` и `robots.txt`.

Куда приходит заявка из формы (достаточно одного способа):

- `TELEGRAM_BOT_TOKEN` + `TELEGRAM_CHAT_ID` — заявка приходит сообщением в Telegram. Бота создайте у [@BotFather](https://t.me/BotFather), `chat_id` узнайте у [@userinfobot](https://t.me/userinfobot). Ответ вы читаете и пишете прямо в чате с ботом.
- `CONTACT_WEBHOOK_URL` — заявка уходит POST-запросом на любой внешний сервис (Formspree, Make, n8n, Slack-вебхук). Ответ придёт туда, куда этот сервис его направит — например, на email.

Если ни один способ не настроен, заявка не теряется молча: она пишется в лог сервера с предупреждением, а форма показывает пользователю подсказку написать напрямую в Telegram или на email.

## Структура

```
app/                 роуты, layout, метаданные, sitemap, robots
  api/contact/       обработчик формы
entities/project/    данные проектов и тексты RU/EN
widgets/             секции (header, hero, about, projects, services, stack, contact, footer)
shared/              конфиг сайта, локаль RU/EN, скролл-анимации
```

## Контент

Тексты и проекты лежат в `entities/project/model/projects.ts` (два языка, `ru` и `en`). Новый проект — добавить запись в `projects.items` и `projectVisuals`, контакты — в `contacts`.

## Деплой

Проект готов к деплою на Vercel: импортируйте репозиторий и задайте переменные окружения.
