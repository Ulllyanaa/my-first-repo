const dateSpan = document.getElementById("update-date");
const today = new Date();

dateSpan.textContent =
    today.toLocaleDateString("ru-RU");

console.log("Скрипт работает.");

/* Активное меню */

const navLinks =
    document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(l => {
            l.classList.remove("active");
        });

        link.classList.add("active");
    });
});

/* Бургер */

const burgerBtn =
    document.getElementById("burger-btn");

const nav =
    document.querySelector("nav");

burgerBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

/* Показать больше */

const toggleBtn =
    document.getElementById("toggle-btn");

const extraInfo =
    document.getElementById("extra-info");

toggleBtn.addEventListener("click", () => {

    extraInfo.classList.toggle("expanded");

    toggleBtn.textContent =
        extraInfo.classList.contains("expanded")
        ? "Скрыть"
        : "Показать больше";
});

/* Тёмная тема */

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

const themeToggle =
    document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");

    const isDark =
        document.body.classList.contains(
            "dark-theme"
        );

    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );
});

/* Валидация формы */

const form =
    document.getElementById("contact-form");

form.addEventListener("submit", event => {

    event.preventDefault();

    const nameInput =
        document.getElementById("name");

    const emailInput =
        document.getElementById("email");

    const nameError =
        document.getElementById("name-error");

    const emailError =
        document.getElementById("email-error");

    let isValid = true;

    if (nameInput.value.trim() === "") {

        nameError.textContent =
            "Введите имя";

        isValid = false;

    } else {

        nameError.textContent = "";
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        !emailPattern.test(
            emailInput.value.trim()
        )
    ) {

        emailError.textContent =
            "Введите корректный email";

        isValid = false;

    } else {

        emailError.textContent = "";
    }

    if (isValid) {

        alert("Форма заполнена верно!");

        form.reset();
    }
});

/* ПР №7 */

const projects = [

    {
        id: 2,
        title: "Креативный дизайн",
        category: "creative",
        image: "img/i.webp",
        description:
            "Яркий современный дизайн."
    },

    {
        id: 4,
        title: "Маникюр с рисунком",
        category: "design",
        image: "img/i.webp",
        description:
            "Авторский дизайн ногтей."
    },

    {
        id: 5,
        title: "Современный стиль",
        category: "creative",
        image: "img/i.webp",
        description:
            "Яркие цветовые решения."
    }

];

function createCard(project) {

    return `
        <article class="project-card">
            <img src="${project.image}"
                 alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </article>
    `;
}

function renderProjects(list) {

    const container =
        document.getElementById(
            "projects-grid"
        );

    container.innerHTML =
        list.map(createCard).join("");
}

renderProjects(projects);

const filterButtons =
    document.querySelectorAll(
        ".filters button"
    );

filterButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        filterButtons.forEach(b => {
            b.classList.remove("active");
        });

        btn.classList.add("active");

        const filter =
            btn.dataset.filter;

        const filtered =
            filter === "all"
            ? projects
            : projects.filter(
                p =>
                p.category === filter
            );

        renderProjects(filtered);
    });
});

const searchInput =
    document.getElementById(
        "search-input"
    );

searchInput.addEventListener(
    "input",
    () => {

        const query =
            searchInput.value
                .toLowerCase();

        const filtered =
            projects.filter(
                p =>
                p.title
                 .toLowerCase()
                 .includes(query)
            );

        renderProjects(filtered);
    }
);