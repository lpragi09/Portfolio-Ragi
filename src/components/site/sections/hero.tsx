"use client";

import Image from "next/image";
import { ChevronDown, Github, Instagram, Linkedin, Mail } from "lucide-react";

import { useLanguage, useT } from "@/lib/i18n/language";
import { cn } from "@/lib/utils/cn";
import { Reveal } from "@/components/effects/reveal";
import { Section } from "@/components/ui/section";

export function HeroSection() {
  const { lang } = useLanguage();
  const t = useT();

  return (
    <Section
      id="inicio"
      className={cn(
        "min-h-[calc(100vh-5rem)] overflow-hidden",
        "bg-[linear-gradient(135deg,#000_0%,#0a0520_70%,#000_100%)]"
      )}
    >
      {/* Aurora simples (premium, leve) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
      >
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.28),transparent_60%)] blur-3xl" />
        <div className="absolute -right-40 top-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(75,0,130,0.22),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative z-10 grid items-center gap-14 pt-16 md:grid-cols-2 md:pt-24">
        <div>
          <Reveal>
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              {lang === "en" ? (
                <>
                  Hello!{" "}
                  <span className="text-ragi-accent">I&apos;m Luiz Ragi</span>.
                  <br />I build{" "}
                  <span className="text-ragi-accent">Full-Stack</span> products.
                </>
              ) : (
                <>
                  Olá! Eu sou o{" "}
                  <span className="text-ragi-accent">Luiz Ragi</span>.
                  <br />
                  Sou <span className="text-ragi-accent">Dev Full-Stack</span>.
                </>
              )}
            </h1>
          </Reveal>

          <Reveal delayMs={120}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              {t.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delayMs={220}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <div className="group relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-ragi-accent to-ragi-accent2 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.55)]"
                >
                  {t.hero.cta}
                  <ChevronDown className="h-4 w-4" />
                </button>

                {/* Tooltip / popup (igual ao legado, mas limpo) */}
                <div className="pointer-events-none absolute left-1/2 top-[110%] w-[270px] -translate-x-1/2 rounded-2xl border border-white/10 bg-black/70 p-4 opacity-0 shadow-[0_24px_60px_rgba(0,0,0,0.65)] backdrop-blur transition group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="grid grid-cols-4 gap-2">
                    <SocialIcon href="https://github.com/lpragi09" label="GitHub">
                      <Github className="h-5 w-5" />
                    </SocialIcon>
                    <SocialIcon
                      href="https://www.linkedin.com/in/luiz-paulo-moreno-ragi-03211735b/"
                      label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </SocialIcon>
                    <SocialIcon
                      href="https://www.instagram.com/luizpragi1_/"
                      label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </SocialIcon>
                    <SocialIcon href="mailto:lpmragi@gmail.com" label="E-mail">
                      <Mail className="h-5 w-5" />
                    </SocialIcon>
                  </div>
                </div>
              </div>

              <a
                href="#projetos"
                className="text-sm font-semibold text-white/70 underline-offset-8 transition hover:text-white hover:underline"
              >
                {lang === "en" ? "See projects" : "Ver projetos"}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={160} className="flex justify-center md:justify-end">
          <div className="relative animate-float-slow">
            <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.22),transparent_65%)] blur-2xl" />
            <div className="relative h-72 w-72 overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.6)] md:h-80 md:w-80">
              <Image
                src="/img/icon_pixel.png"
                alt="Avatar do Luiz Ragi"
                fill
                className="object-cover [image-rendering:pixelated]"
                sizes="(max-width: 768px) 288px, 320px"
                priority
              />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative z-10 mt-16 flex justify-center">
        <a
          href="#sobre"
          className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/50 transition hover:text-white/80"
        >
          <span>{lang === "en" ? "Scroll" : "Scroll"}</span>
          <ChevronDown className="h-4 w-4 animate-bounce text-white/50 group-hover:text-white/80" />
        </a>
      </div>
    </Section>
  );
}

function SocialIcon({
  href,
  label,
  children
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  );
}

