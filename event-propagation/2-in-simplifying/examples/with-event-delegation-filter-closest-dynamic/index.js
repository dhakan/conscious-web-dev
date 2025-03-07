document.querySelector("ul").addEventListener("click", (event) => {
  const li = event.target.closest("li");

  if (!li) {
    return;
  }

  li.classList.toggle("done");
});

document.querySelector("button").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "New task";
  document.querySelector("ul").appendChild(li);
});
