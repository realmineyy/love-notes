// ---------- Dark Mode ----------
const toggle = document.getElementById("darkToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// ---------- Relationship Timers ----------
const startDate = new Date(relationship.startDate + "T00:00:00");

function updateTime() {
  const now = new Date();

  // Time together
  const diff = now - startDate;
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);

  document.getElementById("togetherTime").textContent =
    `We’ve been together for ${days} days and ${hours} hours 💙`;

  // Anniversary countdown
  let nextAnniversary = new Date(
    now.getFullYear(),
    relationship.anniversaryMonth - 1,
    relationship.anniversaryDay
  );

  if (now > nextAnniversary) {
    nextAnniversary.setFullYear(now.getFullYear() + 1);
  }

  const daysLeft = Math.ceil((nextAnniversary - now) / 86400000);

  document.getElementById("anniversaryCountdown").textContent =
    `${daysLeft} days until our anniversary`;
}

updateTime();
setInterval(updateTime, 60000);

// ---------- Today’s Message ----------
if (Array.isArray(messages) && messages.length > 0) {
  const today = messages[messages.length - 1];
  document.getElementById("todayDate").textContent = today.date;
  document.getElementById("todayMessage").textContent = today.text;
}

// ---------- Random Memory ----------
document.getElementById("randomMemoryBtn").onclick = () => {
  const m = memories[Math.floor(Math.random() * memories.length)];
  document.getElementById("memoryImage").src = m.image;
  document.getElementById("memoryDate").textContent = m.date;
  document.getElementById("memoryNote").textContent = m.note;
  document.getElementById("memoryDisplay").classList.remove("hidden");
};
