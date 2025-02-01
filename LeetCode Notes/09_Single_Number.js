/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
*/

/*
Solution Approach 1
- The problem can be solved using Map function.
- Using map we can iterate over the array and for each number insert the record in a map assinging the array number as a key in map, whereas the count of its occurrence
  as the value for the record.
- Loop over the map record and for each key (number in an array), check if the count is one or more. If one then the key is the value to be returned.
*/

// Solution
var singleNumber = function(nums) {
    let numsMap = new Map();

    for (let num of nums) {
        numsMap.set(num, (numsMap.get(num) || 0) + 1);
    }

    for (const [num, count] of numsMap) {
        if (count === 1) return num;
    }
}

/*
Solution Approach 2
- The problem can be solved using XOR technique.
- Since every element appears twice except for one unique element, XORing all elements together will cancel out the duplicates, leaving only the unique number.
- This is because x⊕x=0x⊕x=0, so all duplicate numbers will cancel out.
*/

/*
Dry Run for example: [4,1,2,1,2]
- 0 ^ 4 = 4 --> 0000 ^ 0100 = 0100 (4 in decimal)
- 4 ^ 1 = 5 --> 0100 ^ 0001 = 0101 (5 in decimal)
- 5 ^ 2 = 7 --> 0101 ^ 0010 = 0111 (7 in decimal)
- 7 ^ 1 = 6 --> 0111 ^ 0001 = 0110 (6 in decimal)
- 6 ^ 2 = 4 --> 0110 ^ 0010 = 0100 (4 in decimal)

- XOR does not actually add or subtract; it flips bits.
- When a duplicate appears, the same bits flip back, canceling out the number.
*/

// Solution
var singleNumber = function(nums) {
    let result = 0;

    for (let num of nums) {
        result = result ^ num;
    }

    return result;
}