const obj = {
  name: "dima",
  lastName: "djdffjdj",
  age: 16,
  proGamer: false,
};

const namee = obj.name;
// деструктуризація
// клюяове слово
// {} - літерал об'єкта(позначають об'єкт)
// {назва поля значення якого ми хочемо отримати у швидкий доступ}
//  = привласнення
// obj - з якого об'єкту ми бажаємо привласниьти цього поля
const { name, lastName, age, proGamer } = obj;
console.log(name, lastName, age, proGamer);
