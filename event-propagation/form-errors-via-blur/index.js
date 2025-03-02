const validators = {
  email: (value) => value.includes("@"),
  text: (value) => value !== "",
  password: (value) => value !== "",
};

function toggleErrorVisibily(event, shouldShowError) {
  const formGroup = event.target.closest(".form-group");
  formGroup.classList.toggle("error", shouldShowError);
}

function handleEvent(event) {
  const {
    target: { type, value },
  } = event;

  const isValid = validators[type](value);
  toggleErrorVisibily(event, !isValid);
}

const form = document.querySelector("form");
form.addEventListener("blur", handleEvent, true);
