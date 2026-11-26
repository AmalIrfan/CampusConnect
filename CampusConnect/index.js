
// EXPAND / COLLAPSE CARD SECTIONS

document.querySelectorAll(".ExpandButton").forEach(button => {
  button.addEventListener("click", () => {
    const container = button.previousElementSibling;

    container.classList.toggle("Expanded");

    const isExpanded = container.classList.contains("Expanded");

    button.textContent = isExpanded
      ? "Show Less ↑"
      : "Show More ↓";
  });
});


// CONTACT FORM

const contactForm = document.querySelector(".ContactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  alert(`Thank you, ${name}! Your message has been received.`);

  contactForm.reset();
});


// NAVIGATION SCROLL

document.querySelectorAll(".NavLinks a, .Logo, .ScrollButton").forEach(link => {
  link.addEventListener("click", function (event) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

const menuToggle = document.querySelector(".MenuToggle");
const navLinks = document.querySelector(".NavLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("Active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".NavLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("Active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


const themeToggle = document.getElementById("ThemeToggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

// Update button text
function updateThemeButton() {
  const isDark = document.body.classList.contains("dark");

  themeToggle.textContent = isDark
    ? "Theme: Dark"
    : "Theme: Light";
}

updateThemeButton();

// Toggle theme
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");

  updateThemeButton();
});
