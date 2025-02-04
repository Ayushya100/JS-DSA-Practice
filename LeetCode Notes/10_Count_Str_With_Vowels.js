/*
Given a string array that contains n elements each composed of lowercase english characters and q queries, each query of the format l-r. For each query determine how many
strings starting from index l and ending at index r have vowels as the first and last character.

The strArr is to be considered as 1st index Array.

Example 1:
strArr = ['aba', 'bcb', 'ece', 'aa', 'e']
queries = ['1-3', '2-5', '2-2']
Output: [2, 3, 0]
*/

/*
Solution Approach
- Create a boolean array for the provided strArr having values as 0 and 1. If the start or end char of a string is not a vowel, then value in boolean array to be stored as 0.
  Whereas if both the start and end chars of a string is a vowel, then value in boolean array to be stored as 1.
- After creating a boolean array, create a prefix sum array, where prefix[i] will store the number of valid strings from the beginning of the array upto the index i.
- This will help us in calculating the desired result. As we can directly use the prefix sum array to calculate the desired result using the provided l and r indexes.
- For each query, we can simply compute the difference in the prefix sum array to get the number of valid strings in the given range.
*/

// Solution
const isVowelString = (str) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    return vowels.has(str[0]) && vowels.has(str[str.length - 1]);
}

var countValidStrings = function(strArr, queries) {
    const strArrLength = strArr.length;

    const isValidStrArr = new Array(strArrLength).fill(0);
    const prefixSumArr = new Array(strArrLength).fill(0);

    for (let i = 0; i < strArrLength; i++) {
        if (isVowelString(strArr[i])) {
            isValidStrArr[i] = 1;
        }
    }

    prefixSumArr[0] = isValidStrArr[0];
    for (let i = 1; i <= strArrLength; i++) {
        prefixSumArr[i] = prefixSumArr[i - 1] + isValidStrArr[i - 1];
    }

    const resultAr = [];
    for (const query of queries) {
        const [startIndex, endIndex] = query.split('-');

        const count = prefixSumArr[endIndex] - prefixSumArr[startIndex - 1];
        resultAr.push(count);
    }

    return resultArr;
}
