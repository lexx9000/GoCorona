// Меню бургер

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconMenu.classList.toggle("active");
    menuBody.classList.toggle("active");
  });
}
