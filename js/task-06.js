const inputValid = document.getElementById("validation-input");

inputValid.addEventListener("blur", () => {
  const dataLength = inputValid.getAttribute("data-length");
  const inputLength = inputValid.value.length;

  if (inputLength === Number(dataLength)) {
    inputValid.classList.add("valid");
    inputValid.classList.remove("invalid");
  } else if (inputLength === 0) {
    inputValid.classList.remove("valid");
    inputValid.classList.remove("invalid");
  } else {
    inputValid.classList.remove("valid");
    inputValid.classList.add("invalid");
  }
});