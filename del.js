// Toggle sidebar

const toggleSidebarButton = document.getElementById("toggle-sidebar");

const container = document.querySelector(".container");

toggleSidebarButton.addEventListener("click", () => {
  container.classList.toggle("container--sidebar-hide");
});

// Small screens
const hamburgerMenu = document.querySelector(".hamburger-menu");

const navLinks = document.querySelector(".main-navbar ul");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
