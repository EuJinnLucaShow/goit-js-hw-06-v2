// const loginForm = document.querySelector(".login-form");

// loginForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//     return alert("Please fill in all the fields!");
//   }

//   const user = {
//     email: email.value,
//     password: password.value,
//   };

//   console.log(user);
//   event.currentTarget.reset();
// }
/*const loginForm = document.querySelector(".login-form");: цей рядок коду вибирає форму входу в HTML-документі за допомогою селектора класу .login-formта призначає її константі loginForm.

loginForm.addEventListener("submit", handleSubmit);: цей рядок коду додає прослуховувач подій до loginFormелемента, який прослуховує подію submit, і викликає handleSubmitфункцію, коли подія запускається.

function handleSubmit(event) {...}: це handleSubmitфункція, яка викликається, коли надсилається форма.

event.preventDefault();: цей рядок коду запобігає поведінці надсилання форми за замовчуванням, яка призведе до перезавантаження сторінки.

const { elements: { email, password } } = event.currentTarget;: цей рядок коду деструктурує elementsвластивість об’єкта event.currentTarget, який представляє сам елемент форми, і призначає поля emailта passwordоднойменним константам.

if (email.value === "" || password.value === "") { ... }: цей рядок коду перевіряє, чи порожні поля emailабо password, і відображає попередження, якщо будь-яке з них порожнє.

const user = { email: email.value, password: password.value };: цей рядок коду створює новий userоб’єкт, який зберігає значення emailта passwordполів форми.

console.log(user);: цей рядок коду записує userоб’єкт на консоль.

event.currentTarget.reset();: цей рядок коду повертає форму до початкового стану, очищаючи значення всіх її полів.*/

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    return alert("Please fill in all the fields!");
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);

  event.currentTarget.reset();
}
/*Замість ручного витягування значень полів електронної пошти та пароля з форми, можна використовувати нову можливість ES6 - деструктуризацію об'єкту. Таким чином, можна переписати рядок const { elements: { email, password } } = event.currentTarget; на const { email, password } = event.target.elements;. Це дасть змогу звертатися до email та password напряму замість email.value та password.value.

Використання const замість let для декларування констант, які не змінюються під час виконання програми.

Використання операції "short-circuit" || для скорочення коду в умовному операторі.

Зміна назви змінної user на щось більш конкретне, наприклад formData*/
