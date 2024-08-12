const obj = {
  name: "Danya",
  age: 17,
};
// способи перебору об'єкту
// Object.keys(), Object.values(), Object.entries()
// 1. for...in
for (const key in obj) {
  //   const element = obj[key];
  console.log(key);
  console.log(obj[key]);
}
// 2. Object.keys()
// Object.keys() = дозволяє отримати масив ключив
console.log(Object.keys(obj));
// 3.
// Object.values(obj) = повертає масив значень об'єкту
console.log(Object.values(obj));
// 4.
// Object.entries(obj) = отримаємо масив в масиві де отримаємо пару ключ і відповідне значення
console.log(Object.entries(obj));
// 5.    ...spread оператор для об'єктів в основному необхідний для копіювання.
// беремо об'єкт і предаємо по черзі кожну властивіст об'єкту.
const object = { ...obj };
console.log(object);
