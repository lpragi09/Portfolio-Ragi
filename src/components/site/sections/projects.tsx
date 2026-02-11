"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { projects } from "@/data/portfolio";
import { useT } from "@/lib/i18n/language";
import { Reveal } from "@/components/effects/reveal";
import { Section, SectionTitle } from "@/components/ui/section";

export function ProjectsSection() {
  const t = useT();

  return (
    <Section id="projetos" className="border-t border-white/10">
      <Reveal>
        <SectionTitle title={t.sections.projects} highlight="" />
      </Reveal>

      <Reveal delayMs={120}>
        <div className="mt-14 flex flex-col gap-4 md:h-[70vh] md:flex-row">
          {projects.map((p) => {
            const title = t.projects[p.id].title;
            const desc = t.projects[p.id].desc;
            const isClickable = Boolean(p.url);

            const Content = (
              <>
                <div className="absolute inset-0">
                  <ProjectMedia src={p.image} alt={title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/0 opacity-90 transition md:opacity-70 md:group-hover:opacity-95" />
                </div>

                <div className="relative z-10 mt-auto p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-serif text-2xl font-semibold text-white md:text-3xl">
                      {title}
                    </h3>
                    {isClickable ? (
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80">
                        <ExternalLink className="h-4 w-4" />
                        Abrir
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
                    {desc}
                  </p>
                  {p.client ? (
                    <div className="mt-4 inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                      Cliente
                    </div>
                  ) : null}
                </div>
              </>
            );

            const baseClass =
              "group relative flex h-[240px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.55)] md:h-full md:flex-1 md:transition-[flex] md:duration-700 md:ease-[cubic-bezier(0.4,0,0.2,1)] md:hover:flex-[4]";

            return isClickable ? (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className={baseClass}
              >
                {Content}
              </a>
            ) : (
              <div key={p.id} className={baseClass}>
                {Content}
              </div>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}

function ProjectMedia({ src, alt }: { src: string; alt: string }) {
  const isSvg = src.toLowerCase().endsWith(".svg");
  const mediaClass =
    "h-full w-full object-cover object-[center_30%] transition-transform duration-700 ease-out md:group-hover:scale-[1.04]";

  if (isSvg) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={mediaClass} />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={mediaClass}
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  );
}
