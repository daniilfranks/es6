/* let name = 'Danila';

if (true) {
  let version = 'ES6';
}

//console.log(version);

var buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.innerText = i;
  button.onclick = function(e) {
    console.log(i);
  };
}

const PI = 3.14159;
console.log(PI);

let arr1 = [1,2,3];
let arr2 = [4,5,6]
let arr3 = [7,8,9]

let super_array = [...arr1, ...arr3, ...arr2];
console.log(super_array);

let numbers = [1,2,5];
function add(x, y, z) {
  console.log(x + y +z );
}

add(...numbers );


function getName(name, age) {
  console.log(`
    Name: ${name}
    Age: ${age}
    total: ${parseInt(age) + parseInt(age)}
  `);
}

getName('Danila', '26');

let myname = 'Bob';
console.log(upperName `Hello, ${myname}`);

function upperName(literal, value) {
  return literal[0] + value.toUpperCase();
}


function getParam(name = 'Default') {
  console.log(`Hello, ${name}`);
}

getParam();

function getArr(...values) {
  console.log(values);
}

getArr(5,6,2,7);

function getSum(...values) {
  console.log(values.reduce(function(prevValue, currentValue) {
    return prevValue + currentValue;
  }));
}

getSum(5,6,2,7);

let langs = ['Ruby', 'PHP', 'C+', 'Golang'];

for (let lang in langs) {
  console.log(lang);
}

for (let index in langs) {
  console.log(langs[index]);
}

for (let lang of langs) {
  console.log(lang);
}

let persons = [
{ name: 'Den', age: 27 },
{ name: 'Jok', age: 32 },
{ name: 'Leo', age: 41 }
]

for (let person of persons) {
  console.log(`${person.name} ${person.age}`);
}

persons.forEach(myFunction);
function myFunction(value, key) {
  console.log(`${key} ${value.name} ${value.age}`);
}
*/








