/*
// Событие конца проигрования
function EndAudio() {
  console.log('The audio has ended.');
}

document.getElementById("horse-audio").onended = () => EndAudio();

// Событие после загрузки файла
function LoadAudio() {
  console.log('Browser has loaded the current frame');
}

document.getElementById("horse-audio").onloadeddata = () => LoadAudio();

// Событие пауза
function PausedAudio() {
  console.log('The video was paused.');
}

document.getElementById("horse-audio").onpause = () => PausedAudio();

// Событие запуска
function StartAudio() {
  console.log('The video has started to play');
}

document.getElementById("horse-audio").onplay = () => StartAudio();

// автозапуск autoplay

// Анимация
let animation_div = document.querySelector(".animation");

function startAnimation() {
  animation_div.style.animation = "mymove 4s 2";
}

animation_div.onclick = () => startAnimation();

// старт анимации
animation_div.addEventListener("animationstart", myStartFunction);
animation_div.addEventListener("animationiteration", myRepeatFunction);
animation_div.addEventListener("animationend", myEndFunction);

function myStartFunction() {
  this.innerHTML = "The animation has started";
  this.style.backgroundColor = "pink";
}

function myRepeatFunction() {
  this.innerHTML = "The animation was played again";
  this.style.backgroundColor = "lightblue";
}

function myEndFunction() {
  this.innerHTML = "The animation has completed";
  this.style.backgroundColor = "lightgray";
}

// Событие мыши какая кнопка была нажата
function pressButton(event) {
  console.log(event.buttons);
}

document.querySelector('.animation').onmousedown = (event) => pressButton(event);

// ввод с клавиатуры
function Unicode(event) {
  console.log(event.charCode);
  console.log(event.key);
}

document.querySelector('.unicode').onkeypress = (event) => Unicode(event);

// Вернутся на предыдущию страницу
//window.history.back()
//window.history.forward();
//window.history.go(-2);

// Location
console.log(location.host);
console.log(location.hostname);
console.log(location.pathname);
console.log(location.protocol);

// Якорь
console.log(location.hash);
console.log(location.href);

// Перезагрузить страницу
function ReloadPage() {
  location.reload();
}
document.querySelector('.reload').onclick = () => ReloadPage();



// Свойства объекта Navigator
console.log(navigator.appCodeName); // Браузер
console.log(navigator.appName); // Название браузера
console.log(navigator.appVersion); // Версия Браузера
console.log(navigator.cookieEnabled); // Куки включены ?
console.log(navigator.language); // Язык
console.log(navigator.platform); // Платформа
console.log(navigator.userAgent);  // Юзер агент
console.log(navigator.javaEnabled());  // JAVA ON ?

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition( (position) => { 
      console.log(`${position.coords.latitude} x ${position.coords.longitude}`);
    });
  }
}

getLocation();

console.log(screen.width);
console.log(screen.height);
console.log(screen.availWidth);
console.log(screen.availHeight);
console.log(screen.colorDepth); // глубина цвета экрана
console.log(screen.pixelDepth);

*/

// Window Object

