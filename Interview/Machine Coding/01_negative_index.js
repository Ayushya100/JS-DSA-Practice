const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Enable negative indexing in array using proxy array
function negativeIndex(arr) {
    return new Proxy(arr, {
        get(target, prop) {
            const index = Number(prop);
            if (index < 0) {
                return target[target.length - index];
            }
            return target[index];
        },
        set(target, prop, value) {
            const index = Number(prop);
            if (index < 0) {
                target[target.length - index] = value;
            } else {
                target[index] = value;
            }
            return true;                                    // true is returned as a confirmation by the proxy that the property is set with the new value. If false then value not setted.
        }
    });
};

