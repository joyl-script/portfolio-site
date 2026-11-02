import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  contact?: string;
  project?: string;
}

const TIMEOUT_MS = 8000;

async function sendTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) return null;

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });

  return res.ok;
}

async function sendWebhook(payload: Record<string, string>) {
  const endpoint = process.env.CONTACT_WEBHOOK_URL;

  if (!endpoint) return null;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });

  return res.ok;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Некорректный запрос" }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const contact = payload.contact?.trim() ?? "";
  const project = payload.project?.trim() ?? "";

  if (name.length < 2 || contact.length < 3 || project.length < 10) {
    return NextResponse.json({ error: "Заполните все поля" }, { status: 422 });
  }

  const sentAt = new Date().toISOString();
  const text = [
    "Новая заявка с сайта",
    "",
    `Имя: ${name}`,
    `Контакт: ${contact}`,
    `Задача: ${project}`,
    `Время: ${sentAt}`,
  ].join("\n");

  const [telegram, webhook] = await Promise.allSettled([
    sendTelegram(text),
    sendWebhook({ name, contact, project, sentAt }),
  ]);

  const channels = [
    telegram.status === "fulfilled" ? telegram.value : null,
    webhook.status === "fulfilled" ? webhook.value : null,
  ];

  const configured = channels.some((value) => value !== null);
  const delivered = channels.some((value) => value === true);

  if (!configured) {
    console.warn(
      "[contact] заявка не доставлена: задайте TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID или CONTACT_WEBHOOK_URL",
      { name, contact, project },
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  if (!delivered) {
    return NextResponse.json({ error: "Сервис недоступен" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}
