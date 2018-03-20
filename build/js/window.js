/*
let myWindow;

function openWindow() {
  myWindow = window.open("", "myWindow", "width=400", "height=200");
}

function closeWindow() {
  if (myWindow) {
    myWindow.close();
  }
}

// размер окна или элемента
console.log(window.innerWidth);
console.log(document.body.clientWidth);
console.log(window.innerHeight);
console.log(window.length);

// localStorage
let notebook = [];

let user = {
  name: 'Den',
  age: 27,
  phone: { home: '8432000000', work: '+79503000000'}
}

let user2 = {
  name: 'Leo',
  age: 31,
  phone: { home: '8495000000', work: '+79070000000'}
}

// записать
localStorage.setItem('user', JSON.stringify(user));
localStorage.setItem('notebook', JSON.stringify(notebook.concat(user, user2)));

// читать
let returnStorage = JSON.parse(localStorage.getItem('user'))
console.log(returnStorage);
console.log(returnStorage.name);
console.log(returnStorage.phone.work);

let returnNotebook = JSON.parse(localStorage.getItem('notebook'))
console.log(returnNotebook[1]);
console.log(returnNotebook[1].name);

// удалить
//localStorage.removeItem("user")

// удалить все
//localStorage.clear()


// base64
let string = 'Hi Den!';
let encode = window.btoa(string);
let decode = window.atob(encode);

console.log(encode);
console.log(decode);

*/
"use strict";