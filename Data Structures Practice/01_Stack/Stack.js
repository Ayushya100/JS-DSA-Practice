class Stack {
    constructor() {
        this.stack = [];
    }

    push(data) {
        
    }

    pop() {

    }

    peek() {
        
    }

    isEmpty() {

    }

    size() {

    }
    
    clear() {

    }

    contain(value) {
        
    }

    reverse() {

    }

    printStack() {

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
