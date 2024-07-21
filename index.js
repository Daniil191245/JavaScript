// function - функцію
// spaceChanger - імʼя функції

function spaceChanger(str, spaceChangerSymbol) {
  const trimStr = str.trim();
  const stringArr = trimStr.split(" ");
  let string = "";

  for (const character of stringArr) {
    string += character + spaceChangerSymbol;
  }
  const split = string.split("");
  split.pop();
  string = split.join("");

  return string;
}

console.log(spaceChanger("     Ми дуже любимо вивчати JS     ", "-"));
console.log(spaceChanger("Ми написали класну функцію", "_"));
// .replace(" ", "-") - замінює пробіл у строці іншим знаком

// => має вмонтований ретурн

const arrowFunc = (a, b, c, d) => {
  return a + b * c * d;
};
console.log(arrowFunc(20, 53, 94, 3));




function signUp(userName = "anonym", email, password) {
  // throw new Error - викинь екземляр класу помилка
  if (!email) throw new Error("Введи емейл");
  if (!password) throw new Error("Введи пароль");
  console.log(`Вітаю ви успішно зареєструвались ${userName}`);
}
signUp("Danya", "email", "455544");