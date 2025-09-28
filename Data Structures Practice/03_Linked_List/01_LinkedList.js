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
