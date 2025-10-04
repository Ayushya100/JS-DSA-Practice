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
console.log(`Stack Elements: ${stack.printStack()}`);
console.log(`Is Element 5 available in Stack: ${stack.contain(5)}`);
console.log(`Is Element 8 available in Stack: ${stack.contain(8)}`);

stack.reverse();
console.log(`Stack Elements: ${stack.printStack()}`);

console.log(`Top Element in Stack: ${stack.peek()}`);
stack.pop();
console.log(`Top Element in Stack: ${stack.peek()}`);
stack.pop();
console.log(`Top Element in Stack: ${stack.peek()}`);
stack.pop();

console.log(`Is Stack Empty: ${stack.isEmpty()}`);
console.log(`Current Stack Size: ${stack.size()}`);
console.log(`Is Element 5 available in Stack: ${stack.contain(5)}`);
console.log(`Stack Elements: ${stack.printStack()}`);

stack.pop();
console.log(`Is Stack Empty: ${stack.isEmpty()}`);
console.log(`Stack Elements: ${stack.printStack()}`);
