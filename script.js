// Dark mode toggle
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Relationship dates
const startDate = new Date("2025-09-15T00:00:00");

function updateTime() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("togetherTime").textContent =
    `We’ve been together for ${days} days, ${hours} hours, and ${minutes} minutes.`;

  const nextAnniversary = new Date(now.getFullYear(), 8, 15);
  if (now > nextAnniversary) nextAnniversary.setFullYear(now.getFullYear() + 1);

  const daysLeft = Math.ceil((nextAnniversary - now) / (1000 * 60 * 60 * 24));

  document.getElementById("anniversaryCountdown").textContent =
    `${daysLeft} days until our anniversary 💙`;
}

setInterval(updateTime, 60000);
updateTime();

// Random memory
const randomBtn = document.getElementById("randomMemoryBtn");
const card = document.getElementById("memoryDisplay");

randomBtn.addEventListener("click", () => {
  const random = memories[Math.floor(Math.random() * memories.length)];

  document.getElementById("memoryImage").src = random.image;
  document.getElementById("memoryDate").textContent = random.date;
  document.getElementById("memoryNote").textContent = random.note;

  card.classList.remove("hidden");
});
