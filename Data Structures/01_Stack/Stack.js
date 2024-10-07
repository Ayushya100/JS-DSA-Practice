class Stack {
    constructor() {
        this.stack = [];
    }

    push(data) {
        this.stack.push(data);
    }

    pop() {
        return this.isEmpty() ? 'Empty Stack' : this.stack.pop();
    }

    peek() {
        return this.isEmpty() ? 'Empty Stack' : this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

    clear() {
        this.stack = [];
    }

    contain(value) {
        // this.stack.includes(value);
        return this.stack.indexOf(value) > -1;
    }

    reverse() {
        this.stack.reverse();
    }

    printStack() {
        if (this.stack.length === 0) {
            return 'Stack is Empty';
        }

        return this.stack.join(' --> ');
    }
}

const stack = new Stack();
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.contain(5));

console.log(stack.peek());
stack.pop();
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
stack.pop();

console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.contain(5));
console.log(stack.printStack());
stack.reverse();
console.log(stack.printStack());