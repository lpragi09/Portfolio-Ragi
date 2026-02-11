"use client";

import Script from "next/script";
import { useEffect, useMemo, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark";
          size?: "normal" | "compact" | "invisible";
        }
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

export function Turnstile({
  onToken,
  className
}: {
  onToken: (token: string) => void;
  className?: string;
}) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";
  const ref = useRef<HTMLDivElement | null>(null);
  const [widgetId, setWidgetId] = useState<string | null>(null);

  const canRender = useMemo(() => Boolean(siteKey), [siteKey]);

  useEffect(() => {
    if (!canRender) return;
    const el = ref.current;
    if (!el) return;
    if (!window.turnstile) return;
    if (widgetId) return;

    const id = window.turnstile.render(el, {
      sitekey: siteKey,
      theme: "dark",
      callback: (token) => onToken(token),
      "expired-callback": () => onToken(""),
      "error-callback": () => onToken("")
    });
    setWidgetId(id);
  }, [canRender, onToken, siteKey, widgetId]);

  return (
    <div className={className}>
      {canRender ? (
        <>
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
            strategy="afterInteractive"
            onLoad={() => {
              // O render acontece no useEffect quando window.turnstile estiver disponível
            }}
          />
          <div ref={ref} />
        </>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-xs text-white/60">
          Anti-spam não configurado. Defina <code>NEXT_PUBLIC_TURNSTILE_SITE_KEY</code>.
        </div>
      )}
    </div>
  );
}

