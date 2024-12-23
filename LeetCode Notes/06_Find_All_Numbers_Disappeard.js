/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]
*/

/*
Solution Approach
- When we're dealing with these type of questions where an array of n integers, consists of 1 to n integers both inclusive. We need to keep in mind that we've 2 set of values
  with us. One is the values provided in an array, and the other one is the set of indexes.
- For each index of an array there must be a value present in an array. For example for index 1 there must be a value 1 present in an array. If for index 1 there's no value 1
  present, then that will be a missing number.
- Also this array is not sorted so the value for the corresponding index can be present at any place in an array.
- So what we can do is use those indexes to flag them to tell our program that this value is present.
- To do this we'll use the original provided numbers and loop over those numbers, and deduct that number by 1 as array index lies between 0 to n - 1. We'll loop over the entire
  array and multiply each index value by -1 to make it set like a flag, to let our program know that the number corresponding to this index exists. And if some value is not
  present in an array then we won't be able to visit to that index.
- Also we need to ensure that we've to perform the above flag builder operation only if the index is not previously visited and already setted the index value as flag.
- Once the entire flag builder opertaion completes. Re-loop over the same array, and check for each index if the value is less than 0 or not.
- For those indexes the values are not smaller than 0 add 1 to that index to get the original value and push it to the result.
*/

// Solution
var findDisappearedNumbers = function(nums) {
    const result = [];

    for (const num of nums) {
        let correspondingIndex = Math.abs(num) - 1;
        nums[correspondingIndex] = nums[correspondingIndex] > 0 ? nums[correspondingIndex] * -1 : nums[correspondingIndex];
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
}
