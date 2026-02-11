"use client";

import { Brain, Code2, Rocket, Users } from "lucide-react";

import { useLanguage, useT } from "@/lib/i18n/language";
import { Reveal } from "@/components/effects/reveal";
import { Section, SectionTitle } from "@/components/ui/section";

export function AboutSection() {
  const { lang } = useLanguage();
  const t = useT();

  return (
    <Section
      id="sobre"
      className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_28%)]"
    >
      <Reveal>
        <SectionTitle
          eyebrow={lang === "en" ? "About" : "Sobre"}
          title={lang === "en" ? "About" : "Sobre"}
          highlight={lang === "en" ? "me" : "Mim"}
        />
      </Reveal>

      <Reveal delayMs={120}>
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-white/70 md:text-lg">
          {t.about.intro}
        </p>
      </Reveal>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <Reveal delayMs={140}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
            <h3 className="text-center font-serif text-2xl font-semibold text-white">
              {t.about.journeyTitle}
            </h3>

            <div className="mt-10 space-y-8">
              <TimelineItem
                year="2023"
                title={t.timeline["2023"].title}
                desc={t.timeline["2023"].desc}
              />
              <TimelineItem
                year="2024"
                title={t.timeline["2024"].title}
                desc={t.timeline["2024"].desc}
              />
              <TimelineItem
                year="2025"
                title={t.timeline["2025"].title}
                desc={t.timeline["2025"].desc}
              />
              <TimelineItem
                year="2026"
                title={t.timeline["2026"].title}
                desc={t.timeline["2026"].desc}
              />
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={180}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
            <h3 className="text-center font-serif text-2xl font-semibold text-white">
              {t.about.characteristicsTitle}
            </h3>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <FeatureCard
                icon={<Code2 className="h-6 w-6" />}
                title={t.characteristics.fullstack.title}
                desc={t.characteristics.fullstack.desc}
              />
              <FeatureCard
                icon={<Rocket className="h-6 w-6" />}
                title={t.characteristics.performance.title}
                desc={t.characteristics.performance.desc}
              />
              <FeatureCard
                icon={<Users className="h-6 w-6" />}
                title={t.characteristics.teamwork.title}
                desc={t.characteristics.teamwork.desc}
              />
              <FeatureCard
                icon={<Brain className="h-6 w-6" />}
                title={t.characteristics.learning.title}
                desc={t.characteristics.learning.desc}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function TimelineItem({
  year,
  title,
  desc
}: {
  year: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-2 h-full w-px bg-white/10" aria-hidden />
      <div className="absolute left-[-3px] top-2 h-2.5 w-2.5 rounded-full bg-ragi-accent ring-4 ring-black" />

      <div className="text-sm font-semibold text-ragi-accent">{year}</div>
      <div className="mt-2 text-lg font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{desc}</div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-6 transition hover:-translate-y-0.5 hover:bg-black/25">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-ragi-accent">
        {icon}
      </div>
      <div className="mt-4 text-base font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{desc}</div>
    </div>
  );
}

