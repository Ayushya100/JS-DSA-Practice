/*
Question:
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
*/

/*
Solution Approach:
- Use two pointers technique on nums1 array i.e., readPointer and writePointer to iterate and to update the values in-place.
- Use one sheparate pointer to loop on nums2 array.
- Pointers to be initialized from the end of the arrays. nums2 pointer should start from the end of the array by using the provided value n.
- readPointer should start from the provided m value, and write pointer should start from the end of nums1 array as nums1 array holds the size of m + n.
- The loop should run until an unless the readPointer and nums2 pointers are greater than equal to 0.
- In each iteration compare the nums2 value with the nums1 value and update the value at the writePointer index based on which ever is larger. And decrement the writePointer index.
- To contine the loop iteration decrement the pointer value of which ever loop value is written at the writePointer index.
- Once the loop is over. Check if the nums2 pointer is equal to 0 or not.
- If not then re-iterate over the remaining elements of nums2 array and directly update at the writePointer.
- This above step is required because if the nums2 elements are left to be looped then those elements must be smaller than the smallest value of nums1 array.
- Vice-versa is not possible.
*/

// Solution:
var merge = function(nums1, m, nums2, n) {
    let readPointer = m - 1;
    let writePointer = m + n - 1;
    let nums2Pointer = n - 1;

    if (m !== 0 && n !== 0) {
        while (nums2Pointer >= 0 && readPointer >= 0) {
            if (nums2[nums2Pointer] > nums1[readPointer]) {
                nums1[writePointer] = nums2[nums2Pointer];
                nums2Pointer--;
            } else {
                nums1[writePointer] = nums1[readPointer];
                readPointer--;
            }
            writePointer--;
        }
    }

    if (nums2Pointer >= 0) {
        while (nums2Pointer >= 0) {
            nums1[writePointer] = nums2[nums2Pointer];
            nums2Pointer--;
            writePointer--;
        }
    }
};