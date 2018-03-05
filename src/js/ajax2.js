//HTTP client
//https://github.com/axios/axios

// Параметры запроса
/*
let xhr = new XMLHttpRequest();
let baseUrl = 'http://jsonplaceholder.typicode.com'
let params = "/posts"
xhr.open('GET', `${baseUrl}${params}`, true);
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
     if(xhr.status == 200) {
       alert(xhr.responseText);
   }
  }
};
*/

/*
// POST запрос
let baseUrl = 'http://jsonplaceholder.typicode.com';
let params = "/posts"

// параметры запроса
//let body = `title=${title}&title=${body}&title=${userId}`;
let body = JSON.stringify({
      title: 'Test title',
      body: 'Hello post',
      userId: 1
    });

let xhr = new XMLHttpRequest();
xhr.open('POST', `${baseUrl}${params}`, true);
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.send(body);

xhr.onreadystatechange = function() {
  console.log(xhr.responseText);
};
*/

// ajax forma + параметры
/*
function createUser() {
  let baseUrl = 'http://jsonplaceholder.typicode.com';
  let params = "/posts"

  let form = document.forms["user"]

  let body = JSON.stringify({
    title:  form["title"].value,
    body:   form["body"].value,
    userId: form["userId"].value
  });
  
  let xhr = new XMLHttpRequest();
  xhr.open('POST', `${baseUrl}${params}`, true);
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(body);

  xhr.onreadystatechange = function() {
    console.log(xhr.responseText);
  };
}
*/

// FormData Отправка данных форм
/*
function createUser() {
  let baseUrl = 'http://jsonplaceholder.typicode.com';
  let params = "/posts"

  let formData = new FormData(document.forms.user);
  formData.append("token", "12345");

  let xhr = new XMLHttpRequest();
  xhr.open('POST', `${baseUrl}${params}`, true);
  xhr.send(formData);

  xhr.onreadystatechange = function() {
    console.log(xhr.responseText);
  };
}
*/

// Заголовки ответа
//Чтобы JavaScript мог прочитать HTTP-заголовок ответа, сервер должен указать
//его имя в Access-Control-Expose-Headers.

//X-Uid: 123
//X-Authorization: 2c9de507f2c54aa1
//Access-Control-Expose-Headers: X-Uid, X-Authentication

//По умолчанию браузер не передаёт с запросом куки и авторизующие заголовки.
//Чтобы браузер передал вместе с запросом куки и HTTP-авторизацию, 
//нужно поставить запросу xhr.withCredentials = true

// Закачка файлов
/*
function log(html) {
  document.getElementById('log').innerHTML = html;
}

document.forms.upload.onsubmit = function() {
  var file = this.elements.myfile.files[0];
  if (file) {
    upload(file);
  }
  return false;
}

function upload(file) {
  var xhr = new XMLHttpRequest();
  // обработчики можно объединить в один,
  // если status == 200, то это успех, иначе ошибка
  xhr.onload = xhr.onerror = function() {
    if (this.status == 200) {
      log("success");
    } else {
      log("error " + this.status);
    }
  };
  // обработчик для закачки
  xhr.upload.onprogress = function(event) {
    log(event.loaded + ' / ' + event.total);
  }
  // создать экшн для обработки файла
  xhr.open("POST", "upload", true);
  xhr.send(file);
}
*/