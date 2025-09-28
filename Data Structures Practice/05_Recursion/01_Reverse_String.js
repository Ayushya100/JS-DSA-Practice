const reverseStringIteratively = (str) => {

}

const reverseStringRecursively = (str) => {

}

// To reverse a string using recursion we need to pass the substring of the original string recursively in every function call.
// In each function call, we'll remove the last character of the original string passed to that function, and add the last character
// in the starting of building the string while unwinding the recursive function result.

console.log(reverseStringIteratively('Hello World'));
console.log(reverseStringRecursively('Hello World'));
