// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// Note:
// b - a = a.length % b.length (in case of string)


const gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return '';
    }

    function gcd(a, b) {
        if (b.length === 0) {
            return a;
        }

        return gcd(b, a.slice(0, a.length % b.length));
    }

    return gcd(str1, str2);
};

// Approach 2
const gcdOfStrings2 = function(str1, str2) {
    if (str1 + str2 != str2 + str1) {
        return '';
    }

    let a = str1.length;
    let b = str2.length;

    while (b) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return str1.slice(0, a);
}
