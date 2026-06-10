import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ycefaxkmdtivjvuzrwex.supabase.co";
const supabaseKey = "sb_publishable_vNiJqEsRTCyhtxk9qSxL2A_bKaYQKN7";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
