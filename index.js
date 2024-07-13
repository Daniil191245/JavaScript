// Методи маиву
// split() і join()


const message = "Ви перемо`гли, ви молодець";
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
const arr2 = [1, 2, 3, 4, 5, 6 ,90, 10];
arr2.push(30);
console.log(arr2);
console.log(arr2.push(20));
// повертає в консоль індекс елементу якого ми додали
// метод push() - додає елемент у кінець маисву

// pop();
