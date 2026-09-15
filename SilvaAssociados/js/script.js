// ========================================
//  SELEÇÃO DOS ELEMENTOS
// ========================================

const header = document.getElementById("header");
const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menu-toggle");

const contactForm = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");

const revealElements = document.querySelectorAll(".reveal");

// ========================================
//  HEADER AO ROLAR A PÁGINA
// ========================================

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ========================================
//  MENU MOBILE
// ========================================

menuToggle.addEventListener("click", () => {
  const menuAberto = nav.classList.toggle("ativo");

  menuToggle.classList.toggle("ativo");

  document.body.classList.toggle("menu-open");

  menuToggle.setAttribute("aria-expanded", menuAberto);
});

// ========================================
//  FECHAR O MENU MOBILE
// ========================================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("ativo");

    menuToggle.classList.remove("ativo");

    document.body.classList.remove("menu-open");

    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    nav.classList.remove("ativo");

    menuToggle.classList.remove("ativo");

    document.body.classList.remove("menu-open");

    menuToggle.setAttribute("aria-expanded", "false");
  }
});

// ========================================
//  REVEAL DOS ELEMENTOS
// ========================================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  observer.observe(element);
});

// ========================================
//  FORMULÁRIO DE CONTATO
// ========================================

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  contactForm
    .querySelectorAll(".form-group, .form-submit")
    .forEach((element) => {
      element.style.display = "none";
    });

  formSuccess.style.display = "flex";

  formSuccess.setAttribute("aria-hidden", "false");
});
