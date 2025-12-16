const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__links", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".steps__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".service__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".service__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

ScrollReveal().reveal(".experience__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".download__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".download__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".download__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".download__links", {
  ...scrollRevealOption,
  delay: 1500,
});

// New ScrollReveal for the Contact Us section
ScrollReveal().reveal(".contact__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".contact__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".whatsapp__link", {
  ...scrollRevealOption,
  delay: 1000,
});