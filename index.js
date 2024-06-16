// розгалуження.інструкція switch.область видимості.

// if else
// if - якщо щось трапилось я зроблю те що ти написав у фігурних дужках
// якщо в круглих дужках буде true  то відпрацює те що ви написали ц фігурних дужках далі.
// true = 1 false = 0
// якщо в круглих дужках ми отримуємо falseс, то управління переходить в блок else, якщо його немає то if не виконується і код продовжує виконуватися
if (0) {
  console.log("робе");
} else {
  console.log("Не робе");
}
console.log("щось далі");

const age = 15;
const auth = true;
// ||логічний оператор АБО, маютьвиконуватись обидві вимоги
// && - амперсанти,  логічні оператор який звучить як (&&=і)
// ! = НЕ  це є логічне НЕ
if (age >= 18 || auth === true) {
  console.log("робе");
} else {
  console.log("не робе");
}

console.log(true && false && true); // false
console.log((false && true) || true || false); // true

// switch. будь-який switch можна замінит на блок if else
// switch - використовуємо в рідких випадках \
const user = 51;
const silver = 100;
const gold = 200;
const diamond = 500;
const bronze = 50;
// case - це якась подія
switch (user) {
  case bronze:
    console.log("bronze підписка");
    break;
  case silver:
    console.log("silver підписка");
    break;
  case gold:
    console.log("gold підписка");
    break;
  case diamond:
    console.log("diamond підписка");
    break;
  default:
    console.log("купіть підписку");
    break;
}

const ROLE = {
  author: "author",
  read_only: "user",
  admin: "admin",
};

const user1 = "admin";
const author = "author";
const read_only = "user";
const admin = "admin";
switch (user1) {
  case author:
    console.log("Ти можеш додати якийсь контент");
    break;
  case read_only:
    console.log("Ти можеш переглядати якийсь контент");
    break;
  case admin:
    console.log("Ти можеш редагувати якийсь контент");
    break;
  default:
    console.log("Зареєструйтесь, будь ласка");
    break;
}
