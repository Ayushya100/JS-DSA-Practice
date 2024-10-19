class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
}

Tree.prototype.breadthFirstTraversal = function() {
    if (!this.root) {
        return 'Tree is Empty';
    }

    const values = [];
    const queue = [this.root];

    while (queue.length > 0) {
        const node = queue.shift();
        values.push(node.key);

        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }

    return values;
}