// Масиви.Ітерація.
// const employees = ["Artem", "Petro"]; // індексоований набір значень
// масив зазвичай це набір однотипних даних
// console.log(arr);

const employees = ["Artem", "Petro"];
console.log(employees[0]);
console.log(employees[employees.length - 1]); // так  ми отримаємо останній елемент масиву.
// employees.length - довжина масиву й віднімаємо 1 - ку тому що індексація масиву починається з 0.

// [0] у квадратних дужках записуємо індекс елементу який нам треба

employees.length = 1;
console.log(employees);

// ітерація по масиву
const client = [];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }// використовуємо коли треба прив'язка до індексу

// for (const client of clients) {
//   console.log(client.name);
// } // пробігається по всім елементам масиву

for (const employee of employees) {
  console.log(employee);
}
// iterator = елемент з масиву який нам треба(приклад з робітниками)
// object = масив
