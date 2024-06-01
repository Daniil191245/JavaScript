// Рядки
// існує одна властивість .length й дев'ять методів.
const name = "Danya";
const nameLength = name.trim().length;
// .length - ця властивість рахує к-ть літер у слові. length - довжина(властивість)
// .trim() - метод для обрізання пробілів перед буквами
// пробіл вважається теж символом тож за допомогою методу trim() можемо прибрати
console.log(nameLength);

// const string = "sh  oc   ".length.trim();
// в данному випадку властивість вважає, що це є число а числу не треба метод trim(), тому краще спочатку використовувати метод, а потім властивість.
// console.log();

const string = "shoc";
// комп'ютер рахує з нуля, тоді всього 3 символи(індексація)

const nameLengthh = string.length;
console.log();

// конкатенація рядків
const string2 = name + string;
// додаємо змінну name та string
console.log(string2.length - 1);
// length  виводить як людина рахує але якщо ми віднімемо один, то отримаємо як рахує ком'ютер

const string3 = "ABC" + " " + "CBA" + " " + "NBA"; // це називається конкетинація
console.log(string3);

const string4 = `ABS CDA BHF`; // це називається інтерполяція
console.log(string4);

// метод .toLowerCase()
// перевіряє до нижнього регистру
const string5 = "SaLe";
const postCard = "sALe";
if (postCard.toLowerCase() === "sale") {
  console.log("Піймали та видалили спам");
  console.log(postCard.toLowerCase());
  // .toLowerCase - перевіряє до нижнього регистру
  console.log(postCard.toUpperCase());
  // .toUpperCase - перевіряє до верхнього регистру
}

// метод toUpperCase()
// перевіряє до нижнього регистру

// метод .indexOf()
const string6 = "six";
console.log(string6.indexOf()); // -1
console.log(string6.indexOf("s")); // 0
console.log(string6.indexOf("S")); // -1 чутливий до регистру
console.log(string6.indexOf("x")); //2
// завжди повертається індекс літер на якому місці воно є
// indexOf() - поіертає індекс символа у рядку
// indexOf() - оперує тільки числами
// indexOf() - чутливий до регістру
// -1 index то індекс який повертається якщо нічого не знайдено

// метод includes()
const string7 = "String";
// чи включає змінна у себе ВЕЛИКУ літеру S
console.log(string7.includes("s"));
// .includes() - дозволяє перевірити слово, літеру, речення тобіє є таке слово у змінній
// .includes() - повертає првда або НЕ правда тобіж видає true або false
// чутливий до регістру

// метод .startsWith()
const string8 = "something";
// як починається рядок в змінній з вказаних символів
console.log(string8.startsWith("some"));

// метод .endsWith()
// endsWith(".txt") чи закінчується рядок в змінній з вказаних символів
console.log(string8.endsWith(".txt"));
// endsWith(".txt") перевіряє іменування файлів
// повертає true або false

// метод trim()
// дозволяє видаляти пробіли
const string9 = "        d           b      y        q";
console.log(string9.trim());

// метод padStart()
const string10 = "string10";
// в рядку має бути сто символів якщо їх немає то додай літеру а щоб було стосимволів
console.log(string10.padStart(100, "A"));
// додає всі символи на початок рядка
// .padStart() - вказує максимальну довжину перше значення вказує на кількість рядка, а друге значення, що треба додати якщо не вистачає до заданої кількості.
// .padStart() - еперший параметр вказує на те скільки символів має бути у рядку , Якщо така кількість символів вже є то .padStart() поверне рядок з яким працює

// метод padEnd()
console.log(string10.padEnd(20, "r"));
// також можемо вкладати змінні
console.log(string10.padEnd(20, string10));

// шаблонні рядки
// використання похилих лапок
const user = "Danya";
console.log(`Привіт, ${user}`);

// продовження

// отримати від користувача число в хвилинах
// переведемо у час (дні, години, хвилини)
// const num = 6;
// const numverInput = document.querySelector("#number");
// console.log(typeof numverInput.value);

// все що ви записуєте в текстові поля це тип данних STRING

const userInput = prompt("Введіть число");

const numberHours = Number(userInput) / 60;
const days = Math.floor(numberHours / 24);
const hours = Math.floor(numberHours % 60);
const minutes = Number(userInput) % 60;
console.log(minutes);
const modHours = String(hours).padStart(2, 0);
const modMinutes = String(minutes).padStart(2, 0);
// години ведуть себе не адекватно коли значення 1 день + 
// треба пофіксить
console.log(`Дні: ${days} години: ${hours}  хвилини: ${minutes}`);

// const num = 12;
// const userInput = prompt("Введіть число");
// // && - і
// function add(num1, num2) {
//   if(typeof num1 === "number" && typeof num2 ==="number"){
//   return num1 + num2;
//   }
//   return num1 + num2;
// }
// console.log(add(num, Number(userInput)));
