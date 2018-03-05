/*
function loadPhones() {
  // Создаём новый объект XMLHttpRequest
  let xhr = new XMLHttpRequest();
  // Конфигурируем его: GET-запрос на URL 'phones.json'
  xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts', true);
  // записать в HTTP заголовок
  xhr.setRequestHeader('X-Auth', '123');
  // Отсылаем запрос
  xhr.send();
  // Прерывает выполнение запроса
  //xhr.abort()

  // Продолжительность асинхронного запроса
  xhr.timeout = 1000;
  // При превышении времени запрос будет оборван и сгенерировано событие ontimeout
  xhr.ontimeout = function() {
    alert( 'Извините, запрос превысил максимальное время' );
  }

  // Ошибки
  xhr.onerror = function() {
    alert( 'Ошибка ' + xhr.status );
  }

  xhr.onreadystatechange = function() {
    // Если код ответа сервера не 200, то это ошибка
    // Ответ сервера
    // xhr.status       #код ответа 200 404 итд
    // xhr.statusText   #Текстовое описание ответа сервера ok not found итд
    // xhr.responseText #Текст ответа
    // xhr.readyState Текущее состояние запроса 3, 4
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Вывод ошибок
      //alert( xhr.status + ': ' + xhr.statusText);
    //} else {
    //  try {
        // Результат
        let phone = JSON.parse(xhr.responseText);
        
        for(let i in phone) {
          console.log(`${phone[i].userId} ${phone[i].id} ${phone[i].title} ${phone[i].body}`);
        }
      //} catch (e) {
      //  alert(e.message);
      //}
    }
    // читать HTTP заголовки
    //alert(xhr.getAllResponseHeaders());
    //alert(xhr.getResponseHeader('Content-Type'));
  }
}
*/

//read local file
/*
function loadPhones() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'phone.json', true);
  xhr.send();

  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);

    for(let i in data) {
      console.log(`${data[i].id} ${data[i].name} ${data[i].phone}`);
    };
  }
};
*/
"use strict";