const dropdownContainers = document.querySelectorAll(".dropdown-container");

dropdownContainers.forEach((dropdownContainer) => {
  const button = dropdownContainer.querySelector("button");
  const dropdown = dropdownContainer.querySelector(".dropdown");

  button.addEventListener("click", () => {
    dropdown.classList.toggle("open");
  });

  document.body.addEventListener("click", (event) => {
    if (!dropdown.classList.contains("open")) {
      return;
    }

    if (event.target.closest(".dropdown-container") === dropdownContainer) {
      return;
    }

    dropdown.classList.remove("open");
  });
});

// const dropdownContainers = document.querySelectorAll(".dropdown-container");

// dropdownContainers.forEach((dropdownContainer) => {
//   const button = dropdownContainer.querySelector("button");
//   const dropdown = dropdownContainer.querySelector(".dropdown");

//   button.addEventListener("click", (event) => {
//     event.stopPropagation();

//     dropdown.classList.toggle("open");
//   });

//   document.body.addEventListener("click", (event) => {
//     if (!dropdown.classList.contains("open")) {
//       return;
//     }

//     if (dropdown.contains(event.target)) {
//       return;
//     }

//     dropdown.classList.remove("open");
//   });
// });
