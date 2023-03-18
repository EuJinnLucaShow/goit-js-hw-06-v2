// const btnDecrement = document.querySelector('button[data-action="decrement"]');
// const btnIncrement = document.querySelector('button[data-action="increment"]');
// const spanValue = document.querySelector("#value");
// let counterValue = 0;

// btnDecrement.addEventListener("click", () => {
//   counterValue--;
//   spanValue.textContent = counterValue;
// });

// btnIncrement.addEventListener("click", () => {
//   counterValue++;
//   spanValue.textContent = counterValue;
// });

/*Так, цей код можна поліпшити та скоротити за допомогою використання однієї функції-обробника подій замість двох окремих функцій.*/

// const buttons = document.querySelectorAll("button[data-action]");
// const spanValue = document.querySelector("#value");
// let counterValue = 0;

// function handleClick(event) {
//   const action = event.target.dataset.action;
//   if (action === "increment") {
//     counterValue++;
//   } else if (action === "decrement") {
//     counterValue--;
//   }
//   spanValue.textContent = counterValue;
// }

// buttons.forEach((button) => {
//   button.addEventListener("click", handleClick);
// });

/*У HTML коді кнопки мають атрибут data-action, який використовується для визначення операції, яку необхідно виконати. У JavaScript коді використовується функція handleClick(), яка отримує подію click та визначає дію з атрибута data-action кнопки. Якщо кнопка має значення атрибута data-action="increment", значення counterValue збільшується на 1, а якщо атрибут має значення data-action="decrement", значення counterValue зменшується на 1. Нарешті, оновлен*/

const [decrementBtn, valueSpan, incrementBtn] =
  document.querySelectorAll("button, #value");
let counterValue = 0;

const updateCounter = (value) => {
  counterValue += value;
  valueSpan.textContent = counterValue;
};

decrementBtn.addEventListener("click", () => updateCounter(-1));
incrementBtn.addEventListener("click", () => updateCounter(1));

/*У цьому коді перша зміна полягає в тому, що querySelectorзамінено на querySelectorAll, який повертає NodeList, що містить усі відповідні елементи. Ключове constслово використовується з присвоєнням деструктурування, щоб призначити елементи змінним.

Далі визначається нова функція updateCounter, яка приймає аргумент, valueякий вказує, на скільки оновити лічильник. Функція оновлює counterValueта текстовий вміст елемента valueSpan.

Нарешті, слухачі подій налаштовуються за допомогою функцій зі стрілками, які викликають updateCounterвідповідний аргумент.*/
