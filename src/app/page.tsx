import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { AboutSection } from "@/components/site/sections/about";
import { ContactSection } from "@/components/site/sections/contact";
import { HeroSection } from "@/components/site/sections/hero";
import { ProjectsSection } from "@/components/site/sections/projects";
import { SkillsSection } from "@/components/site/sections/skills";
import { LanguageProvider } from "@/lib/i18n/language";

export default function HomePage() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="relative z-10 pt-20">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

