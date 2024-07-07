// Цикли
// while(лічильник, авторизація)

// let i = 0;
// if дуже схожий на while
// while - ключове слово для створення циклу
// ( - умова для виконання циклу), коли ця умова перестане виконуватия то цикл теж перестане виконуватися
// поки умова виконується буде виконуватися той код що у вас записаний у фігурних дужках
// {} - тіло циклу
// while (i <= 10) {
// i = i + 1;
// i += 1;
//   i++;
//   console.log(i);
// }
// виконується поки умова true, якщо умова приводиться до false то не виконується жодного разу
// let auth = false;
// while (!auth) {
//   const password = prompt("Введи пароль");
//   if (password === "123456") {
//     auth = true;
//     alert("Вітаємо Вас у системі");
//   } else {
//     alert("Спробуй ще");
//   }
// }

//  do whyle
// while - спочатку перевіряє, а потім робе
// do whyle - спочатку зроби, а потім подумай

// Redirect
// let ok = false;

// do {
//   ok = confirm(
//     "Чи згодні ви, що вас редіректне на іншу сторінку для переглядів бажаного контенту?"
//   );
//   if (true) {
//     // таким чином можемо редірект на іншу сторінку
//     console.log((window.location.href = "https://google.com/"));
//   }
// } while (!ok);

// menu
let choice;
// do while - спочатку робить, а потім перевіряє

// do {
//   console.log("1. новий файл");
//   console.log("2. відкрити файл");
//   console.log("3. запустити файл");
//   console.log("4.Вийти");
//   choice = prompt("Обреіть варіант один з 4");
// } while (choice !== "4");
// do {
//   i++;
//   console.log(i);
// } while (i < 10);

// for
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }
// fot - оператор, що запускає цикл
// let index = 0; - лічильник, де ви можете відстежувати поточний номер операцій
// index < array.length; - умова виходу(коли має завершитися виконання циклу)
//  array.length - це є довжина масиву
// index++ - додавання до індексу одинички(пост вираз) завжди виконується після виконання тіла циклу
// {} - ТІЛО ЦИКЛУ
// for (ЛІЧИЛЬНИК; УМОВА ВИХОДУ З ЦИКЛУ; ПОСТ ВИРАЗ(той вираз, що має зробити ваш цикл не безкінченим)) {
//   const element = array[index];

// }
// 1)створюється лічильник, 2)збільшується умова, 3)виконується тіло, 4)постввираз

// for (let index = 0; i < 10; index++) {
//   i++;
//   console.log(i);
// }

// const array = [1, 2, 3, 4, 5];
// // console.log(array.length);
// for (let index = 0; index < array.length; index++) {
//   // array[index] - це звертання до елементу за індексом
//   const element = array[index];
//   console.log(element**2);
// }

// const users = ["Petro", "Tamara", "Roman", "Tetiana", "Artem", "Danya"];
// const random = Math.floor(Math.random() * users.length);
// console.log(random);
// for (let i = 0; i < users.length; i++) {
//   const element = users[i];
//   if (i === random){
//     console.log(element + " " + "Переміг");
//     break;
//   }

// }
// const word = "JavaScript";
// for (let i = 0; i < array.length; i = i + 1) {
//   const element = word[i];
//   console.log(element);
// }
// break(lottery, Redirect), continue(парні не парні)

// for (let i = 0; i < 50; i++) {
//   if (i === 7) {
//     // пропусти данний варіант та перейди одразу на настпуний
//     continue;
//   }
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
  //  if (i % 2 === 1) {
  //   // console.log(i); // не парне
  //   // console.log((i = "Парне")); // парне
  //  }
// }




// Вивести на екран всі числа від 1 до 10 за допомогою циклу while.
// let n = 1;
// while (n <= 10) {
//   console.log(n);
// }
// Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for. Якщо число не парне, пропустити його за допомогою continue.
for (let i = 2; i <= 20; i++) {
  if (i % 2 === 1) {
    continue;
  } else {
    console.log(i);
  }
}
// Вивести на екран таблицю множення числа 7 за допомогою циклу for.
const number = 7;
for (let i = 1; i <= 10; i++) {
  console.log(number * i);
}

// Створити масив з числами від 1 до 5. Вивести на екран кожен елемент масиву за допомогою циклу while.
const names = [1, 2, 3, 4, 5];
while (i <= names.length - 1) {
  i++;
  console.log(i);
}

// for (let index = 0; index < names.length; index++) {
//   const element = names[index];
//   console.log(element);
// }
// console.log(names[names.length - 1]);
// індекси рахуються з нуля
// за цим записом ми отримали останній елемент масиву
// console.log(names.[names.length - 1]);




// Створити масив із числами від 1 до 10. За допомогою циклу for пройтися по масиву та вивести на екран всі числа, крім числа 7. Якщо зустрінете число 7, закінчити виконання циклу за допомогою оператора break.

// Створити скрипт, який виводить на екран всі числа, які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.

const n = 100;
let i = 1;

while (i < n) {
  i++;
  if (i <= 10) {
    console.log(i);
  } else {
    break;
  }
}
// За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.
