import { createClient } from "@supabase/supabase-js";

export const clientSupabase = createClient(
  import.meta.env.VITE_SUPABASE_2URL,
  import.meta.env.VITE_SUPABASE_2KEY
);
