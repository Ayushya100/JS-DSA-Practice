/*
Quesion:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

/*
Solution Approach:
- Use memorization technique i.e., Hash map or Objects in JS.
- Iterate over the nums array and deduct each element value with the target.
- Check if the remaining amount is present as a key in Object or not.
- If value as a key present in any iteration then return the indexes of the current looping element and the value for the key in an Object.
- If not found in any iteration then store that element as a key and the index of that element as a value in an Object.
*/

// Solution:
var twoSum = function(nums, target) {
    let numMemo = {};

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (diff in numMemo) {
            return [numMemo[diff], i];
        }
        numMemo[nums[i]] = i;
    }

    return [];
};