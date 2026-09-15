// ======================================================
// PROJETO PORTFÓLIO 01
// NovaTech - Landing Page
// ======================================================

// ======================================================
// TESTES
// ======================================================

// console.log("Script carregado!");

// window.addEventListener("scroll", function () {
//   console.log(window.scrollY);
// });

// ======================================================
// ELEMENTOS
// ======================================================

const header = document.querySelector("header");
const botao = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");
const linksMenu = document.querySelectorAll("nav ul a");
const elementosReveal = document.querySelectorAll(".reveal");

// console.log(header);

// ======================================================
// HEADER
// ======================================================

window.addEventListener("scroll", function () {
  header.classList.toggle("header-scroll", window.scrollY > 80);
});

/* botao.addEventListener("click", function () {
  menu.classList.toggle("ativo");
  console.log(botao.innerHTML);

  if (menu.classList.contains("ativo")) {
    botao.innerHTML = "✕";
  } else {
    botao.innerHTML = "☰";
  }
}); */

botao.addEventListener("click", function () {
  menu.classList.toggle("ativo");

  console.log(menu.classList.contains("ativo"));

  if (menu.classList.contains("ativo")) {
    botao.innerHTML = "✕";
  } else {
    botao.innerHTML = "☰";
  }
});

linksMenu.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("ativo");

    botao.textContent = "☰";
  });
});

document.addEventListener("click", function (event) {
  if (
    menu.classList.contains("ativo") &&
    !menu.contains(event.target) &&
    !botao.contains(event.target)
  ) {
    menu.classList.remove("ativo");
    botao.textContent = "☰";
  }
});

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        observer.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.5,
  },
);

elementosReveal.forEach(function (elemento) {
  observer.observe(elemento);
});
