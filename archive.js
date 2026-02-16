const container = document.getElementById("archive");

messages
  .slice()
  .reverse()
  .forEach(m => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${m.date}</h3><p>${m.text}</p>`;
    container.appendChild(div);
  });
