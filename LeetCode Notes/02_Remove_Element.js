/*
Question:
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed.
Then return the number of elements in nums which are not equal to val.
Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
- Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
- Return k.

Example 1:
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

/*
Solution Approach:
- Use two pointers technique i.e., readPointer and writePointer iterating over same array.
- readPointer should be a main looping pointer which will be used to read each element in an array and iterate.
- Since we've to remove the target val occurrences from the nums array. In each iteration check if the element value is equal to provided val or not.
- If the element is not equal to val then use the writePointer the update the element at the writePointer index with the value of readPointer and then increment the writePointer value by 1.
- If the element is equal to val then donot update the element at the writePointer index and donot increment the writePointer value. Meaning no operation on writePointer in this case.
- Once the loop iteration of readPointer is over. Return the writePointer value. 
*/

// Solution:
var removeElement = function(nums, val) {
    let readPointer = 0;
    let writePointer = 0;

    while (readPointer < nums.length) {
        if (nums[readPointer] !== val) {
            nums[writePointer] = nums[readPointer];
            writePointer++;
        }
        readPointer++;
    }

    return writePointer;
};