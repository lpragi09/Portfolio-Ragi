"use client";

import { useMemo, useState } from "react";
import { Mail, MessageSquare, Phone, Send, User } from "lucide-react";

import { Reveal } from "@/components/effects/reveal";
import { Section, SectionTitle } from "@/components/ui/section";
import { cn } from "@/lib/utils/cn";
import { useT } from "@/lib/i18n/language";
import { Turnstile } from "@/components/forms/turnstile";

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  message: string;
  website: string; // honeypot
};

export function ContactSection() {
  const t = useT();
  const [state, setState] = useState<FormState>({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
    website: ""
  });
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  const isValid = useMemo(() => {
    if (!state.name.trim()) return false;
    if (!state.email.trim()) return false;
    if (!state.message.trim()) return false;
    if (!turnstileToken) return false;
    return true;
  }, [state.email, state.message, state.name, turnstileToken]);

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setStatus("idle");
    setError(null);
    setState((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;

    try {
      setIsSending(true);
      setError(null);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          whatsapp: state.whatsapp,
          message: state.message,
          website: state.website,
          turnstileToken
        })
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data?.ok) {
        setError(data?.error || "Não foi possível enviar agora. Tente novamente.");
        return;
      }

      setStatus("success");
      setTurnstileToken("");
      setState({ name: "", email: "", whatsapp: "", message: "", website: "" });
    } catch {
      setError("Não foi possível enviar agora. Tente novamente.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <Section id="contato" className="border-t border-white/10">
      <Reveal>
        <SectionTitle title={t.sections.contact} highlight="" />
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.22),transparent_60%)] blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(75,0,130,0.18),transparent_60%)] blur-3xl"
            />

            <div className="relative">
              <h3 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                {t.contact.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                {t.contact.subtitle}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={120} className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.55)]"
          >
            {/* Honeypot (anti-spam) */}
            <input
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
              value={state.website}
              onChange={(e) => onChange("website", e.target.value)}
              placeholder="website"
            />

            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label={t.contact.nameLabel}
                placeholder={t.contact.namePlaceholder}
                icon={<User className="h-5 w-5" />}
                value={state.name}
                onChange={(v) => onChange("name", v)}
                required
              />
              <Field
                label={t.contact.emailLabel}
                placeholder={t.contact.emailPlaceholder}
                icon={<Mail className="h-5 w-5" />}
                value={state.email}
                onChange={(v) => onChange("email", v)}
                inputMode="email"
                required
              />
              <Field
                className="md:col-span-2"
                label={t.contact.whatsappLabel}
                placeholder={t.contact.whatsappPlaceholder}
                icon={<Phone className="h-5 w-5" />}
                value={state.whatsapp}
                onChange={(v) => onChange("whatsapp", v)}
                inputMode="tel"
              />
              <FieldTextarea
                className="md:col-span-2"
                label={t.contact.messageLabel}
                placeholder={t.contact.messagePlaceholder}
                icon={<MessageSquare className="h-5 w-5" />}
                value={state.message}
                onChange={(v) => onChange("message", v)}
                required
              />
            </div>

            <div className="mt-6">
              <Turnstile
                onToken={(token) => {
                  setError(null);
                  setTurnstileToken(token);
                }}
              />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={!isValid || isSending}
                className={cn(
                  "inline-flex items-center justify-center gap-3 rounded-2xl px-7 py-4 text-sm font-semibold text-white",
                  "bg-gradient-to-br from-ragi-accent to-ragi-accent2 shadow-[0_12px_30px_rgba(0,0,0,0.55)]",
                  "transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.55)]",
                  "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                )}
              >
                <Send className="h-5 w-5" />
                {isSending ? "Enviando..." : t.contact.submit}
              </button>

              {status === "success" ? (
                <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                  <div className="text-sm font-semibold text-white">
                    {t.contact.successTitle}
                  </div>
                  <div className="mt-1 text-xs text-white/60">{t.contact.successDesc}</div>
                </div>
              ) : error ? (
                <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                  <div className="text-sm font-semibold text-white">Erro ao enviar</div>
                  <div className="mt-1 text-xs text-white/60">{error}</div>
                </div>
              ) : (
                <div className="text-xs leading-relaxed text-white/50">
                  *Campos obrigatórios: nome, e-mail e mensagem.
                </div>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  placeholder,
  icon,
  value,
  onChange,
  required,
  inputMode,
  className
}: {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  className?: string;
}) {
  const id = useMemo(() => `field_${label.toLowerCase().replace(/\s+/g, "_")}`, [label]);

  return (
    <label className={cn("grid gap-2", className)} htmlFor={id}>
      <span className="text-xs font-semibold uppercase tracking-[0.26em] text-white/55">
        {label}
      </span>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
          {icon}
        </span>
        <input
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          inputMode={inputMode}
          className={cn(
            "h-14 w-full rounded-2xl border border-white/10 bg-black/20 pl-12 pr-4 text-sm text-white",
            "placeholder:text-white/35",
            "outline-none transition focus:border-white/20 focus:bg-black/30 focus:ring-2 focus:ring-ragi-accent/30"
          )}
          placeholder={placeholder}
        />
      </div>
    </label>
  );
}

function FieldTextarea({
  label,
  placeholder,
  icon,
  value,
  onChange,
  required,
  className
}: {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
}) {
  const id = useMemo(() => `field_${label.toLowerCase().replace(/\s+/g, "_")}`, [label]);

  return (
    <label className={cn("grid gap-2", className)} htmlFor={id}>
      <span className="text-xs font-semibold uppercase tracking-[0.26em] text-white/55">
        {label}
      </span>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-5 text-white/40">
          {icon}
        </span>
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={cn(
            "min-h-[180px] w-full resize-none rounded-2xl border border-white/10 bg-black/20 pl-12 pr-4 pt-4 text-sm text-white",
            "placeholder:text-white/35",
            "outline-none transition focus:border-white/20 focus:bg-black/30 focus:ring-2 focus:ring-ragi-accent/30"
          )}
          placeholder={placeholder}
        />
      </div>
    </label>
  );
}

