document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("archive");

  messages
    .slice()
    .reverse()
    .forEach(m => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<p class="date">${m.date}</p><p>${m.text}</p>`;
      container.appendChild(card);
    });
});
