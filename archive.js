// Dark mode toggle
const toggle = document.getElementById("darkToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// Render archive: newest → oldest
const container = document.getElementById("archiveList");

if (Array.isArray(messages)) {
  [...messages].reverse().forEach(msg => {
    const entry = document.createElement("div");
    entry.className = "archive-entry";
    entry.innerHTML = `
      <p class="archive-date">${msg.date}</p>
      <p>${msg.text}</p>
    `;
    container.appendChild(entry);
  });
}
