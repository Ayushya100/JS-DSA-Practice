const iterativeFibonacci = (value) => {
    let n0 = 0;
    let n1 = 1;

    for (let i = 0; i < value; i++) {
        let temp = n0 + n1;
        n0 = n1;
        n1 = temp;
    }
    
    return n0;
}

const recursiveFibonacci = (value) => {
    if (value === 0 || value === 1) {
        return value;
    }

    return recursiveFibonacci(value - 1) + recursiveFibonacci(value - 2);
}

console.log(iterativeFibonacci(5));
console.log(iterativeFibonacci(5));
console.log(iterativeFibonacci(8));
console.log(iterativeFibonacci(8));
