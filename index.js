// Методи маиву
// split() і join()


const message = "Ви перемогли, ви молодець";
// split - розділити
// розділяє строку та збирає значення в масив
console.log(message.split(","));

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias tempora ipsum quibusdam expedita ullam recusandae eius soluta, explicabo veniam totam laudantium ratione maiores quam harum minima esse? Quis, quibusdam.";
const arr = lorem.split(".");
console.log(arr.join(" "));
// join - збирає елементи масиву у одну строку






// методи: indexOf() і includes()
const arr1 = [1, 2, 3, 4, 5, 6, 10];
console.log(arr1.includes(10));
// includes() - перевіряє чи є елемент в масивів та повертає true or false

console.log(arr1.indexOf(6));
// indexOf() - повертає індекс першого співпадання 

function indexOff(arr, index) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element === item) {
            return i;
        }
    }
    return -1;
}







// методи push(), pop(), shift(), unshift()

// метод push()
const arr2 = [2, 3, 4, 5, 6, 90, 10];
arr2.push(30);
console.log(arr2);
console.log(arr2.push(20));
// повертає в консоль індекс елементу якого ми додали
// метод push() - додає елемент у кінець маисву

// pop(); 
// pop() - видаляє елемент з кінця масива
arr2.pop(10)
console.log(arr2);
console.log(arr2.pop(10));

// shift()
// shift() - видаляє перший елемент з масиву

arr2.shift()
console.log(arr2);
console.log(arr2.shift());


// unshift()
// unshift() - додає елемент в початок масиву
// додає будь-яку к-ть елементів на початок масиву, повертає довжину нового масиву
arr2.unshift(1, 2, 3, 4, 5)
console.log(arr2);
console.log(arr2.unshift(1, 2, 3, 4, 5));

// slice()
// slice() - робить копію масиву
// перший параметр - це індекс з якого має початися вирізання(start)
// другий параметр - це індекс кінця, де завершити копіювання(end)
const arr2Copy = arr2.slice(0, arr2.length);
console.log(arr2Copy);
// копіюємо масив, щоб зберегти дані які ми отримали з БД недоторканим
const arr2CopyCopy = arr2.slice(2, 5);
console.log(arr2CopyCopy);

const winners = arr2.indexOf(90);


// splice()
const arr2Splice = arr2Copy.splice(0, arr2Copy.length, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
console.log(arr2Copy);
console.log(arr2Splice);

// concat() - об'єднує декілька масивів в один