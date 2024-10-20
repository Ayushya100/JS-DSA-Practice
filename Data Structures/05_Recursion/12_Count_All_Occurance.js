const countKeyInArry = (array, key) => {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === key) {
            count++;
        }
    }

    return count;
}

const recuriveCountKey = (array, key, index = 0) => {
    if (index >= array.length) {
        return 0;
    }

    const isKeyFound = array[index] === key ? 1 : 0;
    return isKeyFound + recuriveCountKey(array, key, index + 1);
}

const string = 'hello world';
const stringArr = string.split('');

console.log(countKeyInArry(stringArr, 'l'));
console.log(recuriveCountKey(stringArr, 'l'));
