"use strict";

//CSRF
document.cookie = "CSRF-TOKEN==0123456789";
console.log(document.cookie);

var request = new XMLHttpRequest();

var csrfCookie = document.cookie.match(/CSRF-TOKEN=([\w-]+)/);
if (csrfCookie) {
  request.setRequestHeader("X-CSRF-TOKEN", csrfCookie[1]);
}