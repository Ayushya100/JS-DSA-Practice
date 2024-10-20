const iterativeLength = (string) => {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        count++;
    }

    return count;
}

const recursiveLength = (string) => {
    // Can use either of the below two base cases

    // if (string === '') {
    //     return 0;
    // }
    
    if (string.length === 1) {
        return 1;
    }

    return 1 + recursiveLength(string.substring(1));
}

console.log(iterativeLength('Hello World'));
console.log(recursiveLength('Hello World'));
