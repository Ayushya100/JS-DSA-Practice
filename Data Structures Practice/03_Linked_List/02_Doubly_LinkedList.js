class Node {
    constructor() {
        
    }
}

class DoublyLinkedList {
    constructor() {
        
    }
}

DoublyLinkedList.prototype.insertAtHead = function(data) {

}

DoublyLinkedList.prototype.insertAtTail = function(data) {

}

DoublyLinkedList.prototype.insertAfterNode = function(data, key) {

}

DoublyLinkedList.prototype.deleteAtHead = function() {

}

DoublyLinkedList.prototype.deleteAtTail = function() {

}

DoublyLinkedList.prototype.deleteByKey = function(key) {

}

DoublyLinkedList.prototype.searchNode = function(key) {

}

DoublyLinkedList.prototype.printList = function() {

}

DoublyLinkedList.prototype.reverse = function() {

}

// Usage Examples
const doublyLinkedList = new DoublyLinkedList();
console.log(`List Length: ${doublyLinkedList.length()} | ${doublyLinkedList.printList()}`);
doublyLinkedList.insertAtHead(3);
console.log(`List Length: ${doublyLinkedList.length()} | ${doublyLinkedList.printList()}`);
doublyLinkedList.insertAtHead(2);
console.log(`List Length: ${doublyLinkedList.length()} | ${doublyLinkedList.printList()}`);
doublyLinkedList.insertAtTail(4)
console.log(`List Length: ${doublyLinkedList.length()} | ${doublyLinkedList.printList()}`);
doublyLinkedList.insertAtTail(6)
console.log(`List Length: ${doublyLinkedList.length()} | ${doublyLinkedList.printList()}`);
doublyLinkedList.insertAtHead(1);
console.log(`List Length: ${doublyLinkedList.length()} | ${doublyLinkedList.printList()}`);

doublyLinkedList.insertAfterNode(8, 7);
console.log(`List Length: ${doublyLinkedList.length()} | ${doublyLinkedList.printList()}`);
doublyLinkedList.insertAfterNode(5, 4);
console.log(`List Length: ${doublyLinkedList.length()} | ${doublyLinkedList.printList()}`);
doublyLinkedList.insertAfterNode(7, 6);
console.log(`List Length: ${doublyLinkedList.length()} | ${doublyLinkedList.printList()}`);

console.log(`Search Key 4: ${doublyLinkedList.searchNode(4)}`);
console.log(`Search Key 10: ${doublyLinkedList.searchNode(10)}`);
console.log(`Search Key 7: ${doublyLinkedList.searchNode(7)}`);

doublyLinkedList.reverse();
console.log(`List Length: ${doublyLinkedList.length()} | ${doublyLinkedList.printList()}`);

doublyLinkedList.deleteAtHead();
console.log(`List Length: ${doublyLinkedList.length()} | ${doublyLinkedList.printList()}`);
doublyLinkedList.deleteAtTail();
console.log(`List Length: ${doublyLinkedList.length()} | ${doublyLinkedList.printList()}`);

doublyLinkedList.deleteByKey(4);
console.log(`List Length: ${doublyLinkedList.length()} | ${doublyLinkedList.printList()}`);
doublyLinkedList.deleteByKey(6);
console.log(`List Length: ${doublyLinkedList.length()} | ${doublyLinkedList.printList()}`);
doublyLinkedList.deleteByKey(3);
console.log(`List Length: ${doublyLinkedList.length()} | ${doublyLinkedList.printList()}`);
