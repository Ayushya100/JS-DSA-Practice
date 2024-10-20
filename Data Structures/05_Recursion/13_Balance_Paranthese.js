const recursiveParanthese = (array, startIndex = 0, counter = 0) => {
    if (startIndex === array.length) {
        return counter === 0;
    }

    if (counter < 0) {
        return false;
    }

    if (array[startIndex] === '(') {
        return recursiveParanthese(array, startIndex + 1, counter + 1);
    } else if (array[startIndex] === ')') {
        return recursiveParanthese(array, startIndex + 1, counter - 1);
    }

    return false;
}

const string1Arr = '()((()))'.split('');
const string2Arr = '()((())))'.split('');

console.log(recursiveParanthese(string1Arr));
console.log(recursiveParanthese(string2Arr));
