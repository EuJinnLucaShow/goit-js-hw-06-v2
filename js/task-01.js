// Скрипт який порахує і виведе в консоль кількість категорій в `ul#categories`, тобто елементів `li.item`.
const categoryItems = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categoryItems.length}`);

/**Для кожного элемента `li.item` у спику `ul#categories`, знайде і виведе в консоль текст заголовку елемента (тегу `<h2>`) і кількість елементів в категорії (усіх `<li>`, вкладених в нього). */

categoryItems.forEach((category) => {
  const title = category.firstElementChild;
  const numElements = category.lastElementChild.children;
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${numElements.length}`);
});
