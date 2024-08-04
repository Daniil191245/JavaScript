// об'єкти методи, властивості.

const kryzks = {
  color: ["white", "blue"],
  volume: "500ml",
};

const figurka = {
  size: "small",
  color: "green",
};

const poster = {};
// {} - об'єкт
// додавання властивостей відбуважться через крапку
poster.material = "paper";

console.log(poster);
// отримати значення з об'єкту
poster.material;
console.log(poster.material);
// щоботримати значення з об'єкту, треба просто через крапку написати властиивістьт і отримаємо азнаячення
// poster.material - запис виглядає так.
console.log(poster["material"]);

const objArr = [
  { material: "paper" },
  { material: "iron" },
  { material: "metal" },
  { material: "paper" },
  { material: "iron" },
  { material: "metal" },
  { material: "paper" },
  { material: "iron" },
  { material: "metal" },
  { material: "paper" },
  { material: "iron" },
  { material: "metal" },
  { material: "paper" },
  { material: "iron" },
  { material: "metal" },
  { material: "paper" },
  { material: "iron" },
  { material: "metal" },
  { material: "paper" },
  { material: "iron" },
  { material: "metal" },
  { material: "paper" },
  { material: "iron" },
  { material: "metal" },
  { material: "paper" },
  { material: "iron" },
  { material: "metal" },
  { material: "paper" },
  { material: "iron" },
  { material: "metal" },
];

function filter(objArr, material) {
  const filteredArr = [];
  for (const obj of objArr) {
    console.log(obj);
    if (obj.material === material) {
      filteredArr.push(obj);
    }
  }
  return filteredArr;
}
filter(objArr);
console.log(filter(objArr, "paper"));

// вмдаленнЯ властивостей
// delete - оператор видалення.
delete figurka.color;
console.log(figurka);

// заміна властивостей
const figerk = {
  size: "250mm",
};

figerk.size = "2m";
console.log(figerk);

// short properties

const email = "dfsafgsdfgad@.com";
const password = "fdsgfds5448512";
const userName = "Vasya";

const user = {
  email: email,
  password: password,
  userName: userName,
};
console.log(user);
const user1 = {
  email,
  password,
  userName,
  registration: function registration() {
    // this = це контекст
    console.log(this.email, this.password, this.userName);
  },
  goWolk: function () {
    console.log("я пішов гулять");
  },
  up: function () {
    console.log("up");
  },
  changeUserName: function (newUserName) {
    this.userName = newUserName;
  },
};
console.log(user1);
user1.registration();
user1.goWolk();
user1.changeUserName("petro");
// методи об'єкта
