// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        const child = new Node(data);
        this.children.push(child);
    }

    remove(data) {
        this.children = this.children.filter(child => {
            return child.data !== data;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        const nodeArr = [this.root];
        while(nodeArr.length > 0) {
            let firstNode = nodeArr.shift();
            nodeArr.push(...firstNode.children);
            fn(firstNode);
        }
    }

    traverseDF(fn) {
        const nodeArr = [this.root];
        while(nodeArr.length > 0) {
            let firstNode = nodeArr.shift();
            nodeArr.unshift(...firstNode.children);
            fn(firstNode);
        }
    }
}

module.exports = { Tree, Node };
