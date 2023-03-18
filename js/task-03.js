const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML(
  "afterbegin",
  images
    .map(
      (image) =>
        `<li><img src="${image.url}" alt="${image.alt}" width="100%"></li>`
    )
    .join("")
);

/*Метод `insertAdjacentHTML` приймає два аргументи:

1. Позиція, куди слід вставити HTML, яка в даному випадку є "afterbegin", тобто HTML буде вставлено як перший дочірній елемент елемента галереї.
2. Вміст HTML, який потрібно вставити, за допомогою `map` методу генеруємо масив рядків HTML, а потім використовуємо `join` метод, щоб об’єднати їх в один рядок, який можна передати в insertAdjacentHTML.*/
