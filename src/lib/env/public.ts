export function getPublicEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return {
    NEXT_PUBLIC_SUPABASE_URL: url ?? "",
    NEXT_PUBLIC_SUPABASE_ANON_KEY: anon ?? ""
  };
}

