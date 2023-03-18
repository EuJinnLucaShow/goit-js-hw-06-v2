const nameInput = document.getElementById("name-input");
const nameOnput = document.getElementById("name-output");

nameInput.addEventListener("input", () =>
  nameInput.value.trim() === ""
    ? (nameOnput.textContent = "Anonymous")
    : (nameOnput.textContent = nameInput.value)
);
