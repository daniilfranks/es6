/*
// map
let items = ['coffee', 'tea', 'whiskey'];

items.map((drink) => { console.log(`${drink}!`) });

// filter
items.filter((drink) => { if (drink.length > 4) console.log(drink); } );

// filter
let users = [
  { name: 'Den', age: 27 },
  { name: 'Max', age: 23 },
  { name: 'Leo', age: 30 }
];

users.filter((user) => { if (user.age > 25) console.log(user) });

// for
for (let i = 0; i < users.length; i++) {
  console.log(users[i].name);
}

// split
let string = 'Hi js!'

console.log(string.split(" "));
console.log(string.split(""));

// reduce
let itemReduce = items.reduce((count, item) => { return count + item.length }, 0);

console.log(itemReduce);

// Params
function FullName(...params) {
  for (let i = 0; i < params.length; i++) {
    console.log(`${i}: ${params[i]}`);
  }
}

FullName('Den', 'Bob', 27);

// classList
let divUsers = document.querySelector('.users');
console.log(divUsers.className); // Имя класса
//console.log(divUsers.className = 'rename__new-name'); // переименовать
//console.log(divUsers.className.add('rename__new-name')); // переименовать
//console.log(divUsers.className = ''); // удалить имя класса
//console.log(divUsers.className.remove('rename__new-name')); // удалить имя класса

console.log(divUsers.classList.value) // имя класса
// добавить классы
console.log(divUsers.classList.add('red', 'padding', 'border', 'background'));
console.log(divUsers.classList.contains('background')) // проверить существует класс
console.log(divUsers.classList.remove('red', 'background')); // удалить классы

*/
"use strict";