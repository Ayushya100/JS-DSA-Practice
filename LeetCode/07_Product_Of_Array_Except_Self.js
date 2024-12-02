// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

const productExceptSelf = function(nums) {
    let length = nums.length;
    let leftArr = new Array(length).fill(1);
    let rightArr = new Array(length).fill(1);
    let result = new Array(length);

    // Left array construction
    for (let leftIndex = 1; leftIndex < length; leftIndex++) {
        leftArr[leftIndex] = nums[leftIndex - 1] * leftArr[leftIndex - 1];
    }

    // Right array construction
    for (let rightIndex = length - 2; rightIndex >= 0; rightIndex--) {
        rightArr[rightIndex] = nums[rightIndex + 1] * rightArr[rightIndex + 1];
    }

    for (let resultIndex = 0; resultIndex < length; resultIndex++) {
        result[resultIndex] = leftArr[resultIndex] * rightArr[resultIndex];
    }

    return result;
};
