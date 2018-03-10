//CSRF
/*
document.cookie = "CSRF-TOKEN==0123456789";
console.log(document.cookie)

var request = new XMLHttpRequest();

var csrfCookie = document.cookie.match(/CSRF-TOKEN=([\w-]+)/);
if (csrfCookie) {
  request.setRequestHeader("X-CSRF-TOKEN", csrfCookie[1]);
}

// загрузка из файла
function readFile() {
  let request = new XMLHttpRequest();
  request.open("GET", "text.txt", true);
  request.send();

  request.onreadystatechange = function() {
    console.log(request.responseText);
  };
}

readFile();
*/
"use strict";