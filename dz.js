// розбір дз та питаннь
// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений
// const title = document.getElementById("title");
// const director = document.getElementById("director");
// const year = document.getElementById("year");
// const rating = document.getElementById("rating");
// const movie = {
//   title: "DeadPool 2",
//   director: " users",
//   year: 2018,
//   rating: 10,
//   checkRating() {
//     if (this.rating > 8) {
//       return true;
//     }
//     return false;
//   },
// };
// console.log(movie.title);
// if (movie.checkRating()) {
//     title.style.color = "green";
//     title.classList.add("green")
// }else{
//     title.classList.remove("green");
// }
// title.textContent = movie.title;
// director.textContent = movie.director;
// year.textContent = movie.year;
// rating.textContent = movie.rating;


// перебрати, створити елемент, заповнити цей елемент, додати створений елемент на сторінці



// творіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.
const inputDeposit = document.getElementById("deposit");
const inputWithdraw = document.getElementById("wirhdraw");
const buttonDeposit = document.getElementById("button-deposit");
const buttonWithdraw = document.getElementById("button-withdraw");
const bankAccount = {
    bankAccount: "Danya",
    acccountNumber: 12856,
    balance: 50000,
    deposit(money){
        this.balance += money;

},
withdraw(money){
    this.balance -= money;
}};

buttonDeposit.addEventListener("click", (e) => {
  bankAccount.deposit(1000);
  alert(`У вас на рахунку ${bankAccount.balance}`);
});
buttonWithdra.addEventListener("click", (e)=>{
    bankAccount.deposit(1000);
    alert(` у вас на рунку ${bankAccount.balance}`)
})