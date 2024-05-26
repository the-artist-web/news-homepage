/**
 * OVERFLOW
 */
const overflow = document.querySelector("[data-overflow]");

/**
 * BTN MENU AND MENU
 */
const menuOn = document.querySelector("[data-menu-on]");
const aside = document.querySelector("[data-aside]");
const menuOff = document.querySelector("[data-menu-off]");

menuOn.addEventListener("click", () => {
  aside.classList.add("active");
  overflow.classList.add("active");
});

menuOff.addEventListener("click", () => {
  aside.classList.remove("active");
  overflow.classList.remove("active");
});

overflow.addEventListener("click", () => {
  aside.classList.remove("active");
  overflow.classList.remove("active");
});