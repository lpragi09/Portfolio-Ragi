import { NextResponse } from "next/server";
import { Resend } from "resend";

import { rateLimit } from "@/lib/server/rate-limit";

type Payload = {
  name: string;
  email: string;
  whatsapp?: string;
  message: string;
  // anti-spam
  website?: string; // honeypot (deve ficar vazio)
  turnstileToken?: string;
};

function getIp(req: Request) {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0]?.trim() || "unknown";
  return "unknown";
}

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return { ok: false, reason: "TURNSTILE_SECRET_KEY ausente" };

  const form = new FormData();
  form.set("secret", secret);
  form.set("response", token);
  if (ip && ip !== "unknown") form.set("remoteip", ip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form
  });

  const data = (await res.json()) as { success: boolean };
  return { ok: Boolean(data?.success) };
}

export async function POST(req: Request) {
  const ip = getIp(req);

  // Rate limit por IP (best-effort): 5 envios a cada 10 minutos
  const rl = rateLimit({ key: `contact:${ip}`, limit: 5, windowMs: 10 * 60 * 1000 });
  if (!rl.ok) {
    return NextResponse.json(
      { ok: false, error: "Muitas tentativas. Tente novamente em alguns minutos." },
      { status: 429 }
    );
  }

  let payload: Payload | null = null;
  try {
    payload = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido." }, { status: 400 });
  }

  const name = (payload?.name || "").trim();
  const email = (payload?.email || "").trim();
  const whatsapp = (payload?.whatsapp || "").trim();
  const message = (payload?.message || "").trim();
  const website = (payload?.website || "").trim();
  const turnstileToken = (payload?.turnstileToken || "").trim();

  // Honeypot: se vier preenchido, é bot. Responder 200 pra não dar feedback.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Preencha nome, e-mail e mensagem." },
      { status: 400 }
    );
  }

  if (message.length < 20) {
    return NextResponse.json(
      { ok: false, error: "Escreva um pouco mais na mensagem (mínimo 20 caracteres)." },
      { status: 400 }
    );
  }

  if (!turnstileToken) {
    return NextResponse.json(
      { ok: false, error: "Validação anti-spam obrigatória." },
      { status: 400 }
    );
  }

  const turnstile = await verifyTurnstile(turnstileToken, ip);
  if (!turnstile.ok) {
    return NextResponse.json(
      { ok: false, error: "Falha na validação anti-spam. Tente novamente." },
      { status: 400 }
    );
  }

  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "lpmragi@gmail.com";

  if (!resendKey) {
    return NextResponse.json(
      { ok: false, error: "Servidor sem configuração de e-mail (RESEND_API_KEY)." },
      { status: 500 }
    );
  }

  const resend = new Resend(resendKey);

  const subject = `Novo contato do portfólio — ${name}`;
  const text = [
    "Novo lead do portfólio:",
    "",
    `Nome: ${name}`,
    `E-mail: ${email}`,
    whatsapp ? `WhatsApp: ${whatsapp}` : "WhatsApp: (não informado)",
    "",
    "Mensagem:",
    message
  ].join("\n");

  await resend.emails.send({
    // Observação: troque para seu domínio verificado no Resend quando tiver.
    from: "Portfolio Ragi <onboarding@resend.dev>",
    to: [toEmail],
    subject,
    text,
    replyTo: email
  });

  return NextResponse.json({ ok: true });
}

