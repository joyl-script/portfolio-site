import Link from "next/link";

export default function NotFound() {
  return (
    <div className="site-shell">
      <main className="container" style={{ paddingTop: 180, paddingBottom: 180, minHeight: "100svh" }}>
        <p className="eyebrow">Ошибка 404</p>
        <h1 style={{ marginTop: 28 }}>Страница не найдена</h1>
        <p className="lead" style={{ marginTop: 24, maxWidth: "46ch" }}>
          Возможно, ссылка устарела или в адресе опечатка.
        </p>
        <div className="hero-buttons">
          <Link className="button button-primary" href="/">
            На главную
          </Link>
        </div>
      </main>
    </div>
  );
}
