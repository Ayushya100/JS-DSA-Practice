// Promise
// When we create an object of promise an executor function is passed.
// Executor function has an access to the resolve and reject.
// On calling the resolve function: Promise gets fullfilled and all the .then function gets executed.
// On calling the reject function: Promise gets rejected and .catch function gets executed.
// Finally function gets executed everytime.

class MyPromise {
    constructor(executorFn) {
        this._state = 'pending';
        this._successCallbacks = [];
        this._errorCallbacks = [];
        this._finallyCallbacks = [];

        this._value = undefined;
        
        executorFn(this.resolverFunction.bind(this), this.rejectorFunction.bind(this));     // Binding is required because context will be lost when going through the micro task-queue in execution.
    }

    then(cb) {
        if (this._state === 'fulfilled') {
            cb(this._value);
            return this;
        }
        this._successCallbacks.push(cb);
        return this;
    }
    
    catch(cb) {
        if (this._state === 'rejected') {
            cb();
            return this;
        }
        this._errorCallbacks.push(cb);
        return this;
    }
    
    finally(cb) {
        if (this._state !== 'pending') {
            cb();
            return this;
        }
        this._finallyCallbacks.push(cb);
        return this;
    }

    resolverFunction(value) {
        this._state = 'fulfilled';
        this._value = value;
        this._successCallbacks.forEach((cb) => cb(value));
        this._finallyCallbacks.forEach((cb) => cb());
    }
    
    rejectorFunction(error) {
        this._state = 'rejected';
        this._errorCallbacks.forEach((cb) => cb(error));
        this._finallyCallbacks.forEach((cb) => cb());
    }
}

function wait(seconds) {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => resolve(), seconds * 1000);
    });
}

wait(5)
    .then(() => console.log('Promise resolved after 5 seconds'))
    .catch((err) => console.log('Rejected after 5 secs'))
    .finally(() => console.log('Executed everytime'));
