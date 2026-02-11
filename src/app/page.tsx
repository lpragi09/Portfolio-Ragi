import { MouseGlow } from "@/components/effects/mouse-glow";
import { Reveal } from "@/components/effects/reveal";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { AboutSection } from "@/components/site/sections/about";
import { HeroSection } from "@/components/site/sections/hero";
import { ProjectsSection } from "@/components/site/sections/projects";
import { SkillsSection } from "@/components/site/sections/skills";
import { LanguageProvider } from "@/lib/i18n/language";

export default function HomePage() {
  return (
    <LanguageProvider>
      <MouseGlow />
      <Navbar />
      <main className="relative z-10 pt-20">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />

        <div className="border-t border-white/10 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
                <h3 className="font-serif text-2xl font-semibold text-white md:text-3xl">
                  Pronto para o próximo nível
                </h3>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                  Agora que a migração base está em Next.js + Tailwind, o próximo passo
                  é conectar contato/lead, e preparar o backend com Supabase (RLS).
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </LanguageProvider>
  );
}

