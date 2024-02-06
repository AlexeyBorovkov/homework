let password = 'Gonzalez';
let enter = prompt('Введите пароль');
if (password === enter) {
    console.log('Пароль введен верно')
} else {
    console.log('Пароль введен неправильно')
}
//Задание 2
let c = Number(prompt('Введите число'));
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
//Задание 3
let d = Number(prompt('Введите первое число'));
let e = Number(prompt('Введите второе число'));
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
//Задание 4
let a = '2';
let b = '3';
a = Number(a);
b = Number(b);
alert(a + b);
//Задание 5
let monthNumber = 12;
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('Зима');        
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна');        
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето');        
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень');        
        break;    
    default:
        alert('Неизвестный месяц');
        break;
}