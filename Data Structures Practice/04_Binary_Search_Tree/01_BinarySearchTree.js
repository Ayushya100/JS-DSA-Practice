class BSTNode {
    constructor(key) {

    }
}

class BinarySearchTree {
    constructor() {

    }
}

BinarySearchTree.prototype.insert = function(key) {

}

BinarySearchTree.prototype.delete = function(key) {

}

BinarySearchTree.prototype.find = function(key) {

}

BinarySearchTree.prototype.inOrderTraversal = function() {

}

BinarySearchTree.prototype.preOrderTraversal = function() {

}

BinarySearchTree.prototype.postOrderTraversal = function() {

}

BinarySearchTree.prototype.traversal = function() {

}

BinarySearchTree.prototype.inOrderTraversalIte = function() {

}

BinarySearchTree.prototype.preOrderTraversalIte = function() {

}

BinarySearchTree.prototype.postOrderTraversalIte = function() {

}

// Usage Examples
const binarySearchTree = new BinarySearchTree();

console.log(binarySearchTree.traversal());
binarySearchTree.insert(5);
console.log(binarySearchTree.traversal());
binarySearchTree.insert(3);
console.log(binarySearchTree.traversal());
binarySearchTree.insert(8);
console.log(binarySearchTree.traversal());
binarySearchTree.insert(9);
console.log(binarySearchTree.traversal());
binarySearchTree.insert(6);
console.log(binarySearchTree.traversal());
binarySearchTree.insert(7);
console.log(binarySearchTree.traversal());
binarySearchTree.insert(4);
console.log(binarySearchTree.traversal());
binarySearchTree.insert(2);
console.log(binarySearchTree.traversal());

console.log(binarySearchTree.inOrderTraversalIte());
console.log(binarySearchTree.preOrderTraversalIte());
console.log(binarySearchTree.postOrderTraversalIte());

console.log(binarySearchTree.find(12));
console.log(binarySearchTree.find(7));

binarySearchTree.delete(6);
console.log(binarySearchTree.traversal());
binarySearchTree.delete(5);
console.log(binarySearchTree.traversal());
