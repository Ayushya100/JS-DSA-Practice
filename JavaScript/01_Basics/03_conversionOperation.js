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

// ------------------------------------------------------- Operations -------------------------------------------------

let value = 3;
let negValue = -value;
console.log(negValue);

let str1 = 'Hello';
let str2 = ' World';
let str3 = str1 + str2;
console.log(str3);

console.log('1' + 2);       // 12
console.log(1 + '2');       // 12
console.log('1' + 2 + 2);   // 122
console.log(1 + 2 + '2');   // 32

console.log(+true);     // 1
console.log(+'');       // 0

