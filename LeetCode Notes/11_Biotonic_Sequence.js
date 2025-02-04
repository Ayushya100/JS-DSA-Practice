/*
A biotonic sequence is a sequence of numbers that first increases (non-decreasing) and then decreases (non-increases).
Given an array of integers find the length of the longest subarray that is bitonic in nature.

Example:
arr = [10, 8, 9, 15, 12, 6 , 7]
Output: 5
*/

/*
Solution Approach:
- Two pass approach: Calculate the length of the longest increasing subsequence ending at each index.
- Calculate the length of the longest decreasing subsequence starting at each index.
- For each index, the longest bitonic subsequence centered at that index is the sum of the increasing subsequence and the decreasing subsequence lengths minus 1 (since the
  peak element is counted twice).
- Calculate the increasing subsequence lengths from left to right.
- Calculate the decreasing subsequence lengths from rigth to left.
- Combine the results and find the maximum bitonic subsequence.
*/

// Solution:
var longestBitonicSubarray = function(arr) {
    const arrLength = arr.length;

    if (arrLength <= 1) {
        return arrLength;
    }

    let increasingArr = new Array(arrLength).fill(1);
    let decreasingArr = new Array(arrLength).fill(1);

    for (let i = 1; i < arrLength; i++) {
        if (arr[i] >= arr[i - 1]) {
            increasingArr[i] = increasingArr[i - 1] + 1;
        }
    }

    for (let i = arrLength - 2; i >= 0; i--) {
        if (arr[i] >= arr[i + 1]) {
            decreasingArr[i] = decreasingArr[i + 1] + 1;
        }
    }

    const maxLength = 0;
    for (let i = 0; i < arrLength; i++) {
        if (increasingArr[i] > 1 && decreasingArr[i] > 1) {
            maxLength = Math.max(maxLength, increasingArr[i] + decreasingArr[i] - 1);
        }
    }

    return maxLength;
}
