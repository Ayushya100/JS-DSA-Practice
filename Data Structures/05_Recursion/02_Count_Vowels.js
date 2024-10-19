const isVowel = (char) => {
    let lowerChar = char.toLowerCase();
    let vowels = 'aeiou';

    return vowels.indexOf(lowerChar) !== -1;
}

const countVowelsIteratively = (str) => {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        count = isVowel(str[i]) ? count + 1 : count;
    }
    return count;
}

const countVowelsRecursively = (str) => {
    if (str.length === 1) {
        return Number(isVowel(str[0]));
    }

    return countVowelsRecursively(str.substring(0, str.length - 1)) + Number(isVowel(str[str.length - 1]));
}

console.log(countVowelsIteratively('Hello World'));
console.log(countVowelsRecursively('Hello World'));
