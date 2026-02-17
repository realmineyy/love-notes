document.addEventListener("DOMContentLoaded", () => {

  /* ---------- DARK MODE ---------- */
  const toggle = document.getElementById("darkToggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });

  /* ---------- TIME LOGIC ---------- */
  const startDate = new Date(relationship.startDate + "T00:00:00");

  function updateTimers() {
    const now = new Date();
    let diff = Math.floor((now - startDate) / 1000); // seconds

    const minutes = Math.floor(diff / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30.44);

    const remMinutes = minutes % 60;
    const remHours = hours % 24;
    const remDays = days % 7;
    const remWeeks = weeks % 4;

    document.getElementById("togetherTime").textContent =
      `${months} months · ${remWeeks} weeks · ${remDays} days · ${remHours} hours · ${remMinutes} minutes`;

    // Anniversary countdown
    let next = new Date(
      now.getFullYear(),
      relationship.anniversaryMonth - 1,
      relationship.anniversaryDay
    );

    if (now > next) next.setFullYear(now.getFullYear() + 1);

    const daysLeft = Math.ceil((next - now) / 86400000);

    document.getElementById("anniversaryCountdown").textContent =
      `${daysLeft} days until our anniversary`;
  }

  updateTimers();
  setInterval(updateTimers, 60000);

  /* ---------- TODAY MESSAGE ---------- */
  if (messages && messages.length > 0) {
    const today = messages[messages.length - 1];
    document.getElementById("todayDate").textContent = today.date;
    document.getElementById("todayMessage").textContent = today.text;
  }

  /* ---------- RANDOM MEMORY ---------- */
  const btn = document.getElementById("randomMemoryBtn");
  const display = document.getElementById("memoryDisplay");

  btn.addEventListener("click", () => {
    const memory = memories[Math.floor(Math.random() * memories.length)];

    document.getElementById("memoryImage").src = memory.image;
    document.getElementById("memoryDate").textContent = memory.date;
    document.getElementById("memoryNote").textContent = memory.note;

    display.classList.remove("hidden");
  });

});
