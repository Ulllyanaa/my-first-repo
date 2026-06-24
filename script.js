const dateSpan = document.getElementById("update-date");
const today = new Date();
dateSpan.textContent = today.toLocaleDateString("ru-RU");
console.log("Привет! Скрипт подключен и работает.");

element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
const navLinks = document.querySelectorAll("nav a");

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

