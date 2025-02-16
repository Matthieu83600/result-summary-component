document.addEventListener("DOMContentLoaded", async () => {
  const container = document.querySelector(".card__summary-stats");

  // Create item
  const createStatItem = ({ category, score, icon }) => {
    return `
      <div class="card__summary-stats-item">
        <img src="${icon}" alt="" class="card__summary-stats-item-icon" width="20" height="20">
        <h3 class="card__summary-stats-item-name">${category}</h3>
        <p class="card__summary-stats-item-note"><span>${score}</span> / 100</p>
      </div>
    `;
  };

  // Fetch data
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw new Error("Something went wrong");

    const data = await response.json();
    container.innerHTML = data.map(createStatItem).join("");
  } catch (error) {
    console.error("Error:", error);
  }
});
