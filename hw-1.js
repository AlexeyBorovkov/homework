//Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);
//Задание 2
const release = '9 января 2007 года';
alert(release);
//Задание 3
let name = 'Брендан Эйх';
alert(name);
//Задание 4
let x = 10, y = 2;
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);
//Задание 5
let result = 2 ** 5;
alert(result);
//Задание 6
let z = 9, c = 2;
alert(z % c);
//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
//Задание 8
let age = Number(prompt('Сколько вам лет?'));
alert(age);
//Задание 9
const user = {
    name: 'Алексей',
    age: 37,
    isAdmin: true
}
//Задание 9.1
user['city of residence'] = true;
//Задание 9.2
user.age = 38;
//Задание 9.3
delete user['city of residence'];
//Задание 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);
//Задание 10
let userName = prompt('Как вас зовут?');
alert(`Привет, ${userName}!`);
