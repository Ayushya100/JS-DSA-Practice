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

console.log(reverseStringIteratively('Hello World'));
console.log(reverseStringRecursively('Hello World'));
