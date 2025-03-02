document.querySelector("ul").addEventListener("click", (event) => {
  const li = event.target.closest("li");

  if (!li) {
    return;
  }

  li.classList.toggle("done");
});
