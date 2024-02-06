//Задание 1
let str = 'iddqd';
console.log(str.toLocaleUpperCase);
//Задание 2
function filterStr(arr, str) {
    return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
  }
  console.log(filterStr(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
  console.log(filterStr(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
  console.log(filterStr(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));
//Задание 3
let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));
//Задание 4
const nums = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...nums));
console.log(Math.max(...nums));
//Задание 5
function getRandomNumber() {
    let randomNumber = Math.round((Math.random * 10));
    console.log(randomNumber);
}
getRandomNumber();
//Задание 6
function generateRandomArray(number) {
    const arr = [];
    for (let i = 0; i < Math.floor(number / 2); i++) {
       arr.push(Math.round(Math.random() * number))
    }
    return arr;
}
console.log(generateRandomArray(7));
console.log(generateRandomArray(12));
///Задание 7
function generateRandomNumber(min, max) {
    let randomNumber = Math.round((Math.random() * (max - min)) + min);
    console.log(randomNumber);
}
generateRandomNumber(3, 5);
//Задание 8
console.log(new Date());
//Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);
//Задание 10
function formatDate(date) {
    const weekdays = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const weekday = weekdays[date.getDay()];
    
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    const formattedDate = `Дата: ${day} ${months[month]} ${year} - это ${weekday}.`;
    const formattedTime = `Время: ${hours}:${minutes}:${seconds}`;
    
    return `${formattedDate}\n${formattedTime}`;
  }
  console.log(formatDate(new Date));
  //Задание 11
  function shuffleArray() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits = fruits.sort(() => Math.random() - 0.5);
    alert(fruits);

    let firstElement = prompt('Чему равнялся первый элемент массива?');

    let lastElement = prompt('Чему равнялся последний элемент массива?');

    if (firstElement === fruits[0] && lastElement === fruits[fruits.length - 1]) {
        alert('Поздравляем, вы угадали оба элемента!');
      } else if (firstElement === fruits[0] || lastElement === fruits[fruits.length - 1]) {
        alert('Вы были близки к победе!');
      } else {
        alert('Вы ответили неверно.');
      }
  }
 