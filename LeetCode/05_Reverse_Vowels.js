// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once

// Example:
// Input: s = "IceCreAm"
// Output: "AceCreIm"
// Explanation:
// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm"

const reverseVowels = function(s) {
    const vowels = 'aeiouAEIOU';
    let charArr = s.split('');

    let leftPointer = 0;
    let rightPointer = s.length - 1;

    while (leftPointer < rightPointer) {
        while (leftPointer < rightPointer && vowels.indexOf(charArr[leftPointer]) === -1) {
            leftPointer++;
        }

        while (leftPointer < rightPointer && vowels.indexOf(charArr[rightPointer]) === -1) {
            rightPointer--;
        }

        if (leftPointer < rightPointer) {
            let temp = charArr[leftPointer];
            charArr[leftPointer] = charArr[rightPointer];
            charArr[rightPointer] = temp;

            leftPointer++;
            rightPointer--;
        }
    }

    return charArr.join('');
};
