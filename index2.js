const numbers = [20, 10, 60, 70, 40];
console.log(Math.min(numbers));
console.log(Math.min(...numbers));
console.log(...numbers);
// spread - розділення

const func = (...numbers) => {
  console.log(numbers);
};
func(20, 50, 66666, 652845121, 1, 45989451);

const legoCollection = [...numbers];

console.log(legoCollection);

const a = {
  name: "petro",
};
const b = {
  ...a,
};
console.log(a);
console.log(b);
// стандартна поведінка складних типів данних
console.log(a === b);
console.log(a == b);
// number - збурігається значення у пам'яті бо е примітив
// object - складний тип даних до якого відноситься масиви об'єктів
const zustrichSubota = {};
const zustrich1Subota = zustrichSubota;
console.log(zustrichSubota === zustrich1Subota);
const zustrichNedilya = {};
console.log(zustrich1Subota === zustrichNedilya)