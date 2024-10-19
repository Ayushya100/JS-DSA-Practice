const firstOccuranceIteratively = (arr, findMe, currIndex) => {
    while (currIndex < arr.length) {
        if (arr[currIndex] === findMe) {
            return currIndex;
        }
        currIndex++;
    }

    return -1;
}

const firstOccuranceRecursively = (arr, findMe, currIndex) => {
    if (currIndex === arr.length) {
        return -1;
    }

    if (arr[currIndex] === findMe) {
        return currIndex;
    }

    return firstOccuranceRecursively(arr, findMe, currIndex + 1);
}

const str = 'Hello World';
const strArr = str.split('');

console.log(firstOccuranceIteratively(strArr, 'W', 0));
console.log(firstOccuranceIteratively(strArr, 'w', 0));
console.log(firstOccuranceRecursively(strArr, 'e', 0));
console.log(firstOccuranceRecursively(strArr, 'H', 1));