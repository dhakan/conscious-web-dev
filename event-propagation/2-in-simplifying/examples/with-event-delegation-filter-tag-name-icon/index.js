document.querySelector("ul").addEventListener("click", (event) => {
  const isLi = event.target.tagName === "LI";

  if (!isLi) {
    return;
  }

  event.target.classList.toggle("done");
});
