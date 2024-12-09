// You are given an integer array nums and an integer k.
// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
// Return the maximum number of operations you can perform on the array.

 

// Example 1:
// Input: nums = [1,2,3,4], k = 5
// Output: 2
// Explanation: Starting with nums = [1,2,3,4]:
// - Remove numbers 1 and 4, then nums = [2,3]
// - Remove numbers 2 and 3, then nums = []
// There are no more pairs that sum up to 5, hence a total of 2 operations.

// Example 2:
// Input: nums = [3,1,3,4,3], k = 6
// Output: 1
// Explanation: Starting with nums = [3,1,3,4,3]:
// - Remove the first two 3's, then nums = [1,4,3]
// There are no more pairs that sum up to 6, hence a total of 1 operation.

// Method 1
const maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    let operations = 0;

    while (left < right) {
        let sum = nums[left] + nums[right];
        
        if (sum === k) {
            operations++;
            left++;
            right--;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }

    return operations;
};

// Method 2
const maxOperations2 = function(nums, k) {
    let map = new Map();
    let operations = 0;

    for (const num of nums) {
        let compliment = k - num;
        
        if (map.get(compliment) > 0) {
            operations++;
            map.set(compliment, map.get(compliment) - 1);
        } else {
            map.set(num, (map.get(num) || 0) + 1);
        }
    }

    return operations;
}
