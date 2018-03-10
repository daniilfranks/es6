"use strict";

/*
document.getElementById('mydom').style.color = '#fff';
document.getElementById('mydom').style.fontSize = '18px';
document.getElementById('mydom').style.background = '#d94482';
document.getElementById('mydom').innerHTML = 'My text';

document.getElementsByTagName('p')[0].style.color = 'red';
document.getElementsByTagName('p').length;

let elements = document.getElementsByTagName('p');
for(let i = 0; i < elements.length; i++) {
  elements[i].style.color = 'red';
}

let elements_p = document.getElementsByClassName('mycolor');
for(let i = 0; i < elements_p.length; i++) {
  elements_p[i].style.color = 'blue';
}

document.getElementsByClassName('mycolor')[0].style.color = 'green';

document.querySelector('#mydom').style.color = '#524f4f';
document.querySelector("p").style.color = "red";
document.querySelector('.mycolor').style.color = 'red';


document.querySelectorAll('.mycolor')[0].style.color = '#524f4f';

let colorP = document.querySelectorAll('.mycolor');
for(let i = 0; i < colorP.length; i++) {
  colorP[i].style.color = 'orange';
}

document.querySelector('#dno p').style.color = '#524f4f';

function changeColor() {
  let box = document.querySelectorAll('.box input[type="checkbox"]:checked');
  for(let i = 0; i < box.length; i++) {
    box[i].parentElement.style.color = 'red';
    console.log(box[i].parentElement)
  }
}

let content = document.querySelectorAll('#content li');
for(let i = 0; i < content.length; i++) {
  console.log(content[i].innerHTML.trim());
}

// События
let clickHello = document.querySelector('.hello');
clickHello.addEventListener('click', () => {
  console.log('Hello!');
});

// Добавление и удаление элементов dom
let app = document.querySelector('.content ul');
let li = document.createElement('li');
li.className = 'mycolor';
li.innerHTML = 'Text 4';
app.appendChild(li);

*/

// Атрибуты
function getAttributes() {
  var btn = document.querySelector('.mydom'); // отобразить атрибуты кнопки
  console.log(btn.attributes);
  console.log(btn.attributes[0]); // class="mydom"
  console.log(btn.attributes[0].value); // mydom
  //console.log(btn.attributes[0].value == "newClass"); // изменить атрибут
  console.log(btn.attributes[1].name); // onclick
  console.log(btn.attributes.length); // сколько всего атрибутов
  console.log(btn.getAttributeNode("onclick").specified); // проверить установлен ли атрибут
  console.log(btn.attributes.getNamedItem("onclick").value); // вывести значение атрибута

  for (var i = 0; i < btn.attributes.length; i++) {
    console.log(btn.attributes[i].name); // список атрибутов
    console.log(btn.attributes[i].value); // список атрибутов
  };

  //btn.attributes.removeNamedItem("class"); // удалить атрибут
  // создать атрибут
  var type = document.createAttribute("id");
  type.value = "my-dom-id-1";
  btn.attributes.setNamedItem(type);
};

// изменить атрибут
function setAttributes() {
  var block = document.querySelector('.block');
  block.getAttributeNode("class").value = "newblock"; // изменить атрибут
}

// добавить атрибут
var link = document.querySelector(".danila");
var href = document.createAttribute("href");
href.value = "https://danilababanov.ovh";
link.setAttributeNode(href);

// Событие в документе
console.log(document.activeElement.tagName); // выведет элемент при событие body button итд

function event_body() {
  console.log(document.activeElement.tagName);
};
document.addEventListener("click", event_body);

// удалить событие
document.removeEventListener("click", event_body);

// событие к кнопке
var block = document.querySelector('button.calc');
block.addEventListener("click", function () {
  console.log('Hi button');
});

var block2 = document.querySelector('.block');
block2.addEventListener("mousemove", function () {
  console.log('Mouse event');
});

// вывести url
console.log(document.baseURI);
console.log(document.documentURI);
console.log(document.domain);

// body тэг
console.log(document.body.style.background = '#ccc');

// создать элемент с текстом на странице
function setBody() {
  var p = document.createElement("p");
  var text = document.createTextNode("Prosto text");
  p.appendChild(text);
  //p.appendChild(p);
  document.body.appendChild(p);
};
setBody();

// писать текст
function setText() {
  var text = document.createTextNode("Prosto text 2");
  document.body.appendChild(text);
};
setText();

// cookie
document.cookie = "CSRF-TOKEN=0123456789"; // записать

console.log(document.cookie); // прочитать
console.log(document.cookie.match(/CSRF-TOKEN/).input);

// github.com/js-cookie/js-cookie
Cookies.set('user_id', '1', { expires: 7 });
Cookies.set('cart_id', '1', { expires: 7 });

Cookies.remove('cart_id');

console.log(Cookies.get());
console.log(Cookies.get('CSRF-TOKEN'));

// Формы
function myForm() {
  console.log(document.forms[2]); // найти форму
  console.log(document.forms.namedItem("publish"));
  console.log(document.forms[2].name);
  console.log(document.forms[2].id);
  console.log(document.forms[2].elements[0].value); // читать из формы
};

// поиск по имени name
function getName() {
  var elem = document.getElementsByName("publish")[0].tagName;
  console.log(elem);
};
getName();

// картинки
console.log(document.images);
console.log(document.images[0].alt);
console.log(document.images[0].src);
console.log(document.images[0].clientWidth);
console.log(document.images[0]);
console.log(document.images.length);
console.log(document.images[0].style.border = "5px dotted black");

// html документ изменен
console.log(document.lastModified);

// все ссылки на странице
console.log(document.links);
console.log(document.links[0]);
console.log(document.links[0].href);
console.log(document.links[0].style.border = "1px solid red");
console.log(document.links.length);

// title
console.log(document.title);
//console.log(document.title = 'New title');