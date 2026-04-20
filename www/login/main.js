// HTML elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const formLogin = document.getElementById("login-form")
const btnLogin = document.getElementById("login");
const btnRegister = document.getElementById("register");
const output = document.getElementById("output");

import { supabase } from "../supabase.js"

const { data: { user } } = await supabase.auth.getUser();
if (user) {
  console.log("logged in");
  window.location.href = "../account";
} else {
  console.log("not logged in")
}

// Form Button onClick functions
formLogin.addEventListener("submit", async (e) => {
  e.preventDefault();

  console.log(emailInput.value);
  const { data, error } = await supabase.auth.signInWithPassword({
    email: emailInput.value,
    password: passwordInput.value,
  });
  if (error) {
    console.error(error);
  } else {
    console.log(data);
    window.location.href = "../account";
  }
});

btnRegister.addEventListener("click", async () => {
  const { data, error } = await supabase.auth.signUp({
    email: emailInput.value,
    password: passwordInput.value,
  });
  if (error) {
    console.error(error);
    return;
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