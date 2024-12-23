/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.\
*/

/*
Solution Approach 1
- This problem only requires basic math formula.
- First find out the sum of 0 to n values using formula i.e. (n * (n + 1)) / 2
- Second find out the sum of numbers present in an array.
- Subtract the array sum with the expected sum to get the result.
*/

var missingNumber = function(nums) {
    let numsLength = nums.length;
    let expectedSum = (numsLength * (numsLength + 1)) / 2;
    let originalSum = 0;

    for (const num of nums) {
        originalSum += num;
    }

    return expectedSum - originalSum;
}

/*
Solution Approach 2
- Since we know that there's only one number between 0 to n which is missing, we can initially assume that the length value of an array is a missing number.
- Then in each iteration subtract the current number with it's corresponding index number and add it to the initial missing number.
- The final number returned in the end of a loop will be the missing number.
*/

// Solution 2:
var missingNumber2 = function(nums) {
    let missingNumber = nums.length;

    for (let i = 0; i < nums.length; i++) {
        missingNumber += i - nums[i];
    }

    return missingNumber;
}
