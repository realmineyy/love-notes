document.addEventListener("DOMContentLoaded", () => {

  // ---------- DARK MODE ----------
  const toggle = document.getElementById("darkToggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });

  // ---------- TIMERS ----------
  const startDate = new Date(relationship.startDate + "T00:00:00");

  function updateTimers() {
    const now = new Date();

    // time together
    const diff = now - startDate;
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);

    document.getElementById("togetherTime").textContent =
      `We’ve been together for ${days} days and ${hours} hours`;

    // anniversary countdown
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

  // ---------- TODAY MESSAGE ----------
  if (Array.isArray(messages) && messages.length > 0) {
    const today = messages[messages.length - 1];
    document.getElementById("todayDate").textContent = today.date;
    document.getElementById("todayMessage").textContent = today.text;
  }

});
