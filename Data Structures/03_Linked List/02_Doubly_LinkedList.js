class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}

DoublyLinkedList.prototype.insertAtHead = function(data) {
    const newNode = new Node(data, this.head, null);

    if (this.head) {
        this.head.prev = newNode;
    }
    this.head = newNode;

    if (!this.tail) {
        this.tail = newNode;
    }
}

DoublyLinkedList.prototype.insertAtTail = function(data) {
    const newNode = new Node(data, null, this.tail);

    if (this.tail) {
        this.tail.next = newNode;
    }
    this.tail = newNode;

    if (!this.head) {
        this.head = newNode;
    }
}

DoublyLinkedList.prototype.insertAfterNode = function(data, key) {
    if (!this.head) {
        return 'Linked List is Empty';
    }

    const keyNode = this.searchNode(key);
    if (!keyNode) {
        return `Requested node with key ${key} does not exist in Linked List, cannot proceed furthur`;
    }

    const newNode = new Node(data, keyNode.next, keyNode);

    if (keyNode.next) {
        keyNode.next.prev = newNode;
    } else {
        this.tail = newNode;
    }
    keyNode.next = newNode;
}

DoublyLinkedList.prototype.deleteAtHead = function() {
    if (!this.head) {
        return 'Linked List is Empty';
    }

    if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
    } else {
        this.head = this.head.next;
        this.head.prev = null;
    }
}

DoublyLinkedList.prototype.deleteAtTail = function() {
    if (!this.tail) {
        return 'Linked List is Empty';
    }

    if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
    } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
}

DoublyLinkedList.prototype.deleteByKey = function(key) {
    if (!this.head) {
        return 'Linked List is Empty';
    }

    if (this.head.data === key) {
        this.head = this.head.next;
        this.head.prev = null;
    } else if (this.tail.data === key) {
        this.tail = this.tail.prev;
        this.tail.next = null;
    } else {
        let currentNode = this.head.next;
        while (currentNode !== this.tail) {
            if (currentNode.data === key) {
                currentNode.next.prev = currentNode.prev;
                currentNode.prev.next = currentNode.next;
                return;
            }
        }
    }
}

DoublyLinkedList.prototype.searchNode = function(key) {
    let currentNode = this.head;
    while (currentNode) {
        if (currentNode.data === key) {
            return currentNode;
        }
        currentNode = currentNode.next;
    }

    return false;
}

DoublyLinkedList.prototype.printList = function() {
    if (!this.head) {
        return 'Linked List is Empty';
    }

    let headResult = [];
    let tailResult = [];
    let headNodes = this.head;
    let tailNodes = this.tail;

    while (headNodes) {
        headResult.push(headNodes.data);
        headNodes = headNodes.next;
    }
    while (tailNodes) {
        tailResult.push(tailNodes.data);
        tailNodes = tailNodes.prev;
    }

    if (headResult.length > 1) {
        headResult = headResult.join(' --> ');
    } else {
        headResult = headResult.join('');
    }

    if (tailResult.length > 1) {
        tailResult = tailResult.join(' --> ');
    } else {
        tailResult = tailResult.join('');
    }

    return `Head List : ${headResult} || Tail List : ${tailResult}`;
}

DoublyLinkedList.prototype.reverse = function() {
    if (!this.head) {
        return 'Linked List is Empty';
    }

    let currentNode = this.head;
    let temp = null;

    while (currentNode) {
        temp = currentNode.prev;
        currentNode.prev = currentNode.next;
        currentNode.next = temp;
        currentNode = currentNode.prev;
    }

    if (temp) {
        this.tail = this.head;
        this.head = temp.prev;
    }
}

// Usage Examples
const doublyLinkedList = new DoublyLinkedList();

console.log(doublyLinkedList.printList());
doublyLinkedList.insertAtHead(3);
console.log(doublyLinkedList.printList());
doublyLinkedList.insertAtTail(4)
console.log(doublyLinkedList.printList());
doublyLinkedList.insertAtTail(6)
console.log(doublyLinkedList.printList());
doublyLinkedList.insertAtHead(2);
console.log(doublyLinkedList.printList());
doublyLinkedList.insertAfterNode(8, 7);
console.log(doublyLinkedList.printList());
doublyLinkedList.insertAfterNode(5, 4);
console.log(doublyLinkedList.printList());
doublyLinkedList.insertAfterNode(7, 6);
console.log(doublyLinkedList.printList());

doublyLinkedList.reverse();
console.log(doublyLinkedList.printList());

doublyLinkedList.deleteAtHead();
console.log(doublyLinkedList.printList());
doublyLinkedList.deleteAtTail();
console.log(doublyLinkedList.printList());
doublyLinkedList.deleteByKey(5);
console.log(doublyLinkedList.printList());
doublyLinkedList.deleteByKey(6);
console.log(doublyLinkedList.printList());
doublyLinkedList.deleteByKey(3);
console.log(doublyLinkedList.printList());