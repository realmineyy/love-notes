// Dark mode
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Render archive (newest → oldest)
const container = document.getElementById("archiveList");

[...messages].reverse().forEach(msg => {
  const entry = document.createElement("div");
  entry.className = "archive-entry";
  entry.innerHTML = `
    <p class="archive-date">${msg.date}</p>
    <p>${msg.text}</p>
  `;
  container.appendChild(entry);
});
