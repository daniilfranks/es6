/*
class Task {
  constructor(title = Task.getDefaultTitle()) {
    this.title = title;
    this._done = false;
  }

  get done() {
    return this._done;
  }

  set done(value) {
    this._done = value;
  }

  static getDefaultTitle() {
    return 'Дефолтная задача'
  }

  complete() {
    this.done = true;
  }
}

class SubTask extends Task {
  constructor(title, description) {
    super(title);
    this.description = description;
  }

  complete() {
    super.complete();
    console.log('Задача выполнена')
  }  
}

let task = new Task('Изучить js');
let task2 = new Task();
let subtask = new SubTask('Изучить php', 'Описание задачи');

task.complete();
console.log(task);
console.log(task.done);
console.log(task2);

subtask.done = 'undefined';
console.log(subtask);

console.dir(task);



function User() {

}

let User = function User() {

}

let User = class User {
  constructor() {

  }
}

let user = new User();


let add = (x, y) => x + y;
console.log(add(5, 10));

let square = x => x * x;
console.log(square(9));

let getNumber = () => 50;
console.log(getNumber());

let multiply = (x, y) => {
  let result = x * y;
  return result;
}
console.log(multiply(2, 2));

let getPerson = () => ({ name: 'Den' });
console.log(getPerson());

(() => console.log('iife'))();


let numbers = [1,2,3,4,5,6,7,8];
let sum = 0;
numbers.forEach(num => sum += num);
console.log(sum);

let squared = numbers.map(n => n * n);
console.log(squared);

*/
"use strict";