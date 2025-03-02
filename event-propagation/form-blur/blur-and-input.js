function toggleErrorVisibily(event, shouldShowError) {
  const formGroup = event.target.closest(".form-group");
  formGroup.classList.toggle("error", shouldShowError);
}

const validators = {
  email: (value) => value.includes("@"),
  text: (value) => value !== "",
  password: (value) => value !== "",
};

function handleEvent(event) {
  const {
    target: { type, value },
  } = event;

  const isValid = validators[type](value);
  toggleErrorVisibily(event, !isValid);
}

const form = document.querySelector("form");
form.addEventListener("blur", handleEvent, true);
form.addEventListener("input", handleEvent);
