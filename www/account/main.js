const output = document.getElementById("output")

const SUPABASE_URL = "https://mmofbreouukydwythggx.supabase.co";
const SUPABASE_KEY = "sb_publishable_JP5pYPQqmFFPI7gkO05tBQ_U4-OmUiF";

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function getData() {
  const { data, error } = await supabase.from("testing").select();

  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
}

getData();