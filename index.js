// Числа.Основні оператори

// Оператори
// Види операорів є два види: математичні, порівняльні.


// Математичні оператори
// математичний це( + - * / %)
// + - додати
// - відняти
// * - помножити
// / - поділити
// % - це є залишок від ділення
console.log(2 + 6);
// + - це є оператором; 2 6 - це операнди(тобіж на чому застосовують називають операнлами)
console.log(2 - 9);
console.log(3 * 5);
console.log(10 / 2);
console.log(5 % 2);
// скільки 2-к влазить у п'ять (два рази і залишок від ділення 1)
console.log(10 % 5); // 0
console.log(11 % 5); // 1

const number = 8;
// number % 2 === 0   залишок від ділення числа яке зберігається у змінній number на 2
// якщо цей залишок дорівнює 0 то все буде працювати
// залишок від ділення на 2 має сурово дорівнювати числу 0
if (number % 2 === 0) {
  console.log("число кратне 2");
} else {
  console.log("число НЕ кратне 2");
}


// Порівняльні оператори

// 1.Порівняльні
// = це є оператором присвоєння a = 5
// const a = 5;

// 2.Порівнюємо значення
// порвнюємо значення == (майже не використовується)
// == використовується дуже рідко
console.log(2 == "2"); // true

// 3.Порівняння за типом данних
// порівняння == за значенням  === за типом данних
//  === використовується дуже часто
console.log(2 === "2"); // false

// ! цей знак значить не дорвнює, тобіж на прикладах 2 не дорівнює 2
// і також у другому прикладі ми сказали, що 2 не дорінює 4
console.log(2 !== 2); // false
console.log(2 !== 4); // true

// >,  <,  <=,  >=,
console.log(5 > 2); //true
console.log(2 < 5); // true
console.log(5 <= 2); // false
console.log(5 >= 2); // true



// Числа
const number1 = "20"; //строка
// база данних це називає число але це так не є,тому що воно записано як строка

console.log(typeof number1);
console.log(typeof Number(number1));

const number2 = null;
console.log(Number(number2)); // 0

const number3 = undefined;
// NaN - not a number -  не є числоv
console.log(Number(number3)); //NaN

console.log(Number("5px")); // NaN
// тому що літери(px) не може перевести у числа

console.log(Number.parseInt("5px")); // 5
// parsInt - pars=перебери та знайди ціле число
// () це є активація і ми маємо передати інформацію у дежки
// метод - це є дія, й записується через крапку.Number.parseInt("5px")

console.log(Number.parseFloat("5.2px"));
// parseFloat = перебири та знайди дробові числа
// властивості пишуться без дужок .length 
// метод записуємо завжди з дужками де передаємот значення - тобіж методи йдуть з дужками а властивості без.



// Перевірка на число

const normalNum = Number("50"); ;
console.log(Number.isNaN(normalNum)); //false
// знак оклику це є логічне НЕ
const badNum = Number("ans5");
// console.log(badNum);
console.log(Number.isNaN(badNum));

// щоб перевірити на число використовується метод .isNaN 
