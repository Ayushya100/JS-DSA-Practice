class Queue {
    constructor() {
        this.queue = [];
    }

    enQueue(data) {
        this.queue.push(data);
    }

    deQueue() {
        return this.isEmpty() ? 'Empty Queue' : this.queue.shift();
    }

    peek() {
        return this.isEmpty() ? 'Empty Queue' : this.queue[this.queue.length - 1];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }

    clear() {
        this.queue = [];
    }

    printQueue() {
        if (this.isEmpty()) {
            return 'Queue is Empty';
        }

        return this.queue.join(' --> ');
    }
}

// Usage Examples
const queue = new Queue();

queue.enQueue(5);
queue.enQueue(4);
queue.enQueue(3);
queue.enQueue(2);
console.log(queue.printQueue());
console.log(queue.peek());

console.log(queue.deQueue());
console.log(queue.peek());
console.log(queue.deQueue());
console.log(queue.peek());

console.log(queue.size());
console.log(queue.printQueue());
queue.clear();