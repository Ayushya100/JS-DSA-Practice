const sumOfNumberIteratively = (n) => {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

const sumOfNumberRecursively = (n) => {
    if (n === 1) {
        return 1;
    }

    return n + sumOfNumberRecursively(n - 1);
}

console.log(sumOfNumberIteratively(8));
console.log(sumOfNumberRecursively(8));
