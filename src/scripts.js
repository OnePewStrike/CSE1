const toggleNavButton = document.getElementById("toggleNavButton");
const navElement = document.getElementById("navElement");
const toggleCloseButton = document.getElementById("closeBtn");

toggleNavButton.addEventListener("click", function () {
  navElement.classList.toggle("hidden");
});

toggleCloseButton.addEventListener("click", function() {
  navElement.classList.toggle("hidden");
})
