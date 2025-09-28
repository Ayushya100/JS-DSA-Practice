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
doublyLinkedList.deleteByKey(4);
console.log(doublyLinkedList.printList());
doublyLinkedList.deleteByKey(6);
console.log(doublyLinkedList.printList());
doublyLinkedList.deleteByKey(3);
console.log(doublyLinkedList.printList());
