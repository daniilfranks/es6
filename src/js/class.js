/*
let name  = 'Den',
    age   = 26,
    email = 'babanovs5@gmail.com';

let user = { 
  name, 
  age, 
  email,
  getHello() { 
    console.log(`${this.name} ${this.age} ${this.email}`); 
  },
  get getName() {
    return `${this.name} ${this.age} ${this.email}`;
  },

  set setName(value) {
    this.name = value;
  }
};

console.log(user);
user.getHello();
console.log(user.name);
console.log(user['name'])
console.log(user.getName);
console.log(user.setName = 'Alex');

function createCar(key, value) {
  return {
    [key]: value,
    ['_' + key]: value,
    [key.toUpperCase()]: value
  };
}

console.log(createCar('bmw', 'x5'));

class Task {
  constructor(title = Task.getDefaultTitle()) {
    this.title = title;
    this._done = false;
    Task.count += 1;
    console.log('Создание задачи');
  }

  get done() {
    return this._done === true ? 'Выполнено' : 'Не выполнено';
  }

  set done(value) {
    if (value !== undefined && typeof value === 'boolean') {
      this._done = value;
    } else {
      console.log('Error!');
    }
  }

  complete() {
    this.done = true;
    console.log(`Задача "${this.title}" выполнена.`);
  }

  static getDefaultTitle() {
    return 'Дефолтная задача';
  }
}

Task.count = 0;

let task = new Task('Прочитать доку по js.');
let task2 = new Task('Практика');
let task3 = new Task();

console.log(task);
task2.complete();
console.log(task2);
console.log(task3);

console.log(task2.done, task2._done);

console.log(Task.count);

*/