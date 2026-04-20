// HTML elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const btnLogin = document.getElementById("login");
const btnRegister = document.getElementById("register");
const output = document.getElementById("output");

const SUPABASE_URL = "https://mmofbreouukydwythggx.supabase.co";
const SUPABASE_KEY = "sb_publishable_JP5pYPQqmFFPI7gkO05tBQ_U4-OmUiF";

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Form Button onClick functions
btnLogin.addEventListener("click", async () => {
  console.log(emailInput.value);
  const { data, error } = await supabase.auth.signInWithPassword({
    email: emailInput.value,
    password: passwordInput.value,
  });
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});

btnRegister.addEventListener("click", async () => {
  const { data, error } = await supabase.auth.signUp({
    email: emailInput.value,
    password: passwordInput.value,
  });
  if (error) {
    console.error(error);
    break;
  } else {
    console.log(data);
    
  }
});

// Basic data fetching function
async function getData() {
  const { data, error } = await supabase.from("testing").select();

  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
}

getData();