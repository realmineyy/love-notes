// Dark mode
document.getElementById("darkToggle").onclick = () =>
  document.body.classList.toggle("dark");

// Relationship timing
const startDate = new Date("2025-09-15T00:00:00");

function updateTime() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / 86400000);
  document.getElementById("togetherTime").textContent =
    `We’ve been together for ${days} days 💙`;

  const nextAnniversary = new Date(now.getFullYear(), 8, 15);
  if (now > nextAnniversary) nextAnniversary.setFullYear(now.getFullYear() + 1);

  const daysLeft = Math.ceil((nextAnniversary - now) / 86400000);
  document.getElementById("anniversaryCountdown").textContent =
    `${daysLeft} days until our anniversary`;
}

updateTime();
setInterval(updateTime, 60000);

// Daily message
const today = messages[0];
document.getElementById("todayDate").textContent = today.date;
document.getElementById("todayMessage").textContent = today.text;

// Archive
const archive = document.getElementById("messageArchive");
messages.slice(1).forEach(msg => {
  const div = document.createElement("div");
  div.className = "archive-entry";
  div.innerHTML = `
    <p class="archive-date">${msg.date}</p>
    <p>${msg.text}</p>
  `;
  archive.appendChild(div);
});

// Random memory
document.getElementById("randomMemoryBtn").onclick = () => {
  const m = memories[Math.floor(Math.random() * memories.length)];
  document.getElementById("memoryImage").src = m.image;
  document.getElementById("memoryDate").textContent = m.date;
  document.getElementById("memoryNote").textContent = m.note;
  document.getElementById("memoryDisplay").classList.remove("hidden");
};

