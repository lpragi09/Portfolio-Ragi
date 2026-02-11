"use client";

import { useT } from "@/lib/i18n/language";

export function Footer() {
  const t = useT();

  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center">
        <p className="text-sm text-white/60">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}

