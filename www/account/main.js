const inputUsername = document.getElementById("change-username");
const btnUsernameChange = document.getElementById("btn-username-change");
const btnLogout = document.getElementById("logout");
const currentUsername = document.getElementById("current-username");

import { supabase } from "../supabase.js"

const { data: { user } } = await supabase.auth.getUser();
if (!user) {
  console.log("");
  window.location.href = "../";
} else {
  console.log("not logged in")
}
updateUsername();

btnLogout.addEventListener("click", async () => {
  const { error }  = await supabase.auth.signOut();

  if (error) {
      console.error("Logout failed: ", error)
  } else {
      console.log("Logging Out")
      window.location.href = "../index.html";
  } 
});

btnUsernameChange.addEventListener("click", async () => {
  if (inputUsername) {
    const { data, error } = await supabase.from("profiles").update({ username: inputUsername.value }).eq('id', user.id);
    if (error) {
      console.error("Update failed: ", error);
    } else {
      inputUsername.value = ""
    }
  }
  updateUsername();
});

async function updateUsername() {
  const { data, error } = await supabase.from("profiles").select("username").eq("id", user.id);
  if (error) {
    console.error("Update failed: ", error);
  } else {
    currentUsername.innerText = data[0].username;
  }
}