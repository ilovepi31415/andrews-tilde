const btnLogout = document.getElementById("logout")

import { supabase } from "../supabase.js"

const { data: { user } } = await supabase.auth.getUser();
if (!user) {
  console.log("");
  window.location.href = "../";
} else {
  console.log("not logged in")
}

btnLogout.addEventListener("click", async () => {
    const { error }  = await supabase.auth.signOut();

    if (error) {
        console.error("Logout failed:", error)
    } else {
        console.log("Logging Out")
        window.location.href = "../index.html";
} 
});

console.log("Hi")