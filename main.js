// Toggle sidebar
const toggleSidebarButton = document.querySelector("#toggle-sidebar");
const container = document.querySelector(".container");

toggleSidebarButton.addEventListener("click", function () {
  container.classList.toggle("container--sidebar-hidden");
});

// Small screens
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector("nav ul");

hamburgerMenu.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});
