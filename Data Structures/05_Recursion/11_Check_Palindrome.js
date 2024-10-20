const recursivePalindrome = (string) => {
    if (string.length <= 1) {
        return true;
    }

    if (string[0] === string[string.length - 1]) {
        return recursivePalindrome(string.substring(1, string.length - 1));
    } else {
        return false;
    }
}

console.log(recursivePalindrome('nitin'));
console.log(recursivePalindrome('hello'));
