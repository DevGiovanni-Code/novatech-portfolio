/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

/* =========================================================
   HEADER SCROLL
========================================================= */

const header = document.querySelector(".site-header");

function updateHeader() {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateHeader);

updateHeader();

/* =========================================================
   MENU MOBILE
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("ativo");
});

/* =========================================================
   FECHAR MENU AO CLICAR EM UM LINK
========================================================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("ativo");
  });
});

/* =========================================================
   MODAL DE AGENDAMENTO
========================================================= */

const appointmentButtons = document.querySelectorAll(".js-appointment");

const appointmentModal = document.querySelector("#appointmentModal");

const appointmentClose = document.querySelector(".appointment-close");

const appointmentOverlay = document.querySelector(".appointment-overlay");

const appointmentForm = document.querySelector("#appointmentForm");

const appointmentFormWrapper = document.querySelector(
  ".appointment-form-wrapper",
);

const appointmentSuccess = document.querySelector(".appointment-success");

const appointmentSuccessClose = document.querySelector(
  ".appointment-success-close",
);

/* =========================================================
   ABRIR MODAL
========================================================= */

function openAppointmentModal() {
  appointmentModal.classList.add("ativo");

  appointmentModal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}

/* =========================================================
   FECHAR MODAL
========================================================= */

function closeAppointmentModal() {
  appointmentModal.classList.remove("ativo");

  appointmentModal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

  resetAppointmentForm();
}

/* =========================================================
   BOTÕES DE AGENDAMENTO
========================================================= */

appointmentButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    openAppointmentModal();
  });
});

/* =========================================================
   FECHAR PELO X
========================================================= */

appointmentClose.addEventListener("click", closeAppointmentModal);

/* =========================================================
   FECHAR CLICANDO NO OVERLAY
========================================================= */

appointmentOverlay.addEventListener("click", closeAppointmentModal);

/* =========================================================
   FECHAR COM ESC
========================================================= */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && appointmentModal.classList.contains("ativo")) {
    closeAppointmentModal();
  }
});

/* =========================================================
   FORMULÁRIO
========================================================= */

appointmentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  appointmentFormWrapper.classList.add("oculto");

  appointmentSuccess.classList.add("visivel");
});

/* =========================================================
   VOLTAR AO SITE
========================================================= */

appointmentSuccessClose.addEventListener("click", closeAppointmentModal);

/* =========================================================
   RESET
========================================================= */

function resetAppointmentForm() {
  appointmentForm.reset();

  appointmentFormWrapper.classList.remove("oculto");

  appointmentSuccess.classList.remove("visivel");
}
