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

// Атрибуты
function getAttributes() {
  let btn = document.querySelector('.mydom') // отобразить атрибуты кнопки
  console.log(btn.attributes);
  console.log(btn.attributes[0]); // class="mydom"
  console.log(btn.attributes[0].value); // mydom
  //console.log(btn.attributes[0].value == "newClass"); // изменить атрибут
  console.log(btn.attributes[1].name); // onclick
  console.log(btn.attributes.length); // сколько всего атрибутов
  console.log(btn.getAttributeNode("onclick").specified); // проверить установлен ли атрибут
  console.log(btn.attributes.getNamedItem("onclick").value); // вывести значение атрибута

  for (let i = 0; i < btn.attributes.length; i++) {
    console.log(btn.attributes[i].name); // список атрибутов
    console.log(btn.attributes[i].value); // список атрибутов
  };

  //btn.attributes.removeNamedItem("class"); // удалить атрибут
  // создать атрибут
  let type = document.createAttribute("id");
  type.value = "my-dom-id-1";
  btn.attributes.setNamedItem(type);
};

// изменить атрибут
function setAttributes() {
  let block = document.querySelector('.block');
  block.getAttributeNode("class").value = "newblock"; // изменить атрибут
}

// добавить атрибут
let link = document.querySelector(".danila");
let href = document.createAttribute("href");
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
let block = document.querySelector('button.calc');
block.addEventListener("click", () => { console.log('Hi button')});

let block2 = document.querySelector('.block');
block2.addEventListener("mousemove", () => { console.log('Mouse event')});

// вывести url
console.log(document.baseURI);
console.log(document.documentURI);
console.log(document.domain);

// body тэг
console.log(document.body.style.background = '#ccc');

// создать элемент с текстом на странице
function setBody() {
  let p = document.createElement("p");
  let text = document.createTextNode("Prosto text");
  p.appendChild(text);
  //p.appendChild(p);
  document.body.appendChild(p);
};
setBody();

// писать текст
function setText() {
  let text = document.createTextNode("Prosto text 2");
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
  console.log(document.forms.namedItem("publish"))
  console.log(document.forms[2].name);
  console.log(document.forms[2].id);
  console.log(document.forms[2].elements[0].value); // читать из формы
};

// поиск по имени name
function getName() {
  let elem = document.getElementsByName("publish")[0].tagName;
  console.log(elem);
};
getName()

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

*/

// Elements
// Вызвать событие на кнопке
document.getElementById("btn").addEventListener("click", function () {
  return console.log('Try it!');
});

var event = document.getElementById("event");
event.addEventListener("mouseover", getMouseover);
event.addEventListener("click", getClick);

function getClick() {
  this.style.backgroundColor = "red";
  console.log('Click');
};

function getMouseover() {
  console.log('Mouseover');
};

// добавить в список
function AddList() {
  var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Default";

  var li = document.createElement("li");
  var text = document.createTextNode(item);
  li.appendChild(text);
  document.getElementById("item-list").appendChild(li);
};

AddList('Car');
AddList('Phone');
document.getElementById("add-list").addEventListener("click", function () {
  return AddList();
});

// перемещение между списками
function AddTasksSuccessfully() {
  var node = document.getElementById("tasks-successfully").lastChild;
  document.getElementById("tasks-not-successfully").appendChild(node);
};

function AddTasksNoSuccessfully() {
  var node = document.getElementById("tasks-not-successfully").lastChild;
  document.getElementById("tasks-successfully").appendChild(node);
};

document.getElementById("btn-successfully").addEventListener("click", AddTasksSuccessfully);
document.getElementById("btn-not-successfully").addEventListener("click", AddTasksNoSuccessfully);

// количество элементов в списке
console.log(document.getElementById("tasks-successfully").childElementCount);
console.log(document.getElementById("tasks-not-successfully").childElementCount);

// установить фокус
document.getElementById("btn-not-successfully").focus();

// удалить фокус
document.getElementById("btn-not-successfully").blur();

// Получить дочерние узлы
console.log(document.body.childNodes);
console.log(document.body.childNodes[5]);
var task = document.getElementById("tasks-successfully").childNodes;
task[1].style.backgroundColor = "yellow";

console.log(document.body.children);
console.log(document.body.children[5]);

// добавить класс элементу
//document.getElementById("tasks-not-successfully").classList.add('red');
document.getElementById("tasks-not-successfully").classList.add('red', 'no-style');
document.getElementById("tasks-not-successfully").className = "border";

document.getElementById("class-list").className += " background";
document.getElementById("class-list").className += " padding";

// переключение между 2 классами
function getToggle() {
  var id = document.getElementById("tasks-not-successfully");
  if (id.className == 'background') {
    id.className = 'background2';
  } else {
    id.className = 'background';
  }
}

// удалить стиль
document.getElementById("tasks-not-successfully").classList.remove('no-style');

// переключение между 2 классами
function myToggle() {
  document.getElementsByClassName('block')[1].classList.toggle("newblock");
};

console.log(document.getElementById("class-list").classList.value);
console.log(document.getElementById("class-list").classList[0]);
console.log(document.getElementById("class-list").classList.contains('red'));

// удалить класс
document.getElementById("class-list").classList.remove('border');

// получить название класса
console.log(document.getElementById("class-list").className);

// Событие при скроле
window.onscroll = function () {
  return scroll();
};

function scroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.body.style.backgroundColor = "#ccc";
  } else {
    document.body.style.backgroundColor = "#fff";
  }
}

// узнать размер окна элемента с рамкой padding
var w_h = window.document.body;
console.log(w_h.clientWidth);
console.log(w_h.clientHeight);

// с padding и border
console.log(w_h.offsetWidth);
console.log(w_h.offsetHeight);

// клонировать элемент
var id = document.getElementById("class-list");
var clone = id.cloneNode(true);
document.body.appendChild(clone);

// Вывести первый результат из списка элементов
console.log(document.getElementById("list").firstElementChild.innerHTML);
console.log(document.getElementById("list").firstElementChild.tagName);

// Вывести название атрибута
console.log(document.getElementById("class-list").getAttribute("class"));
console.log(document.getElementById("class-list").getAttribute("onclick"));

console.log(document.getElementById("class-list").getAttributeNode("class").value);

// проверить существует ли атрибут
console.log(document.getElementById("class-list").hasAttribute("onclick"));

// Проверить существуют ли дочерние узлы 
console.log(document.getElementById("class-list").hasChildNodes());
console.log(document.getElementById("none-list").hasChildNodes());

// вывести контент на странице
document.querySelector(".html").innerHTML = 'HTML';

var html = document.querySelector(".html").innerHTML;
document.querySelector(".css").innerHTML = html;

// добавить в начало списка
var nli = document.createElement("li");
var ntext = document.createTextNode("Water");
nli.appendChild(ntext);

var nul = document.querySelector("#list");
nul.insertBefore(nli, nul.childNodes[0]);

// вывести последний элемент списка
console.log(document.getElementById("list").lastElementChild);
console.log(document.getElementById("list").lastElementChild.innerHTML);
console.log(document.getElementById("list").lastElementChild.tagName);

// при добавление текста объеденит весь текст в 1 элемент
function AddText(text) {
  var texts = document.createTextNode(text);
  var id = document.getElementById("normalize");
  id.appendChild(texts);
  id.normalize();
};

AddText(' first text');
AddText(' first text');

// Вывести родитель узла div
console.log(document.getElementById('list').parentNode.nodeName);
console.log(document.getElementById('list').parentElement.nodeName);

// Удалить аттрибут
document.getElementById('attribute').removeAttribute("class");
document.getElementById('attribute').removeAttribute("onclick");

// Удалить элемент
document.getElementById('list').removeChild(list.childNodes[0]);

// Узнать есть ли дочерние узлы, удалить
function deleteElement() {
  var list = document.getElementById('list');
  if (list.hasChildNodes()) {
    list.removeChild(list.childNodes[0]);
  };
};

//deleteElement();

// удалить все узлы
function deleteAllElement() {
  var list = document.getElementById("list");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}

//deleteAllElement();

// удалить элемент по id
function deleteElementId() {
  var item = document.getElementById("tea_1");
  item.parentNode.removeChild(item);
}

//deleteElementId();

// ширина высота контента с прокруткой
console.log(document.body.scrollHeight);
console.log(document.body.scrollWidth);

// скролл
function getScroll() {
  document.getElementById("scroll").scrollIntoView();
}

// Event