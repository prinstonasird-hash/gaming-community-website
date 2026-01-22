const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
function sendMessage() {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text) return;

  const msg = document.createElement("div");
  msg.className = "message self";
  msg.textContent = text;

  document.getElementById("chatMessages").appendChild(msg);
  input.value = "";
}
