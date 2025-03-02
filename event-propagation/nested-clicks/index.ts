const listItemElement = document.querySelector("li");
const buttonElement = listItemElement?.querySelector("button");

buttonElement?.addEventListener("click", (event) => {
  console.log("Button clicked!");
  event.stopPropagation();
  event.preventDefault();
});
