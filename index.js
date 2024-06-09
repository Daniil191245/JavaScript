// BOM
// простий спосіб як перевірити мову користовача.
const language = navigator.language || navigator.userAgent;
console.log(language);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { longtitide, latidude } = position.coords;
    },
    (error) => {
      console.log(error.message);
    }
  );
} else {
  console.log("Геолокація не підтримується");
}

const browserInfo = `Браузер${navigator.appCodeName}, ${navigator.appVersion}`;

console.log(browserInfo);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { longtitide, latidude } = position.coords;
    },
    (error) => {
      console.log(error.message);
    }
  );
} else {
  console.log("Геолокація не підтримується");
}

// events - подія

// const form = document.getElementById("form");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const button = document.getElementById("click");

button.addEventListener("click", onClick);
// addEventListener- слідкую та повідомляє про дії користовача приймає два параметра
let counter = 0;

// оnClick() - обробник події
function onClick(event) {
  console.log(event.target);
  console.log(event.type);
  console.log(event.currentTarget);
  // target - це властивість яка повертає тег на якому відбувалась подія
  // currentTarget - властивість яка повертає тег на якому стоїть обробник події addEventListener
  counter += 1;
  if (counter === 3) {
    console.log("подихайте трохи");
    button.removeEventListener("click", onClick);
  }
  console.log("я молодець, я клацнув по кнопці");
}
// addEventListener - додає слухач події
// removeEventListener - видаляє слухач події

// 1.Все що ви робите на сайті йе події про які браузер сигналить постійно, але ми їх не обробляємо
// 2.щоб відслухати подію на конкретному едементі ми повинні отримати доступ до елементу
// 3.додати на цей еолемент  слухача подій addEventListener;

// --click
// --submit
// --focus
// --keydown
// --change

// Об'єкт події

// input - подія вводу тексту
// submit -  подія відправки форми

const form = document.querySelector(".form");
form.addEventListener("input", onInput);

function onInput(event) {
  console.log("target:", event.target.value);
  // form.elemets - диятячі елементи форми
  // ми проіменуваоли за допомогою атрибуту name всі дитячі поля
  // отримали значення через .value
  const input1Value = form.elements.input1.value;
  const input2Value = form.elements.input2.value;
  console.log(input1Value);
  console.log(input2Value);
  console.log(form.elements);

  const concaatValue = input1Value + input2Value;
  // console.log("currentTarget:", event.currentTarget);c
}
