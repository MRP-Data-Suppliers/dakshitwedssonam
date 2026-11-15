const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "मेन्यू खोलें" : "मेन्यू बंद करें");
  navigation.classList.toggle("is-open", !isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "मेन्यू खोलें");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "मेन्यू खोलें");
  }
});

const weddingDay = new Date("2026-12-03T00:00:00+05:30").getTime();
const labels = {
  days: 24 * 60 * 60 * 1000,
  hours: 60 * 60 * 1000,
  minutes: 60 * 1000,
  seconds: 1000,
};

function updateCountdown() {
  let remaining = Math.max(0, weddingDay - Date.now());
  Object.entries(labels).forEach(([id, unit]) => {
    const value = Math.floor(remaining / unit);
    document.getElementById(id).textContent = String(value).padStart(2, "0");
    remaining %= unit;
  });
}

updateCountdown();
window.setInterval(updateCountdown, 1000);
