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

Tree.prototype.recursiveDepthFirstTraversal = function() {
    if (!this.root) {
        return 'Tree is Empty';
    }

    function recursiveDFT(node) {
        if (!node) {
            return;
        }

        const leftValues = recursiveDFT(node.left);
        const rightValues = recursiveDFT(node.right);

        return [node.key, ...leftValues, ...rightValues];
    }

    return recursiveDFT(this.root);
}

Tree.prototype.depthFirstTraversal = function() {
    if (!this.root) {
        return 'Tree is Empty';
    }

    const values = [];
    const stack = [this.root];

    while (stack.length > 0) {
        const node = stack.pop();
        values.push(node.key);

        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }

    return values;
}