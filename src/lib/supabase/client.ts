"use client";

import { createClient } from "@supabase/supabase-js";
import { getPublicEnv } from "@/lib/env/public";

export function createSupabaseBrowserClient() {
  const env = getPublicEnv();

  // Segurança: as variáveis devem estar no .env.local (não commitadas)
  if (!env.NEXT_PUBLIC_SUPABASE_URL || !env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error(
      "Supabase não configurado. Defina NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY."
    );
  }

  return createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

