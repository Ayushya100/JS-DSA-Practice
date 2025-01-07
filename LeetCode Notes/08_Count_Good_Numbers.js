/*
A digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7).
For example, "2582" is good because the digits (2 and 8) at even positions are even and the digits (5 and 2) at odd positions are prime. However, "3245" is not good because 3 is at an even index but is not even.

Given an integer n, return the total number of good digit strings of length n. Since the answer may be large, return it modulo 109 + 7.
A digit string is a string consisting of digits 0 through 9 that may contain leading zeros.

Example 1:
Input: n = 1
Output: 5
Explanation: The good numbers of length 1 are "0", "2", "4", "6", "8".

Example 2:
Input: n = 4
Output: 400

Example 3:
Input: n = 50
Output: 564908303
*/

/*
Solution Approach
- This problem will be solved using basic Maths.
- First we need to understand that since we will be dealing with very large numbers, so we've to use BigInt in JS and perform modulos operation at
  every possible calculation steps.
- Point to remember is that every even position there are 5 possibilities i.e., 0, 2, 4, 6, 8. And at every odd position there are 4 possibilities i.e., 2, 3, 5, 7
- For example if a number is of length 4 then possibilites will be 5 x 4 x 5 x 4
- For every given number, half of the number positions will be even and rest half will be odd.
- Total number of even positions will be (n + 1) / 2 and odd positions will be n / 2.
- In this way we'll cut down the problem in half, but again because we are dealing with large numbers we have to further reduce the iterations required to get the result.
- We need to perform the calculation in the form of : (5 ^ (even position count)) * (4 ^ (odd position count))
- When we're dealing with such type of expressions, we can further brake down the expressions recursively, it will allow us to reduce the problem size quickly.
- We can do this as follows:
-- If expression (what we highlighted as even and odd position counts) is even, then we can futher break it down as : base ^ expression = (base ^ (expression / 2)) ^ 2.
   For example: If we've to calculate the value of 5 ^ 4, Instead of doing 5 x 5 x 5 x 5 we can also do (5 x 5) and multiply it's result with itself, which will be
   (5 x 5) x (5 x 5). In both the case result will be same, but in second case we've to traverse half of what is required in first approach.
-- If expression is odd, then we can split and calculate one base sheprately and other values follow the same steps as what we followed in above case.
   For example: If we've to calculate the value of 4 ^ 5, Instead of doing 4 x 4 x 4 x 4 x 4 we can also do 4 x (4 x 4) x (4 x 4) where value of 4 x 4 will be calculated once.
*/

// Solution
var countGoodNumbers = function(n) {
    let modulo = BigInt(10**9 + 7);
    n = BigInt(n);

    let evenPositions = (n + 1n) / 2n;  // Appending n as suffix of the integer converts it in BigInt.
    let oddPositions = n / 2n;

    function modPower(base, expression) {
        if (expression === 0n) {
            return 1n;
        }

        if (expression % 2n === 0n) {
            let value = modPower(base, expression / 2n);
            return (value * value) % modulo;
        } else {
            return base * modPower(base, expression - 1n);
        }
    }

    let evenValue = modPower(5n, evenPositions);
    let oddValue = modPower(4n, oddPositions);

    return Number((evenValue * oddValue) % modulo);
}