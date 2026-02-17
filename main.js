document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     DARK MODE TOGGLE
  ========================== */
  const toggle = document.getElementById("darkToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
  }

  /* =========================
     TIME TOGETHER (DETAILED)
  ========================== */
  const togetherEl = document.getElementById("togetherTime");
  const anniversaryEl = document.getElementById("anniversaryCountdown");

  const start = new Date(relationship.startDate + "T00:00:00");

  function updateTimeTogether() {
    const now = new Date();
    let totalMinutes = Math.floor((now - start) / 60000);

    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;
    const totalDays = Math.floor(totalHours / 24);

    const months = Math.floor(totalDays / 30.44);
    const daysAfterMonths = totalDays - Math.floor(months * 30.44);
    const weeks = Math.floor(daysAfterMonths / 7);
    const days = daysAfterMonths % 7;

    togetherEl.textContent =
      `${months} months · ${weeks} weeks · ${days} days · ${hours} hours · ${minutes} minutes`;

    // Anniversary countdown
    let next = new Date(
      now.getFullYear(),
      relationship.anniversaryMonth - 1,
      relationship.anniversaryDay
    );

    if (now > next) next.setFullYear(now.getFullYear() + 1);

    const daysLeft = Math.ceil((next - now) / 86400000);
    anniversaryEl.textContent = `${daysLeft} days until our anniversary`;
  }

  updateTimeTogether();
  setInterval(updateTimeTogether, 60000);

  /* =========================
     TODAY'S MESSAGE
  ========================== */
  if (messages && messages.length) {
    const today = messages[messages.length - 1];
    document.getElementById("todayDate").textContent = today.date;
    document.getElementById("todayMessage").textContent = today.text;
  }

  /* =========================
     RANDOM MEMORY
  ========================== */
  const memoryBtn = document.getElementById("randomMemoryBtn");
  const memoryWrap = document.getElementById("memoryDisplay");

  if (memoryBtn && Array.isArray(memories)) {
    memoryBtn.addEventListener("click", () => {
      const m = memories[Math.floor(Math.random() * memories.length)];

      document.getElementById("memoryImage").src = m.image;
      document.getElementById("memoryImage").alt = m.note;
      document.getElementById("memoryDate").textContent = m.date;
      document.getElementById("memoryNote").textContent = m.note;

      memoryWrap.classList.remove("hidden");
    });
  }

});
