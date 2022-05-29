// MENU BUTTON
const toggleMenu = (e) => {
  let menuItems = document.querySelector("#navMenu");

  e.name === "menu"
    ? ((e.name = "close"), menuItems.classList.remove("hidden"))
    : ((e.name = "menu"), menuItems.classList.add("hidden"));
};
