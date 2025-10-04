class Queue {
    constructor() {
        this.queue = [];
    }

    enQueue(data) {

    }

    deQueue() {

    }

    peek() {

    }

    isEmpty() {

    }

    size() {

    }

    clear() {

    }

    printQueue() {

    }
}

// Usage Examples
const queue = new Queue();

queue.enQueue(5);
queue.enQueue(4);
queue.enQueue(3);
queue.enQueue(2);
console.log(`Queue Elements: ${queue.printQueue()}`);
console.log(`Top Element in Queue: ${queue.peek()}`);

console.log(`Element removed from Queue: ${queue.deQueue()}`);
console.log(`Top Element of Queue: ${queue.peek()}`);
console.log(`Element removed from Queue: ${queue.deQueue()}`);
console.log(`Top Element of Queue: ${queue.peek()}`);

console.log(`Queue Size: ${queue.size()}`);
console.log(`Queue Elements: ${queue.printQueue()}`);

queue.clear();
console.log(`Queue Size: ${queue.size()}`);
console.log(`Queue Elements: ${queue.printQueue()}`);
