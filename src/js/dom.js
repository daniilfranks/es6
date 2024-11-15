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
/*
document.getElementById("btn").addEventListener("click", () => console.log('Try it!'));

let event = document.getElementById("event");
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
function AddList(item = "Default") {
  let li = document.createElement("li");
  var text = document.createTextNode(item);
  li.appendChild(text);
  document.getElementById("item-list").appendChild(li);
};

AddList('Car');
AddList('Phone');
document.getElementById("add-list").addEventListener("click", () => AddList());

// перемещение между списками
function AddTasksSuccessfully() {
  let node = document.getElementById("tasks-successfully").lastChild;
  document.getElementById("tasks-not-successfully").appendChild(node);
};

function AddTasksNoSuccessfully() {
  let node = document.getElementById("tasks-not-successfully").lastChild;
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
let task = document.getElementById("tasks-successfully").childNodes;
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
  let id = document.getElementById("tasks-not-successfully");
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
window.onscroll = () => scroll();

function scroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.body.style.backgroundColor = "#ccc";
  } else {
    document.body.style.backgroundColor = "#fff";
  }
}

// узнать размер окна элемента с рамкой padding
let w_h = window.document.body;
console.log(w_h.clientWidth);
console.log(w_h.clientHeight);

// с padding и border
console.log(w_h.offsetWidth);
console.log(w_h.offsetHeight);

// клонировать элемент
let id = document.getElementById("class-list");
let clone = id.cloneNode(true);
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

let html = document.querySelector(".html").innerHTML;
document.querySelector(".css").innerHTML = html;


// добавить в начало списка
let nli = document.createElement("li");
let ntext = document.createTextNode("Water");
nli.appendChild(ntext);

let nul = document.querySelector("#list");
nul.insertBefore(nli, nul.childNodes[0])

// вывести последний элемент списка
console.log(document.getElementById("list").lastElementChild);
console.log(document.getElementById("list").lastElementChild.innerHTML);
console.log(document.getElementById("list").lastElementChild.tagName);

// при добавление текста объеденит весь текст в 1 элемент
function AddText(text) {
  let texts = document.createTextNode(text);
  let id = document.getElementById("normalize");
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
  let list = document.getElementById('list');
  if (list.hasChildNodes()) {
    list.removeChild(list.childNodes[0]);
  };
};

//deleteElement();

// удалить все узлы
function deleteAllElement() {
  let list = document.getElementById("list");
  while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
  }
}

//deleteAllElement();

// удалить элемент по id
function deleteElementId() {
  let item = document.getElementById("tea_1");
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

// События мыши
// Клик левой кнопкой
function getClick() {
  document.getElementById('click_event').innerHTML = 'Click!';
};

function getPClick() {
  document.getElementById('click_event').innerHTML = 'P TAG Click!';
};

document.getElementById('p_click').onclick = () => { getPClick() };

function getEventClick() {
  document.getElementById('click_event').innerHTML = 'Event Click Listener!';
};

document.getElementById("event_click").addEventListener("click", getEventClick);

// Клик правой кнопкой

function getRightClick() {
  document.getElementById('click_event').innerHTML = 'RightClick';
}

document.querySelector('.block').addEventListener("contextmenu", getRightClick);

// дабл клик
function getDoubleClick() {
  document.getElementById('click_event').innerHTML = 'Double Click';
}

document.querySelector('#double_click').addEventListener("dblclick", getDoubleClick);

// событие при наведение мыши
function mouseEnter() {
  document.getElementById('click_event').innerHTML = 'mouseEnter';
}

function mouseLeave() {
  document.getElementById('click_event').innerHTML = '';
}

document.querySelector('#mouseenter').addEventListener("mouseenter", mouseEnter);
document.querySelector('#mouseenter').addEventListener("mouseleave", mouseLeave);

// кординаты
function mouseMouseMove(e) {
  document.getElementById('mousemove').innerHTML = `${e.clientX} x ${e.clientY}`;
}

document.querySelector('#mousemove').addEventListener("mousemove", (e)=> { mouseMouseMove(e) });

// События клавиатуры
function keyDown() {
  let text = document.querySelector('#key_down');
  text.style.backgroundColor = "red";

  document.querySelector('.key_down_content').innerHTML = text.value.toUpperCase();
}

document.querySelector('#key_down').addEventListener("keyup", keyDown); //keydown, keypress

// События объектов и фреймов

// запретить закрыть страницу без подтверждения

//window.addEventListener("beforeunload", (e)=> { e.returnValue = "Write something clever here.." });
window.onbeforeunload = (e)=> { e.returnValue = "Write something clever here.." };

// Событие возникает когда объект загружен
function myFunction() {
  document.getElementById("demo").innerHTML = "Iframe is loaded.";
}

document.getElementById("myFrame").addEventListener("load", myFunction);

// Событие происходит, когда пользователь переходит на веб-страницу
function Welcome() {
  console.log('Welcome!');
}

window.addEventListener("pageshow", Welcome);

// Событие при скроле
function Scroll() {
  document.getElementById("demo").innerHTML = "You scrolled in div.";
}

document.getElementById("scrol-content").addEventListener("scroll", Scroll);

// Формы
function InputBlur() {
  let x = document.getElementById("fname");
  x.style.background = "red";
  x.value = x.value.toUpperCase();
}

function InputFocus() {
  document.getElementById("fname").style.background = "yellow";
}

// Когда вы покидаете поле ввода, запускается функция
document.getElementById("fname").addEventListener("blur", InputBlur);
// Событие при наведени на форму
document.getElementById("fname").addEventListener("focus", InputFocus);

// Событие возникает, когда содержимое элемента формы, выбора или выбранного 
//состояния изменилось (для <input>, <select> и <textarea>)
function ChangeCar() {
  let x = document.getElementById("change_car").value;
  document.querySelector('.result').innerHTML = x;
}

document.getElementById("change_car").addEventListener("change", ChangeCar);

// Событие возникает, когда элемент получает пользовательский ввод
function TextInput() {
  let text = document.getElementById("text_input").value;
  document.querySelector('.result').innerHTML = text;
}

document.getElementById("text_input").addEventListener("input", TextInput);

// range
function RangePrice() {
  let text = document.getElementById("range_price").value;
  document.querySelector('#result_price').innerHTML = text;
}

document.getElementById("range_price").addEventListener("input", RangePrice);

// Валидация
function NoValid() {
  console.log('Input no valid!');
}

document.getElementById("no-valid").addEventListener("invalid", NoValid);

// очистка формы
function FormReset() {
  console.log('Form Reset!');
}

document.getElementById("resetForm").addEventListener("reset", FormReset);

// выделеть текст для копирования
function SelectText() {
  document.getElementById("no-valid").select();
  console.log('Select Text!');
}

document.getElementById("no-valid").addEventListener("select", SelectText);

// Событие происходит при отправке формы
function FormSubmit(event) {
  event.preventDefault();
  console.log('Форма отправлена!');
}

document.getElementById("resetForm").addEventListener("submit", (event)=> { FormSubmit(event) });

// Перетаскивания элемента
// https://www.w3schools.com/jsref/dom_obj_event.asp
function getDrop(event) {
  event.preventDefault();
  if ( event.target.className == "droptarget" ) {
    let data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  }
};

// Событие возникает, когда пользователь начинает перетаскивать элемент
document.ondragstart = (event) => {
  event.dataTransfer.setData("Text", event.target.id);
  document.getElementById("drop-text").innerHTML = "Started to drag the p element.";
};
// Событие возникает, когда элемент перетаскивается
document.ondrag = (event) => { 
  document.getElementById("drop-text").innerHTML = "The p element is being dragged"; 
};
// Элемент перетаскивания находится над целевой точкой перетаскивания
document.ondragover = (event) => event.preventDefault();
// Событие происходит, когда пользователь закончил перетаскивание элемента
document.ondragend = (event) => {
  document.getElementById("drop-text").innerHTML = "Finished dragging the p element";
};
// Событие происходит, когда элемент перетаскивания удаляется по целевой точке
document.ondrop = (event) => { getDrop(event) };

// События в буфере обмена
function CopyText(event) {
  console.log(event);
  console.log('Copy text!');
}

document.querySelector('.copy-text').oncopy = (event) => CopyText(event);

function CutText() {
  console.log('Cut text!');
}

document.querySelector('.copy-text').oncut = () => CutText();

function PastText() {
  console.log('Past text!');
}

document.querySelector('.past-text').onpaste = () => PastText();

// Обработка события для всех элементов event.target
let div = document.getElementById('color-text');
let selectedP;

div.addEventListener("click", (event) => Click(event));

function Click(event) {
  let target = event.target;

  while (target != this) {
    if (target.tagName == 'P') {
      highlight(target);
      return;
    }
    target = target.parentNode;
  }
}

function highlight(node) {
  if (selectedP) {
    selectedP.classList.remove('highlight');
  }
  selectedP = node;
  selectedP.classList.add('highlight');
}


function MyButton(elem) {
  this.start = () => { console.log('Start!'); };
  this.pause = () => { console.log('Pause!'); };
  this.stop = () => { console.log('Stop!'); };

  let self = this;

  elem.addEventListener('click', (event) => ActionClick(event));

  function ActionClick(event) {
    let target = event.target;
    let action = target.getAttribute('data-action');
    if (action) {
      self[action]();
    }
  }
}

new MyButton(buttons);

let post = document.getElementById('posts');

post.addEventListener('click', (event) => Delete(event));

function Delete(event) {
  if (!event.target.classList.contains('remove')){
    return;
  } else {
    event.target.parentNode.hidden = !event.target.parentNode.hidden;
  }
}


// сортировка
var table = document.getElementById('users');

table.addEventListener('click', (event) => Sort(event));

function Sort(event) {
  if (event.target.tagName != 'TH') {
    return;
  } else {
    // Если TH -- сортируем
    sortGrid(event.target.cellIndex, event.target.getAttribute('data-type'));
  }
}

function sortGrid(colNum, type) {
  let tbody = users.getElementsByTagName('tbody')[0];

  // Составить массив из TR
  let rowsArray = [].slice.call(tbody.rows);

  // определить функцию сравнения, в зависимости от типа
  let compare;

  switch (type) {
    case 'year':
      compare = function(rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;
    case 'name':
      compare = function(rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML;
      };
      break;
  }

  // сортировать
  rowsArray.sort(compare);

  // Убрать tbody из большого DOM документа для лучшей производительности
  users.removeChild(tbody);

  // добавить результат в нужном порядке в TBODY
  // они автоматически будут убраны со старых мест и вставлены в правильном порядке
  for (var i = 0; i < rowsArray.length; i++) {
    tbody.appendChild(rowsArray[i]);
  }

  users.appendChild(tbody);
}

// Счетчик
let post = document.getElementById('posts');

post.addEventListener('click', (event) => Counter(event));

function Counter(event) {
  if (!event.target.hasAttribute('data-counter')) return;

  let counter = event.target;
  counter.innerHTML++;
}

// Скрыть/показать элемент

document.addEventListener('click', (event) => Message(event));

function Message(event) {
  let target = event.target;

  let id = target.getAttribute('data-toggle-id');
  if (!id) return;

  let elem = document.getElementById(id);

  elem.hidden = !elem.hidden;
}

// галерея
<p><img id="largeImg" src="https://js.cx/gallery/img1-lg.jpg" alt="Large image"></p>
<ul id="thumbs">
  <li>
    <a href="https://js.cx/gallery/img2-lg.jpg" title="Image 2"><img src="https://js.cx/gallery/img2-thumb.jpg"></a>
  </li>
</ul>

let largeImg = document.getElementById('largeImg');
let thumbs = document.getElementById('thumbs');

thumbs.onclick = function(e) {
  let target = e.target;

  while (target != this) {

    if (target.nodeName == 'A') {
      showThumbnail(target.href, target.title);
      return false;
    }

    target = target.parentNode;
  }

}

function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}

// Защита от копирования
document.onselectstart = noselect;
document.ondragstart = noselect;
document.oncontextmenu = noselect;
function noselect() {return false;} 

*/



































