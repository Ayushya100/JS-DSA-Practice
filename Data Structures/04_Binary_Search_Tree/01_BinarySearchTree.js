class BSTNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
}

BinarySearchTree.prototype.insert = function(key) {
    const newNode = new BSTNode(key);

    // Recursive Functions
    function insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (!node.left) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }

    if (!this.root) {
        this.root = newNode;
    } else {
        insertNode(this.root, newNode);
    }
}

BinarySearchTree.prototype.delete = function(key) {
    function findMinNode(node) {
        while (node.left) {
            node = node.left;
        }

        return node;
    }

    function deleteNode(node, key) {
        if (!node) {
            return null;
        }

        if (key < node.key) {
            node.left = deleteNode(node.left, key);
        } else if (key > node.key) {
            node.right = deleteNode(node.right, key);
        } else {
            if (!node.left && !node.right) {
                return null;
            } else if (!node.left) {
                return node.right;
            } else if (!node.right) {
                return node.left;
            } else {
                let tempNode = findMinNode(node.right); // Using In-Order Successor
                node.key = tempNode.key;
                node.right = deleteNode(node.right, tempNode.key);
            }
        }

        return node;
    }

    this.root = deleteNode(this.root, key);
    // The root will be changed due to the recurssion calls as it changes the point of reference
}

BinarySearchTree.prototype.find = function(key) {
    if (!this.root) {
        console.log('Binary Search Tree is Empty');
        return;
    }

    function findNode(node, key) {
        if (node.key === key) {
            return true;
        } else if (!node.left && !node.right) {
            return false;
        }

        if (key < node.key) {
            return findNode(node.left, key);
        } else {
            return findNode(node.right, key);
        }
    }

    return findNode(this.root, key); 
}

BinarySearchTree.prototype.inOrderTraversal = function() {
    function inOrder(node, result) {
        if (node) {
            inOrder(node.left, result);
            result.push(node.key);
            inOrder(node.right, result);
        }
    }

    const result = [];
    inOrder(this.root, result);
    return result;
}

BinarySearchTree.prototype.preOrderTraversal = function() {
    function preOrder(node, result) {
        if (node) {
            result.push(node.key);
            preOrder(node.left, result);
            preOrder(node.right, result);
        }
    }

    const result = [];
    preOrder(this.root, result);
    return result;
}

BinarySearchTree.prototype.postOrderTraversal = function() {
    function postOrder(node, result) {
        if (node) {
            postOrder(node.left, result);
            postOrder(node.right, result);
            result.push(node.key);
        }
    }

    const result = [];
    postOrder(this.root, result);
    return result;
}

BinarySearchTree.prototype.traversal = function() {
    if (!this.root) {
        return 'Binary Search Tree is Empty';
    }

    let inOrderResult = this.inOrderTraversal();
    let preOrderResult = this.preOrderTraversal();
    let postOrderResult = this.postOrderTraversal();

    if (inOrderResult.length > 1) {
        inOrderResult = inOrderResult.join(' -- ');
        preOrderResult = preOrderResult.join(' -- ');
        postOrderResult = postOrderResult.join(' -- ');
    } else {
        inOrderResult = inOrderResult.join('');
        preOrderResult = preOrderResult.join('');
        postOrderResult = postOrderResult.join('');
    }

    return `In-Order Traversal : ${inOrderResult} || Pre-Order Traversal : ${preOrderResult} || Post-Order Traversal : ${postOrderResult}`;
}

BinarySearchTree.prototype.inOrderTraversalIte = function() {
    const result = [];
    const stack = [];
    let currentNode = this.root;

    while (currentNode || stack.length > 0) {
        while (currentNode) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }

        currentNode = stack.pop();
        result.push(currentNode.key);

        currentNode = currentNode.right;
    }

    return result;
}

BinarySearchTree.prototype.preOrderTraversalIte = function() {
    const result = [];
    const stack = [this.root];

    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.key);

        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }

    return result;
}

BinarySearchTree.prototype.postOrderTraversalIte = function() {
    const result = [];
    const stack = [this.root];

    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.key);

        if (node.left) {
            stack.push(node.left);
        }
        if (node.right) {
            stack.push(node.right);
        }
    }

    result.reverse();
    return result;
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
