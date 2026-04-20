const SUPABASE_URL = "https://mmofbreouukydwythggx.supabase.co";
const SUPABASE_KEY = "sb_publishable_JP5pYPQqmFFPI7gkO05tBQ_U4-OmUiF";

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);