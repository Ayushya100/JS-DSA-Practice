// Two strings are considered close if you can attain one from the other using the following operations:
//     Operation 1: Swap any two existing characters.
//         For example, abcde -> aecdb
//     Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
//         For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.
// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

// Example 1:
// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"

// Example 2:
// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.

// Example 3:
// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"

/*
Solution Approach
- Validate the lengths of the two strings
- Build Frequency maps (FM) for both the strings
- FM -> Compare key size
- Validate if both maps have same characters
- Extract the values -> Build Array -> sort
- Conver array to string -> compare
*/

const closeStrings = function(word1, word2) {
    // Validate Length
    if (word1.length !== word2.length) {
        return false;
    }

    // Build Frequency Maps
    const frequencyMap1 = new Map();
    const frequencyMap2 = new Map();

    for (const char of word1) {
        frequencyMap1.set(char, (frequencyMap1.get(char) || 0) + 1);
    }

    for (const char of word2) {
        frequencyMap2.set(char, (frequencyMap2.get(char) || 0) + 1);
    }

    // Compare Key size
    const characters1 = new Set(frequencyMap1.keys());
    const characters2 = new Set(frequencyMap2.keys());

    if (characters1.size !== characters2.size) {
        return false;
    }

    // Validate same characters in both strings
    const haveSameCharacters = [...characters1].every(char => characters2.has(char));

    if (!haveSameCharacters) {
        return false;
    }

    // Extract Values -> Array -> String -> Compare
    const sortedFrequency1 = Array.from(frequencyMap1.values()).sort((a, b) => a - b);
    const sortedFrequency2 = Array.from(frequencyMap2.values()).sort((a, b) => a - b);

    const areFrequencyIdentical = sortedFrequency1.join(',') === sortedFrequency2.join(',');

    if (!areFrequencyIdentical) {
        return false;
    }

    return true;
};
