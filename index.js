// DOM aвластивості й атрибути
// DOM - дозволяє отримати доступ до HTML тегів та атрибутівв та їх замінювати або проводити якісь інші дії

// document - звертаємось до всього нашого документу, або це наша HTML сторінка

// достатньо популярні методи
// document.getElementById()
// getElementById() - отримує HTML елемент за його ID

// document.getElementsByClassName()
// getElementsByClassName() - отримує HTML елементи за class

// популярні методи
// document.querySelector() // дозволяє вам отримати доступ до HTML тег за будь-якою ознакою
// ознака - id, class, фтрибут, тег

// document.querySelectorAll() // якщо багато співпадають,знайде тільки перший збіг
// querySelectorAll() - знаходить всі елементи з однаковою ознакою

const navButton = document.querySelector(".nav-button");
console.log(navButton);

// .textContent - звертаємося до текстового наповнення HTML елементу
navButton.textContent = "Товару немає";
// перевизначає текст елементу

const input = document.querySelector(".input");
console.log(input.value);
// value -  це атрибут HTML який зберігає значення input

const checkbox = document.querySelector(".checkbox");
checkbox.cheked = true;
// console.log(checkbox.cheked);

const img = document.getElementById("img");
img.src = "https://i.work.ua/article/579b.jpg";

// const navBar = document.querySelector(".header-nav");

// document.body - до тегу body  можна звернутися напряму через документ
document.body.style.backgroundColor = "green";

// const dark = document.querySelector(".dark");
// const white = document.querySelector(".white");
// dark.addEventListener("click", darkTheme)
// white.addEventListener("click", whiteTheme)

// function darkTheme(e){
//     document.body.style.backgroundColor = "white";
// }
// function whiteTheme(e) {
//   document.body.style.backgroundColor = "dark";
// }

const dark = document.querySelector(".dark");
const white = document.querySelector(".white");

// classList - список класів,  у кожного елементи є
white.classList.add("something");
white.classList.remove("something");
console.log(white.classList);
// add - додати
// remove - видалити
// таким чином ми можемо додавати класи елементам й також видаляти
white.classList.toggle("something");
// toggle - працює в обидві сторони може додати та видалити
white.classList.contains("something");
// containes - чи включає классліст такий клас

console.log(white.classList.contains("somethingfff"));

// events
// if else switch
