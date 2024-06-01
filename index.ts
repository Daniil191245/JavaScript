const num = 12;
const userInput1 = prompt("Введіть число");
// ts - показує ваші помилки ще на стадії розробки
// дродає сувору типізацію1

function add(num1: number, num2: number) {
  return num1 + num2;
}
console.log(add(num, Number(userInput1)));
