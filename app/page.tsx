import { Header } from "@/widgets/header/ui/Header";
import { Hero } from "@/widgets/hero/ui/Hero";
import { About } from "@/widgets/about/ui/About";
import { Projects } from "@/widgets/projects/ui/Projects";
import { Services } from "@/widgets/services/ui/Services";
import { Stack } from "@/widgets/stack/ui/Stack";
import { Contact } from "@/widgets/contact/ui/Contact";
import { Footer } from "@/widgets/footer/ui/Footer";
import { LocaleProvider } from "@/shared/lib/locale";
import { site } from "@/shared/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    url: site.url,
    sameAs: [site.github, site.telegram],
  };

  return (
    <LocaleProvider>
      <main className="site-shell">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Services />
        <Stack />
        <Contact />
        <Footer />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </LocaleProvider>
  );
}
