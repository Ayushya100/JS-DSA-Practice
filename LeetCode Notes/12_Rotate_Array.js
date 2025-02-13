/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

/*
Solution Approach
- An array can be rotated in desired way in 3 steps.
- Rotate the entire array from left (0th index) to right (arr length - 1).
- Rotate the array elements from 0th index to the rotate value.
- Rotate the array elements from rotate value to right right (arr.length - 1).
- Only thing we need to ensure is that as per the constraints the provided rotate value can be more than the array length. So, we need to ensure that the rotate value is within
  the array length. To do this we can use modulo operation to get the appropriate rotate value which is within the array length.
*/

// Solution
const rotate = function(nums, k) {
    const rotateArr = (leftIndex, rightIndex) => {
        while (leftIndex < rightIndex) {
            [nums[leftIndex], nums[rightIndex]] = [nums[rightIndex], nums[leftIndex]];
            leftIndex++;
            rightIndex--;
        }
    }

    const rotateVal = k % nums.length;

    rotateArr(0, nums.length - 1);
    rotateArr(0, rotateVal - 1);
    rotateArr(rotateVal, nums.length - 1);
}
