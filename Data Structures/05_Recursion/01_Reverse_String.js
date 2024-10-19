const reverseStringIteratively = (str) => {
    let reverse = '';
    let length = str.length - 1;

    while (length >= 0) {
        reverse += str[length];
        length--;
    }

    return reverse;
}

const reverseStringRecursively = (str) => {
    console.log(`Winding - current string : ${str}`);
    if (str === '') {
        return '';
    }

    let reverse = reverseStringRecursively(str.substring(0, str.length - 1));
    let result = str[str.length - 1] + reverse;
    console.log(`Unwinding Last Char : ${str[str.length - 1]} added in front of ${reverse} - Result string : ${result}`);

    return result;
}

// To reverse a string using recursion we need to pass the substring of the original string recursively in every function call.
// In each function call, we'll remove the last character of the original string passed to that function, and add the last character
// in the starting of building the string while unwinding the recursive function result.

console.log(reverseStringIteratively('Hello World'));
console.log(reverseStringRecursively('Hello World'));
