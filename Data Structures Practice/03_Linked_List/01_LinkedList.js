class Node {
    constructor() {

    }
}

class LinkedList {
    constructor() {

    }
}

LinkedList.prototype.insertAtBeginning = function(data) {

}

LinkedList.prototype.insertAtEnd = function(data) {

}

LinkedList.prototype.insertAfterNode = function(data, key) {

}

LinkedList.prototype.search = function(key) {

}

LinkedList.prototype.deleteAtBeginning = function() {

}

LinkedList.prototype.deleteAtEnd = function() {

}

LinkedList.prototype.deleteByKey = function(key) {

}

LinkedList.prototype.printList = function() {

}

LinkedList.prototype.length = function() {

}

LinkedList.prototype.reverse = function() {

}

// Usage Example
const linkedList = new LinkedList();
console.log(`List Length: ${linkedList.length()} - Linked List: ${linkedList.printList()}`);
linkedList.insertAtEnd(3);
console.log(`List Length: ${linkedList.length()} - Linked List: ${linkedList.printList()}`);
linkedList.insertAtBeginning(2);
console.log(`List Length: ${linkedList.length()} - Linked List: ${linkedList.printList()}`);
linkedList.insertAtBeginning(1);
console.log(`List Length: ${linkedList.length()} - Linked List: ${linkedList.printList()}`);

linkedList.insertAtEnd(4);
console.log(`List Length: ${linkedList.length()} - Linked List: ${linkedList.printList()}`);
linkedList.insertAtEnd(6);
console.log(`List Length: ${linkedList.length()} - Linked List: ${linkedList.printList()}`);

linkedList.insertAfterNode(8, 7);
console.log(`List Length: ${linkedList.length()} - Linked List: ${linkedList.printList()}`);
linkedList.insertAfterNode(5, 4);
console.log(`List Length: ${linkedList.length()} - Linked List: ${linkedList.printList()}`);
linkedList.insertAfterNode(7, 6);
console.log(`List Length: ${linkedList.length()} - Linked List: ${linkedList.printList()}`);

console.log(`Search Result for Element 6: ${linkedList.search(6)}`);
console.log(`Search Result for Element 2: ${linkedList.search(2)}`);

linkedList.reverse();
console.log(`List Length: ${linkedList.length()} - Reversed Linked List: ${linkedList.printList()}`);

console.log(`Search Result for Element 6: ${linkedList.search(6)}`);
console.log(`Search Result for Element 2: ${linkedList.search(2)}`);

linkedList.deleteAtBeginning();
console.log(`List Length: ${linkedList.length()} - Linked List: ${linkedList.printList()}`);
linkedList.deleteAtBeginning();
console.log(`List Length: ${linkedList.length()} - Linked List: ${linkedList.printList()}`);
linkedList.deleteAtEnd();
console.log(`List Length: ${linkedList.length()} - Linked List: ${linkedList.printList()}`);
linkedList.deleteAtEnd();
console.log(`List Length: ${linkedList.length()} - Linked List: ${linkedList.printList()}`);

linkedList.deleteByKey(5);
console.log(`List Length: ${linkedList.length()} - Linked List: ${linkedList.printList()}`);
linkedList.deleteByKey(8);
console.log(`List Length: ${linkedList.length()} - Linked List: ${linkedList.printList()}`);

console.log(`Search Result for Element 2: ${linkedList.search(2)}`);
