"use client";

import {
  Blocks,
  Braces,
  CodeXml,
  Cpu,
  Database,
  FileJson2,
  LayoutPanelLeft,
  LucideIcon,
  Package,
  Palette,
  Robot,
  Server
} from "lucide-react";

import { skills } from "@/data/portfolio";
import type { SkillId } from "@/data/portfolio";
import { useT } from "@/lib/i18n/language";
import { Reveal } from "@/components/effects/reveal";
import { Section, SectionTitle } from "@/components/ui/section";

const iconBySkill: Record<SkillId, LucideIcon> = {
  html: CodeXml,
  css: Palette,
  js: FileJson2,
  react: LayoutPanelLeft,
  node: Server,
  typescript: Braces,
  python: Package,
  yolo: Robot,
  cpp: Cpu
};

export function SkillsSection() {
  const t = useT();

  return (
    <Section id="habilidades" className="border-t border-white/10">
      <Reveal>
        <SectionTitle title={t.sections.skills} highlight="" />
      </Reveal>

      <Reveal delayMs={120}>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {skills.map((s) => {
            const Icon = iconBySkill[s.id] ?? Blocks;
            const name = t.skills.names[s.id];
            const category = t.skills.categories[s.category];

            return (
              <div
                key={s.id}
                className="flex items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.45)] transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-ragi-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-white">{name}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                      {category}
                    </div>
                  </div>
                </div>

                <div className="hidden items-center gap-2 text-white/40 md:flex">
                  <Database className="h-4 w-4" />
                  <span className="text-xs">Stack</span>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}

