const powerOfNumberIteratively = (base, exponent) => {
    let value = 1;

    if (exponent === 1) {
        return base;
    }

    for (let i = 1; i <= exponent; i++) {
        value = value * base;
    }
    return value;
}

const powerOfNumberRecursively = (base, exponent) => {
    if (exponent === 0) {
        return 1;
    }

    return base * powerOfNumberRecursively(base, exponent - 1);
}

console.log(powerOfNumberIteratively(2, 5));
console.log(powerOfNumberRecursively(2, 5));
