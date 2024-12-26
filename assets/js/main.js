document.querySelector(".close-menu").addEventListener("click", (evt) => {
  evt.preventDefault();
  document
    .querySelector(".close-menu")
    .closest(".site-header")
    .classList.toggle("open");
});
