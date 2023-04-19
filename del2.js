// Toggle sidebar
const toggleSidebarButton = document.querySelector("#toggle-sidebar");

const container = document.querySelector(".container");

toggleSidebarButton.addEventListener("click", function () {
  container.classList.toggle("container--sidebar-hide");
});

// Small screens

const hamburgerButton = document.querySelector(".hamburger-menu");

const navLinks = document.querySelector("nav ul");

hamburgerButton.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});
