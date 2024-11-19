// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1.
// If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

// Example 1
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

const mergeAlternately = function(word1, word2) {
    let merged = '';
    let word1Pointer = 0;
    let word2Pointer = 0;

    while (word1Pointer < word1.length && word2Pointer < word2.length) {
        merged += word1[word1Pointer];
        merged += word2[word2Pointer];
        word1Pointer++;
        word2Pointer++;
    }

    if (word1Pointer < word1.length) {
        merged += word1.substring(word1Pointer);
    }
    if (word2Pointer < word2.length) {
        merged += word2.substring(word2Pointer);
    }

    return merged;
};
