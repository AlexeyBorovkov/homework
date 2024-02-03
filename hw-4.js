// //Задание 1
// function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   }
//   //Задание 2
//   function numbers(number) {
//     if (number % 2 === 0) {
//         console.log('Четное число');
//     } else {
//         console.log('Число нечетное');
//     }
//   }
//   //Задание 3
//   //3.1
//   function number(num) {
//     console.log(num * num);
//   }
//   //3.2
//   function number(num) {
//     return num * num
//   }
//   //Задание 4
//   function checkAge() {
//     let age = prompt('Сколько вам лет?');
//       if (age < 0) {
//         return 'Вы ввели неправильное значение'
//       } if (age >= 0 && age <= 12) {
//         return 'Привет друг'
//       } if (age >= 13) {
//         return 'Добро пожаловать'
//       }
//   }
//   console.log(checkAge());
//  //Задание 5
 
//  function correctNumbers() {
//     let a = prompt('Введите первое число');
//     let b = prompt('Введите второе число');
//     if (isNaN(a) || isNaN(b)) {
//         return 'Одно или оба значения не являются числом';
//     } else {
//         return a * b;
//     }
//  }
//  console.log(correctNumbers());
//  //Задание 6
//  function cubeNumber() {
//   let number = prompt('Введите число:');
//   if (isNaN(number)) {
//     return 'Переданный параметр не является числом';
//   }
//   number = Number(number);
//   let result = number ** 3;
//   return `${number} в кубе равняется ${result}`;
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(cubeNumber(i));
// }
// //Задание 7
// function getCircleArea() {
//   return Math.PI * this.radius ** 2;
// }
// function getCirclePerimeter() {
//   return 2 * Math.PI * this.radius;
// }

// const circle1 = {
//   radius: 5,
//   getArea: getCircleArea,
//   getPerimeter: getCirclePerimeter,
 
// }
// const circle2 = {
//   radius: 8,
//   getArea: getCircleArea,
//   getPerimeter: getCirclePerimeter,
 
 
// }
// console.log(circle1.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getArea());
// console.log(circle2.getPerimeter());

