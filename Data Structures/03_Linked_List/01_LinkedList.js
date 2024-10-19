class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
}

LinkedList.prototype.insertAtBeginning = function(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
}

LinkedList.prototype.insertAtEnd = function(data) {
    let newNode = new Node(data);

    if (!this.head) {
        this.head = newNode;
        return;
    }

    let lastNode = this.head;

    while (lastNode.next) {
        lastNode = lastNode.next;
    }
    lastNode.next = newNode;
}

LinkedList.prototype.insertAfterNode = function(data, key) {
    let keyNode = this.searchNode(key);
    if (!keyNode) {
        return 'Provided key node value doesnot exists, cannot proceed furthur';
    }

    const newNode = new Node(data, keyNode.next);
    keyNode.next = newNode;
}

LinkedList.prototype.searchNode = function(key) {
    if (this.head.data === key) {
        return this.head;
    }

    let currentNode = this.head;
    while (currentNode) {
        if (currentNode.data === key) {
            return currentNode;
        }
        currentNode = currentNode.next;
    }

    return false;
}

LinkedList.prototype.search = function(key) {
    if (!this.head) {
        return 'Linked List is Empty';
    }

    const isNodeFound = this.searchNode(key);

    if (!isNodeFound) {
        return 'Node not found in the list';
    }
    return 'Node found in the list successfully';
}

LinkedList.prototype.deleteAtBeginning = function() {
    if (!this.head) {
        return 'Linked List is Empty';
    }

    this.head = this.head.next;
}

LinkedList.prototype.deleteAtEnd = function() {
    if (!this.head) {
        return 'Linked List is Empty';
    }

    if (!this.head.next) {
        this.head = null;
        return;
    }

    let secondLastNode = this.head;
    while (secondLastNode.next.next) {
        secondLastNode = secondLastNode.next;
    }
    secondLastNode.next = null;
}

LinkedList.prototype.deleteByKey = function(key) {
    if (!this.head) {
        return 'Linked List is Empty';
    }

    if (this.head.data === key) {
        this.head = this.head.next;
    }

    let currentNode = this.head;
    while (currentNode.next) {
        if (currentNode.next.data === key) {
            currentNode.next = currentNode.next.next;
            return;
        }
        currentNode = currentNode.next;
    }
    return `Requested node with key ${key} not found to be deleted from the list`;
}

LinkedList.prototype.printList = function() {
    if (!this.head) {
        return 'Linked List is Empty';
    }

    let result = [];
    let currentNode = this.head;

    while (currentNode) {
        result.push(currentNode.data);
        currentNode = currentNode.next;
    }

    if (result.length > 1) {
        result = result.join(' --> ');
    } else {
        result = result.join('');
    }
    return result;
}

LinkedList.prototype.length = function() {
    if (!this.head) {
        return 0;
    }

    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
        count++;
        currentNode = currentNode.next;
    }
    return count;
}

LinkedList.prototype.reverse = function() {
    if (!this.head) {
        return;
    }

    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
    this.head = prevNode;
}

// Usage Example
const linkedList = new LinkedList();
console.log(linkedList.printList());
linkedList.insertAtBeginning(3);
console.log(linkedList.printList());
console.log(`Length - ${linkedList.length()}`);
linkedList.insertAtBeginning(2);
console.log(linkedList.printList());
console.log(`Length - ${linkedList.length()}`);

linkedList.insertAtEnd(4);
console.log(linkedList.printList());
console.log(`Length - ${linkedList.length()}`);
linkedList.insertAtEnd(6);
console.log(linkedList.printList());
console.log(`Length - ${linkedList.length()}`);

linkedList.insertAfterNode(8, 7);
console.log(linkedList.printList());
console.log(`Length - ${linkedList.length()}`);
linkedList.insertAfterNode(5, 4);
console.log(linkedList.printList());
console.log(`Length - ${linkedList.length()}`);

linkedList.reverse();
console.log(linkedList.printList());
console.log(`Length - ${linkedList.length()}`);

linkedList.deleteAtBeginning();
console.log(linkedList.printList());
console.log(`Length - ${linkedList.length()}`);
linkedList.deleteAtEnd();
console.log(linkedList.printList());
console.log(`Length - ${linkedList.length()}`);
linkedList.deleteAtEnd();
console.log(linkedList.printList());
console.log(`Length - ${linkedList.length()}`);
linkedList.deleteAtBeginning();
console.log(linkedList.printList());
console.log(`Length - ${linkedList.length()}`);
linkedList.deleteAtEnd();
console.log(linkedList.printList());
console.log(`Length - ${linkedList.length()}`);