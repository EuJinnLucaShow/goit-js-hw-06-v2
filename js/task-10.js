// const input = document.querySelector("#controls input");
// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");
// const boxes = document.querySelector("#boxes");

// function createBoxes(amount) {
//   let size = 30;
//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement("div");
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxes.appendChild(box);
//     size += 10;
//   }
// }

// function destroyBoxes() {
//   boxes.innerHTML = "";
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// createBtn.addEventListener("click", () => {
//   createBoxes(input.value);
// });

// destroyBtn.addEventListener("click", () => {
//   destroyBoxes();
// });
/*Він знаходить елементи controls та boxesContainer за допомогою методу querySelector. Функція createBoxes приймає кількість елементів amount і створює div-елементи з допомогою циклу for. Початковий розмір кожного елементу - 30 пікселів, і з кожним ітерацією розмір збільшується на 10 пікселів. Кожен елемент отримує випадковий колір фону, згенерований за допомогою функції getRandomHexColor.

Функція destroyBoxes просто очищує innerHTML елементу boxesContainer.

Накінець, вішаємо обробник подій на елемент controls, щоб відслідковувати натискання кнопок створення та очищення. При натисканні на кнопку створення запускається функція createBoxes з вказаною кількістю елементів, введеною користувачем в input. При натисканні на кнопку очищення запускається функція destroyBoxes.*/

const controls = document.querySelector("#controls");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  let boxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);

    boxSize += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

controls.addEventListener("click", (event) => {
  if (event.target.dataset.create) {
    const amount = +controls.querySelector("input").value;
    createBoxes(amount);
  }

  if (event.target.dataset.destroy) {
    destroyBoxes();
  }
});
