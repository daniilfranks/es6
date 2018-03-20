/*
// Генераторы
function* showNumbers() {
  yield 1;
  yield 2;
}

let number = showNumbers();
//console.log(number.next());
//console.log(number.next());

for(let value of number) {
  console.log(value);
}

// Композиция генераторов
function* generateNumber(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

let num = [...generateNumber(2,5)];
console.log(num);

function* generateNumbers() {
  yield* generateNumber(48,57);
  yield* generateNumber(65,90);
  yield* generateNumber(97,122);
}

let string = '';
for(let code of generateNumbers()) {
  string += String.fromCharCode(code);
}

console.log(string);


*/