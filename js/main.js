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
const filters = document.querySelectorAll(".clip-filter");
const clips = document.querySelectorAll(".clip-card");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(btn => btn.classList.remove("active"));
    filter.classList.add("active");

    const game = filter.dataset.game;

    clips.forEach(clip => {
      clip.style.display =
        game === "all" || clip.dataset.game === game
          ? "block"
          : "none";
    });
  });
});
