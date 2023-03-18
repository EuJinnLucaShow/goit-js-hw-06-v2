const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  const li = document.createElement("li"); // створення елементу <li>
  li.textContent = ingredient; // додавання текстового вмісту
  li.classList.add("item"); // додавання класу
  ul.appendChild(li); // вставка елементу у список
});

/*Таким чином, для кожного елементу масиву ingredients створюється елемент <li> за допомогою методу document.createElement(), який потім додається до списку <ul> з використанням методу appendChild(). До кожного елементу також додається клас "item" за допомогою методу classList.add().*/
