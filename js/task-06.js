const inputValid = document.getElementById("validation-input");

inputValid.addEventListener("blur", () => {
  if (inputValid.value === inputValid.getAttribute("data-length")) {
    inputValid.classList.add("valid");
    inputValid.classList.remove("invalid");
  } else if (inputValid.value === "") {
    inputValid.classList.remove("valid");
    inputValid.classList.remove("invalid");
  } else {
    inputValid.classList.remove("valid");
    inputValid.classList.add("invalid");
  }
});
