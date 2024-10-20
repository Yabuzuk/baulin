const toggle = document.getElementById("toggle");
const navbar = document.getElementById("navbar"); // Объявляем переменную navbar

// Если есть модальное окно, убедитесь, что элементы open, close и modal существуют
const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal");

function closeNavbar(e) {
  if (
    document.body.classList.contains("show-nav") &&
    e.target !== toggle &&
    !toggle.contains(e.target) &&
    e.target !== navbar &&
    !navbar.contains(e.target)
  ) {
    document.body.classList.toggle("show-nav");
    document.body.removeEventListener("click", closeNavbar);
  } else if (!document.body.classList.contains("show-nav")) {
    document.body.removeEventListener("click", closeNavbar);
  }
}

// Menu Slider
toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
  document.body.addEventListener("click", closeNavbar);
});

// Modal (проверка на существование элементов модального окна)
if (open && close && modal) {
  open.addEventListener("click", () => modal.classList.add("show-modal"));
  close.addEventListener("click", () => modal.classList.remove("show-modal"));
  window.addEventListener("click", (e) =>
    e.target == modal ? modal.classList.remove("show-modal") : false
  );
}
