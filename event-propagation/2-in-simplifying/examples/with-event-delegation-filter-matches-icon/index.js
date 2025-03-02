document.querySelector("ul").addEventListener("click", (event) => {
  const isLi = event.target.matches("li");

  if (!isLi) {
    return;
  }

  event.target.classList.toggle("done");
});
