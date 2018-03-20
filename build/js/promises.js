/*

function applyForVisa(doc) {
  console.log('Обработка заявления...');
  let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      Math.random() > .5 ? resolve({}) : reject('Отказ.');
    }, 2000);
  });
  return promise;
}

function getVisa(visa) {
  console.info('Виза получена');
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(visa), 2000);
  });
}

function bookHotel(visa) {
  console.log(visa);
  console.log('Бронируем отель');
  //return Promise.reject('Нет мест');
  return Promise.resolve(visa);
}

function buyTickets(booking) {
  console.log('Покупаем билеты');
  console.log('Бронь:', booking);
}

applyForVisa({})
  .then(getVisa)
  .then(bookHotel)
  .then(buyTickets)
  .catch(error => console.error(error));
*/
"use strict";