"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Globe, Menu, X } from "lucide-react";

import { useLanguage } from "@/lib/i18n/language";

type NavItem = {
  href: string;
  label: string;
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  const items = useMemo<NavItem[]>(() => {
    if (lang === "en") {
      return [
        { href: "#inicio", label: "Home" },
        { href: "#sobre", label: "About" },
        { href: "#projetos", label: "Projects" },
        { href: "#habilidades", label: "Skills" }
      ];
    }

    return [
      { href: "#inicio", label: "Início" },
      { href: "#sobre", label: "Sobre" },
      { href: "#projetos", label: "Projetos" },
      { href: "#habilidades", label: "Habilidades" }
    ];
  }, [lang]);

  function handleNavClick() {
    setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-3 text-white/90 transition hover:text-white"
          aria-label="Ir para o topo"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
            <span className="font-semibold tracking-tight">LR</span>
          </span>
          <span className="hidden font-[var(--font-playfair)] text-lg md:block">
            Luiz Ragi
          </span>
        </Link>

        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Navegação principal"
        >
          {items.map((item: NavItem) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/80 underline-offset-8 transition hover:text-white hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/85 transition hover:bg-white/10"
          >
            <Globe className="h-4 w-4" />
            <span>{lang === "en" ? "EN/PT" : "PT/EN"}</span>
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/85 transition hover:bg-white/10 md:hidden"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v: boolean) => !v)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Painel mobile horizontal: h-[50vh], descendo do topo */}
      <div
        className={[
          "md:hidden",
          "overflow-hidden border-b border-white/10 bg-black/60 backdrop-blur",
          "transition-[max-height,opacity] duration-300",
          isOpen ? "max-h-[50vh] opacity-100" : "max-h-0 opacity-0"
        ].join(" ")}
      >
        <div className="mx-auto flex h-[50vh] max-w-6xl flex-col justify-center px-6 py-6">
          <div className="grid gap-3">
            {items.map((item: NavItem) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base font-semibold text-white/90 transition hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-6 text-xs text-white/50">
            {lang === "en"
              ? "Menu collapses automatically after navigation."
              : "O menu fecha automaticamente após navegar."}
          </div>
        </div>
      </div>
    </header>
  );
}

