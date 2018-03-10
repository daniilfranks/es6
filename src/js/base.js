/*
let title = 'My program';
let total_price = 100;
const API_KEY = '12345';
const COLOR_RED = "#fe0303";

// 6 типов данных: числа, строки, булево значение, null, undefined, array
let number_integer = 1000;
let number_float = 99.49;
let string = 'First string';
let checked_status_true = true;
let checked_status_false = false;
let status_null = null;
let my_undefined;
let users = { name: 'Den', age: 27 };

// typeof возвращает тип аргумента
typeof 'string';
typeof 1000;
typeof 10.01;
typeof true;
typeof false;
typeof null;
typeof undefined;
typeof {};

// Использование условных операторов с логическими
let year = 2018

if(year == 2018) {
  console.log('Good year!');
}

if(year != 2018) {
  console.log('Good year!');
} else {
  console.log('Bad year!');
}

let result = (year >= 2020) ? true : false;
console.log(result);

let result_and = (year == 2018 && 1 != 1) ? true : false;
console.log(result_and);

let result_or = (year == 2018 || 1 != 1) ? true : false;
console.log(result_or);

// Циклы while, for, forEach
let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}

let _i = 2;
while (_i) {
  console.log(_i);
  _i--;
}

for (let number = 0; number < 2; number++) {
  console.log(number);
}

for (let number = 0; number < 5; number++) {
  if (number == 4) break;
  console.log(number);
}

for (let num = 0; num < 5; num++) {
  if (num % 2 == 0){
    console.log(num);
  }
}

let items = {
  book: 100,
  car: 200,
  phone: 300
}

let sum = 0;
for (let key in items) {
  console.log(`${key}: ${items[key]}`);
  sum += items[key];
}
console.log(sum);

let persons = [
  { name: 'Den', age: 27 },
  { name: 'Jok', age: 32 },
  { name: 'Leo', age: 41 }
]

for (let person of persons) {
  console.log(`${person.name} ${person.age}`);
}

persons.forEach(myFunction);
function myFunction(value, key) {
  console.log(`${key} ${value.name} ${value.age}`);
}

// Конструкция switch
let score = 11;

switch (score) {
  case 5:
    console.log('low');
    break;
  case 10:
  case 11:
    console.log('mid');
    break;
  default:
    console.log('default');
}

// функции
function showHello() {
  console.log('Hello function!');
}
showHello();

function showMessage(text, age = 27) {
  let name = 'Danila';
  console.log(`${text}, ${name}, ${age}`);
}
showMessage('Hello');

function calc(number) {
  return number * 10;
}
console.log(calc(10));

function checkAge(age) {
  return (age >= 18) ? true : false;
}
console.log(checkAge(18));

function askAge(age, yes, no) {
  if (age >= 18 ) {
    return yes;
  } else {
    return no;
  }
}

function askYes() {
  return 'Yes!';
}

function askNo() {
  return 'No!';
}

console.log(askAge(20, askYes(), askNo()));

// стрелочные функции
let add = (x, y) => x + y;
console.log(add(5, 10));

let multiply = (x, y) => {
  let result = x * y;
  return result;
}
console.log(multiply(2, 2));

let square = x => x * x;
console.log(square(9));

let getNumber = () => 50;
console.log(getNumber());

let getPerson = () => ({ name: 'Den' });
console.log(getPerson());

(() => console.log('life'))();

let numbers = [1,2,3,4,5,6,7,8];
let total = 0;
numbers.forEach(num => total += num);
console.log(total);

let squared = numbers.map(n => n * n);
console.log(squared);

*/

// методы для работы со строкой
/*
console.log('Hello!'.length); // длина строки
console.log('Hello!'[0]); // найти и вывести сивол из строки
console.log('Hello!'.charCodeAt(0)); // найти и вывести номер сивола в unicode
console.log(String.fromCharCode(65)); // конвертировать из unicode
let hi = 'Hello, ';
let name = 'Den';
console.log(hi.concat(name)); // объеденить строки
let str = 'My first title first';
console.log(str.includes("first")); // найти в сторке: true
console.log(str.indexOf("first")); // найти в строке и выдать индекс
console.log(str.search("first")); // найти в строке и выдать индекс
console.log(str.indexOf("M")); // найти совпадение в строке и выдать индекс
console.log(str.replace("first", "last")); // найти и заменить первое значение
console.log(str.replace(/first/gi, "last")); // найти и заменить все найденое
console.log(str.slice(0, 8)); // обрезать строку
console.log(str.split(' ')); // разделить строку по словам и поместиьб в масив
console.log(str.toLocaleLowerCase()); // перевод в нижний регистр
console.log(str.toLocaleUpperCase()); // перевод в верхний регистр
console.log(str.trim()); // обрезать отступы

// методы для работы с числами
console.log(Number.isFinite(100)); // Проверка число ли это ? true
console.log(Number.isInteger(100)); // Проверка число ли это ? true
console.log(Number.isNaN(100)); // является ли значение NaN 
console.log(100.57483.toFixed(2)); // округлить число 
*/


/*
// методы для работы с масивом
let arr = ['book', 'cat', 'apple', 'dog'];
let names = ['Den', 'Leo', 'Jok', 'Henrik'];
let cars = [
  { name: 'bmw', age: 5 },
  { name: 'kia', age: 5 },
  { name: 'audi', age: 7 }
];

console.log(arr.concat(names)); // объеденить массивы
// проверит каждый элемент масива условию и вернет true/false
console.log(arr.every( value => { return value.length >= 3 }));
console.log(cars.every( (arr, key, value) => { return value[key].age >= 10 }));
//console.log(arr.fill("new value", 1, 3)); // заменить значения элементов масива

// проверит каждый элемент масива условию и вернет массив соответствующих условий 
console.log(names.filter( value => { return value.length >= 4 }));
console.log(arr.filter( value => { return value.length >= 4 }));

// Поиск по масиву вернет 1 найденый результат
console.log(names.find( value => { return value.length <= 4 }));

// Перебор масива
arr.forEach((value, key) => console.log(`${key}: ${value}`));

let sum = 0;
arr.forEach((value, key) => sum += value.length);
console.log(sum);

console.log(arr.join()); // вывести все элемента массива в строку

arr.map((value, key) => console.log(value + '!'));

arr.pop(); // удалить поледний элемент масива
arr.push('car'); // добавить в коне масива
arr.shift(); // удалить первый элемент масива
arr.unshift('phone'); // добавить как первый элемент

arr.reverse(); // перевернуть масив
console.log(arr.slice(1, 3)); // обрезать масив

console.log(arr.sort()); // сортировать по алфовиту
console.log(arr.sort().reverse()); // сортировать в обратном порядке

// последовательная обработка каждого элемента массива
console.log(number.reduce((sum, current) => sum + current));

let number = [1, 5, 3, 10, 30, 4];
console.log(number.sort((a, b) => { return a - b }));
console.log(number.sort((a, b) => { return b - a }));

arr.splice(2, 0, "Lemon", "Kiwi"); // вставка в массив после 2 индекса
arr.splice(2,1); // удалить по индексу
console.log(arr);
*/

/*
// Дата и Время
let b_year = new Date(1991, 1, 28, 17, 30, 0); //установить дату
let date = new Date(); // текущая дата

console.log(date);
console.log(date.toLocaleString()); // полное время стока цифрами
console.log(date.toLocaleTimeString()); // время час минуты секунды
console.log(date.toLocaleDateString()); // дата
console.log(b_year);
console.log(Date.parse(1991, 1, 28, 17, 30, 0)); // время в миллисикундах
console.log(Date.parse(date)); // время в миллисикундах
console.log(Date.now()); // текущие время в миллисикундах
console.log(date.getTime()); // текущие время в миллисикундах
console.log(date.getFullYear()); // год
console.log(date.getMonth() + 1); // месяц
console.log(date.getDate()); // число месяца
console.log(date.getDay()); // день недели
console.log(date.getHours() + 1); // какой час
console.log(date.getMinutes()); // минута
console.log(date.getSeconds()); // секунда
console.log(date.toJSON()); // JSON

console.log(date.getTimezoneOffset()); // разница в минутах часовой пояс

function day_of_the_week(day) {
  let days = [
    'Понедельник', 
    'Вторник', 
    'Среда', 
    'Четверг', 
    'Пятница', 
    'Суббота', 
    'Воскресенье'
  ];

  return days[day - 1];
}

console.log(day_of_the_week(date.getDay()));

console.log(date.setTime(1604757481254)); // текущие время в миллисикундах
console.log(date.setFullYear(2020)); // год
console.log(date.setMonth(10)); // месяц
console.log(date.setDate(8)); // число месяца
console.log(date.setHours(5)); // какой час
console.log(date.setMinutes(10)); // минута
console.log(date.setSeconds(5)); // секунда
console.log(date)

var options = {
  era: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

console.log(date.toLocaleString("ru", options)); // локолизация
console.log(date.toLocaleString("en-US", options));

let arr = [1,2,3,4];
for (let number = 0; number < arr.length; number++) {
  if (number === 2) {
    continue;
    //break;
  }
  console.log(arr[number]);
}

let text = "";
for (let num = 0; num < 3; num++) {
  text += `Text ${num} <br>`;
}
document.getElementById("for").innerHTML = text;

*/

/*
// this: call, apply
let user = { name: 'Den', lname: 'Bob', age: 27 };
let user1 = { name: 'Leo', lname: 'Galano', age: 31 };
let user2 = { name: 'Jok', lname: 'Asakyra', age: 19 };

function showFullName(name, lname, age) {
  console.log(`${this[name]}, ${this[lname]}, ${this[age]}`);
}

showFullName.call(user, 'name', 'lname', 'age');
showFullName.call(user1, 'age', 'lname', 'name');
showFullName.apply(user2, ['name', 'lname', 'age']);

*/

/*
// Привязка контекста и карринг: bind
let user = {
  firstName: "Den",
  sayHi: function() {
    console.log(this.firstName);
  }
};

setTimeout(user.sayHi.bind(user), 1000);
user.sayHi.bind(user);

function getInfo() {
  console.log(this);
};

getInfo.bind('Hello')();

function getUser(a, b = 2) {
  return a * b;
};

console.log(getUser(3));

function getCalc(a, b) {
  return a * b;
}

let double = getCalc.bind(null, 2);
let triple = getCalc.bind(null, 3);
console.log(double(3));
console.log(triple (3));

function ask(question, answer, ok, fail) {
  let result = 'ok' // получить ответ из формы
  if (result == answer) {
    ok();
  } else {
    fail();
  };
};

function ok() {
  console.log('Ok!!!');
}

function fail() {
  console.log('Fail!!!');
}

ask('Question: ok or no !', 'ok', ok, fail);
ask('Question: ok or no !', 'no', ok, fail);

console.log({}.toString.call(10));
console.log({}.toString.call('string'));
console.log({}.toString.call([]));
console.log({}.toString.call(new Date()));
console.log({}.toString.call(() => 'function'));

// JSON
let my_json = '{ "name":"Den", "age": 27, "role":[1,2,3,10], "isAdmin": false, "date":"2018-03-09T07:02:59.135Z" }';
let arr_json = '[{ "id": 1, "name":"Den" }, { "id": 2, "name":"Leo" }]';

let users = [
  { name: 'Den', age: 27, date: new Date() },
  { name: 'Leo', age: 31, total: function() { return this.age * 2 } }
];

console.log(JSON.stringify(users));

let json = JSON.parse(my_json)
console.log(json.name);
console.log(json.role[3]);
console.log(json.date);

console.log(JSON.parse(arr_json)[0].name);

let result = JSON.parse(my_json, function(k,v) {
  if (k == 'date') {
    return new Date(v)
  } else {
    return v;
  }
});
console.log(result.date.getDate());

// setTimeout и setInterval

setTimeout("console.log('Hello')", 1000);

function getHello(text) {
  console.log(text);
}

setTimeout(getHello, 2000, 'Hello function!');

let timer_id = setInterval(getHello, 3000, 'Hello interval!')
setTimeout(function() {
  clearInterval(timer_id);
  console.log('Stop');
}, 9000);

// Рекурсивный setTimeout – более гибкий метод тайминга
let time_id = setTimeout(function getName() {
  console.log('My name is Danila!');
  time_id = setTimeout(getName, 3000);
}, 3000);

function printNumbersTimeout() {
  let num = 1;
  let time_id = setTimeout(function start() {
    console.log(num);
    if (num < 5) setTimeout(start, 100);
    num ++
  }, 100);
};

printNumbersTimeout()

function startTime() {
  let date = new Date();
  console.log(date.toLocaleTimeString());
  setTimeout(()=>{ startTime() }, 1000);
};

startTime()

function downTime() {
  let down_date = new Date(2019, 2, 9, 16, 26).getTime();
  let now_date = new Date().getTime();
  let distance = down_date - now_date;
  let timer_id = setTimeout(()=>{ downTime() }, 1000);

  if (distance < 0) {
    clearTimeout(timer_id);
  } else {
    console.log(distance);
  }
};

downTime();

function downTime() {
  let down_date = new Date(1991, 1, 28, 17, 30).getTime();
  let now_date = new Date().getTime();
  let distance = now_date - down_date;
  let timer_id = setTimeout(()=>{ downTime() }, 1000);

  let years = Math.floor(distance / (1000 * 60 * 60 * 24) / 365);
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  console.log(`${years}y ${days}d ${hours}h ${minutes}m ${seconds}s`);
};

downTime();


// Перехват ошибок, "try..catch"

let jsonError = "Json error";

try {
  console.log(JSON.parse(jsonError));
} catch (e) {
  console.log(e);
}

// Math Object

console.log(Math.abs(-10.25)); // 10.25 вернет абсолютное значение
console.log(Math.abs(null)); // 0
console.log(Math.ceil(0.30)); // 1 округление в большую сторону
console.log(Math.ceil(0.9)); // 1
console.log(Math.floor(1.9)); // 1 округление в меньшую сторону
console.log(Math.floor(1.1)); // 1
console.log(Math.min([5,10,3,23].join(', ')))
console.log(4**4) // возвести в степень
console.log(Math.pow(4, 4))
console.log(Math.random());// рандом
console.log(Math.floor(Math.random() * 100));
console.log(Math.round(2.5)) // 3 округлить число до ближайшего целого числа.

// Регулярки
let string = 'Is this all there is 236-00-00?';
console.log(string.match(/h/g)); // найти все буквы h
console.log(string.match(/[0-4]/g)); //найти в диапозоне
console.log(string.match(/[^0-9]/g)); // поиск кроме
console.log(string.match(/(is|all)/g)); // поиск или
console.log(string.match(/\w/g)); // найдет все кроме символов
console.log(string.match(/\d/g)); // найдет только цифры
console.log(string.match(/t.e/g)); // найдет 
console.log(string.match(/\w+/g)); // найдет все кроме символов
console.log(string.match(/\d+/g)); // найдет только цифры
console.log(string.match(/\d{3}/g)); // количество
console.log(string.match(/\d{2,3}/g)); // количество
console.log(string.match(/\d{3,}/g)); // количество 3 и больше

*/














