let score = '33';

console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);

// '33' => 33
// '33abc' => NaN (Not a Number)
// true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// '' => false
// 'a' => true

let stringNumber = 33;
let numberToString = String(stringNumber);

console.log(typeof numberToString);
console.log(numberToString);

