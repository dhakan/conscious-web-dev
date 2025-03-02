// document.querySelector("ul").addEventListener("click", (event) => {
//   const li = event.target.closest("li");

//   if (!li) {
//     return;
//   }

//   li.classList.toggle("done");
// });

document.querySelector("ul").addEventListener("click", (event) => {
  const isLi = event.target.tagName === "LI";

  if (!isLi) {
    return;
  }

  event.target.classList.toggle("done");
});

// document.querySelector("ul").addEventListener("click", (event) => {
//   event.target.classList.toggle("done");
// });

// document.querySelectorAll("li")
// .forEach((li) =>
//   li.addEventListener("click", (event) => {
//     event.target.classList.toggle("done");
//   })
// );
