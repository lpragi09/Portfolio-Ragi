type Bucket = {
  resetAt: number;
  count: number;
};

const buckets = new Map<string, Bucket>();

/**
 * Rate limit simples em memória (best-effort).
 * Em serverless, isso não é garantido entre instâncias, mas reduz spam básico.
 */
export function rateLimit({
  key,
  limit,
  windowMs
}: {
  key: string;
  limit: number;
  windowMs: number;
}) {
  const now = Date.now();
  const current = buckets.get(key);

  if (!current || current.resetAt <= now) {
    buckets.set(key, { resetAt: now + windowMs, count: 1 });
    return { ok: true, remaining: limit - 1 };
  }

  if (current.count >= limit) {
    return { ok: false, remaining: 0, resetAt: current.resetAt };
  }

  current.count += 1;
  return { ok: true, remaining: Math.max(0, limit - current.count) };
}

