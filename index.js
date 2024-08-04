// 1.
const printmessage = function (message) {
  console.log(message);
};

const highOrderFunc = function (callback) {
  const string = "Stroka";
  callback(string);
};
highOrderFunc(printmessage);
// console.log(highOrderFunc(printmessage));

// 2.
const button = document.getElementById("type");
button.addEventListener("click", onClickFuck);

function onClickFuck(e) {
  console.log("click");
}
// 3.
const repeatLog = function (n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
};
repeatLog(10);

// 4.
const array = [10, 21, 30, 41, 50, 61, 70, 81, 90, 101];
// функцця вищого порядку
const filter = function (array, test) {
  const filteredArr = test(array);
  return filteredArr;
};
// callback
function testNumbers(array) {
  const resultArr = [];
  for (const element of array) {
    if (element % 2 === 0) {
      resultArr.push(element);
    }
  }
  return resultArr;
}

filter(array, testNumbers);

// лаконічний синтаксис
// фанкшн деларейшн
function getPlus(a, b) {
  return a + b;
}

// стрілкова функція
// => - має вбудований ретурн
const plus = (a, b, c) => a + b + c;

const plus1 = (a, b, c) => {
  const sum = a + b + c;
  return sum;
};