/*
You are given an array nums of n integers and two integers k and x.
The x-sum of an array is calculated by the following procedure:
    Count the occurrences of all elements in the array.
    Keep only the occurrences of the top x most frequent elements. If two elements have the same number of occurrences, the element with the bigger value is considered more frequent.
    Calculate the sum of the resulting array.

Note that if an array has less than x distinct elements, its x-sum is the sum of the array.
Return an integer array answer of length n - k + 1 where answer[i] is the x-sum of the
subarray
nums[i..i + k - 1].

Example 1:
Input: nums = [1,1,2,2,3,4,2,3], k = 6, x = 2
Output: [6,10,12]
Explanation:
    For subarray [1, 1, 2, 2, 3, 4], only elements 1 and 2 will be kept in the resulting array. Hence, answer[0] = 1 + 1 + 2 + 2.
    For subarray [1, 2, 2, 3, 4, 2], only elements 2 and 4 will be kept in the resulting array. Hence, answer[1] = 2 + 2 + 2 + 4. Note that 4 is kept in the array since it is bigger than 3 and 1 which occur the same number of times.
    For subarray [2, 2, 3, 4, 2, 3], only elements 2 and 3 are kept in the resulting array. Hence, answer[2] = 2 + 2 + 2 + 3 + 3.

Example 2:
Input: nums = [3,8,7,8,7,5], k = 2, x = 2
Output: [11,15,15,15,12]
*/

/*
Solution Approach
- This problem will be solved using the sliding window technique.
*/

// Solution
const xSumValue = (numsMap, currentSum, x) => {
    if (numsMap.size < x) {
        return currentSum;
    }

    let numsArr = Array.from(numsMap.entries());
    numsArr.sort((a, b) => a[1] === b[1] ? b[0] - a[0] : b[1] - a[1]);
    currentSum = 0;

    for (let i = 0; i < x; i++) {
        currentSum += numsArr[i][0] * numsArr[i][1];
    }

    return currentSum;
}

var findXSum = function(nums, k, x) {
    const numsMap = new Map();
    let currentSum = 0;

    for (let i = 0; i < k; i++) {
        numsMap.set(nums[i], (numsMap.get(nums[i]) || 0) + 1);
        currentSum += nums[i];
    }

    let result = [xSumValue(numsMap, currentSum, x)];

    for (let i = k; i < nums.length; i++) {
        let valueToRemove = numsMap.get(nums[i - k]);
        if (valueToRemove === 1) {
            numsMap.delete(nums[i - k]);
        } else {
            numsMap.set(nums[i - k], valueToRemove - 1);
        }
        numsMap.set(nums[i], (numsMap.get(nums[i]) || 0) + 1);

        currentSum += nums[i] - nums[i - k];
        result.push(xSumValue(numsMap, currentSum, x));
    }

    return result;
}