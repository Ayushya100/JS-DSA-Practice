const removeAdjacentDuplicates = (inputString) => {
    let result = '';

    for (let i = 0; i < inputString.length; i++) {
        if ((i === inputString.length - 1) || (inputString[i] !== inputString[i + 1])) {
            result += inputString[i];
        }
    }

    return result;
}

const recursiveRAD = (inputString) => {
    if (inputString.length <= 1) {
        return inputString;
    }

    if (inputString[0] === inputString[1]) {
        return recursiveRAD(inputString.substring(1));
    }

    return inputString[0] + recursiveRAD(inputString.substring(1));
}

console.log(removeAdjacentDuplicates('Hello Woorrldd'));
console.log(recursiveRAD('Hello Woorrldd'));
