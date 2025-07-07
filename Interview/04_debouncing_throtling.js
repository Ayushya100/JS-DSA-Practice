// Debouncing
function higherOrdFn(fn, delay) {
    let timerId;
    
    return function(...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

function greet(name) {
    console.log(`Hello ${name}`);
}

// higherOrdFn(greet('Ayushya'), 3000);                         // In this line we're calling the greet function and passing its return statement to the higher order function
const debounceFn = higherOrdFn(() => greet('Ayushya'), 3000);   // In this line we're passing the function reference of the greet function with the parameter to the higher order function using  which has to be called and not yet called
debounceFn();
debounceFn();
debounceFn();
debounceFn();
// Remove past request => keep a reference of it
// Fire a new request
// userRequest() => debouncesUserRequest()



// Throttling
const higherOrdFn1 = (fn, delay) => {
    let timerId = null;

    return (...args) => {
        if (timerId === null) {
            fn(...args);
            timerId = setTimeout(() => {
                timerId = null;
            }, delay);
        }
    }
}

higherOrdFn1(greet('Ayushya Jaiswal'), 3000);
higherOrdFn1(greet('Ayushya Jaiswal'), 3000);
higherOrdFn1(greet('Ayushya Jaiswal'), 3000);
