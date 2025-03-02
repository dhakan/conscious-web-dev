document.querySelectorAll("li").forEach((li) =>
  li.addEventListener("click", (event) => {
    event.target.classList.toggle("done");
  })
);
