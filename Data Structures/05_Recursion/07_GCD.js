// gcd ---> if m == n ---> m
// gcd ---> if m > n ---> gcd(m - n, n)
// gcd ---> if m < n ---> gcd(m, n - m)

const gcd = (num1, num2) => {
    if (num1 === num2) {
        return num1;
    }

    if (num1 > num2) {
        return gcd(num1 - num2, num2);
    } else {
        return gcd(num1, num2 - num1);
    }
}

console.log(gcd(56, 42));
