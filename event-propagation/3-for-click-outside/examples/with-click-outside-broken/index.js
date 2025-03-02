const button = document.querySelector("button");
const dropdown = document.querySelector(".dropdown");

button.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});

document.body.addEventListener("click", (event) => {
  if (!dropdown.classList.contains("open")) {
    return;
  }

  if (dropdown.contains(event.target)) {
    return;
  }

  dropdown.classList.remove("open");
});