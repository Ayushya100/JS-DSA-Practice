const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Write a polyfill for Array.forEach function
// forEach signature - No return, callback function input - value, index & arr
// if (!Array.prototype.forEach) {
console.log('Using forEach');
arr.forEach((value, index) => {
    console.log(`Value at Index ${index} is ${value}`);
});

if (!Array.prototype.myForEach) {   // myForEach is a dummy function real implementation is line no 9
    Array.prototype.myForEach = function(userFn) {
        const originalArr = this;
        
        for (let i = 0; i < originalArr.length; i++) {
            userFn(originalArr[i], i, originalArr);
        }
    }
}

console.log('Using myForEach');
arr.myForEach((value, index) => {
    console.log(`Value at Index ${index} is ${value}`);
});


// Write a polyfill for Array.map funciton
// .map signature - New array return, Each element iterate, userFn
// if (!Array.prototype.map) {
if (!Array.prototype.myMap) {
    Array.prototype.myMap = function(userFn) {
        const resultArr = [];
        
        for (let i = 0; i < this.length; i++) {
            const value = userFn(this[i], i);
            resultArr.push(value);
        }
        return resultArr;
    }
}

const mapRes = arr.map((value, index) => value * 2);
const myMapRes = arr.myMap((value, index) => value * 3);

console.log(mapRes)
console.log(myMapRes);

// Write a polyfill for Array.filter function
// .filter signature - New array function, Each element iterate, userFn
// if (!Array.prototype.filter) {
if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function(userFn) {
        const resultArr = [];

        for (let i = 0; i < this.length; i++) {
            const value = userFn(this[i], i);
            
            if (value) {
                resultArr.push(this[i]);
            }
        }
        return resultArr;
    }
}

const filterRes = arr.filter((value, index) => value > 5);
const myFilterRes = arr.myFilter((value, index) => value > 5);

console.log(filterRes);
console.log(myFilterRes);
