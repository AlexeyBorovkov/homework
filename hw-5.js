
// //Задание 1
// const arr = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
//     if (arr[i] === 10) break;
// }
// //Задание 2
// const arr1 = [1, 5, 4, 10, 0, 3];
// console.log(arr1.indexOf(4));
// //Задание 3
// let arr2 = [1, 3, 5, 10, 20];
// arr2 = arr2.join(' ');
// console.log(arr2);
// // Задание 4
// const array = []
// for (let i = 0; i < 3; i++) {
//   array[i] = [];
//   for (let j = 0; j < 3; j++) {
//     array[i][j] = 1;
// };

// };
// console.log(array);
// //Задание 5
// const arr3 = [1, 1, 1];
// arr3.push(2, 2, 2);
// console.log(arr3);
// //Задание 6
// let arr4 = [9, 8, 7, 'a', 6, 5];
// arr4.sort();
// arr4 = arr4.filter(el => typeof el === 'number')
// console.log(arr4);
// //Задание 7
// const numbers = [9, 8, 7, 6, 5];
// const userNumber = prompt("Угадайте число");
// if (numbers.includes(Number(userNumber))) {
//   alert("Угадал");
// } else {
//   alert("Не угадал");
// }
// //Задание 8
// const str = 'abcdef';
// const reverseStr = str.split('').reverse().join('');
// console.log(reverseStr);

// //Задание 9
// const arr5 = [[1, 2, 3],[4, 5, 6]];
// const flattenedArray = arr5.flat();
// console.log(flattenedArray);
// //Задание 10
// let arr6 = [1, 5, 9, 3, 8, 2, 7, 4, 6, 10];

// for(let i = 0; i < arr6.length - 1; i++) {
//   let sum = arr6[i] + arr6[i + 1];
//   console.log(sum);
// }
// //Задание 11
// function getSquare(nums) {
//     return nums.map(num => num ** 2);
// }
// console.log(getSquare([2, 6, 9, 10, 5]));
// //Задание 12
// function getLenghtWords(words) {
//     return words.map(word => word.length);
// }
// console.log(getLenghtWords(['слово', '', 'слог', 'длинное предложение', 'буква']));
// //Задание 13
// function filterPositive(array) {
//     return array.filter(num => num < 0);
// }
// console.log(filterPositive([-1, 0, 5, -10, 56]));
// console.log(filterPositive([-25, 25, 0, -1000, -2]));



