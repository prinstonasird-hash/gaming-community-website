const players = [
  { name: "AceX", game: "Valorant", role: "Duelist", region: "Asia" },
  { name: "Shadow", game: "BGMI", role: "IGL", region: "India" },
  { name: "Neo", game: "Valorant", role: "Controller", region: "EU" },
  { name: "Striker", game: "FIFA", role: "Attacker", region: "Global" },
  { name: "Ghost", game: "BGMI", role: "Sniper", region: "India" }
];

const playerList = document.getElementById("playerList");
const searchInput = document.getElementById("searchInput");
const gameFilter = document.getElementById("gameFilter");

function displayPlayers(list) {
  playerList.innerHTML = "";

  if (list.length === 0) {
    playerList.innerHTML = "<p>No players found.</p>";
    return;
  }

  list.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
      <h3>${player.name}</h3>
      <p>🎮 Game: ${player.game}</p>
      <p>🧩 Role: ${player.role}</p>
      <p>🌍 Region: ${player.region}</p>
      <button>Connect</button>
    `;
    playerList.appendChild(card);
  });
}

function filterPlayers() {
  const searchText = searchInput.value.toLowerCase();
  const selectedGame = gameFilter.value;

  const filtered = players.filter(player => {
    const matchesText =
      player.name.toLowerCase().includes(searchText) ||
      player.role.toLowerCase().includes(searchText);

    const matchesGame =
      selectedGame === "" || player.game === selectedGame;

    return matchesText && matchesGame;
  });

  displayPlayers(filtered);
}

searchInput.addEventListener("input", filterPlayers);
gameFilter.addEventListener("change", filterPlayers);

// Initial load
displayPlayers(players);
