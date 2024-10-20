const removeTabsAndSpaces = (inputString) => {
    let result = '';

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] !== ' ' && inputString[i] !== '\t') {
            result += inputString[i];
        }
    }

    return result;
}

const recursiveRemoveTAS = (inputString) => {
    if (inputString.length === 0) {
        return '';
    }

    const firstChar = inputString[0];
    const restOfString = inputString.slice(1);

    if (firstChar !== ' ' && firstChar !== '\t') {
        return firstChar + recursiveRemoveTAS(restOfString);
    }

    return recursiveRemoveTAS(restOfString);
}

console.log(removeTabsAndSpaces('Test Hello World'));
console.log(recursiveRemoveTAS('Test Hello World'));
