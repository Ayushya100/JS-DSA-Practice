/*
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
*/

// Solution - Approach 1:
var nextGreaterElementAppr1 = function(nums1, nums2) {
    let result = new Array(nums1.length).fill(-1);

    for (let nums1Index = 0; nums1Index < nums1.length; nums1Index++) {
        let nums2Index = nums2.indexOf(nums1[nums1Index]);
        
        while (nums2Index < nums2.length) {
            if (nums2[nums2Index] > nums1[nums1Index]) {
                result[nums1Index] = nums2[nums2Index];
                break;
            }
            nums2Index++;
        }
    }

    return result;
}

/*
Solution Approach
- Initialise one empty map to track next greater element for each element of nums2 array.
- Initialise one empty stack to push each element of nums2 array.
- Loop over nums2 array and first loop over the stack with a condition that if the stack size is greater than 0 and the top element 
  is smaller than the current num of nums2 array. Then pop the top element of the stack and add it to a map as a key with the value
  as a current num of nums2 array. Run this loop until the stack condition satisfies.
- Once the inner loop execution competes push the current num of nums2 array into an stack. Run this loop until the end of nums2 array.
- Loop over nums1 array and for each element get the value from the map to get the next greatest element. If the element does not exists,
  then return the value as -1.
*/

// Solution - Approach 2:
var nextGreaterElement = function(nums1, nums2) {
    let nums2Map = new Map();
    let tempStack = [];

    for (const num of nums2) {
        while (tempStack.length > 0 && tempStack[tempStack.length - 1] < num) {
            nums2Map.set(tempStack.pop(), num);
        }
        tempStack.push(num);
    }

    return nums1.map(num => nums2Map.has(num) ? nums2Map.get(num) : -1);
}