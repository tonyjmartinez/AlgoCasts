// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let cnt = 0;
        let node = this.head;
        while (node) {
            cnt++;
            node = node.next;
        }
        return cnt;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }
        let node = this.head;
        let last;
        while(node) {
            last = node;
            node = node.next;
        }
        return last;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        if (this.head.next === null) {
            this.head = null;
            return;
        }
        let prev = this.head;
        let node = this.head.next;
        while(node.next){
            prev = node;
            node = node.next;
        }
        prev.next = null;
    }

    insertLast(data) {
        const last = this.getLast();
        if (last){
            last.next = new Node(data);
        }
        else {
            this.head = new Node(data);
        }
    }

    getAt(idx) {
        let node = this.head;
        let ctr = 0;
        while (node) {
            if (ctr === idx) {
                return node;
            }
            ctr++;
            node = node.next;
        }
        return null;
    }

    removeAt(idx) {
        if (!this.head){ return;}
        
        if (idx === 0) {
            this.head = this.head.next;
            return;
        }
        const previous = this.getAt(idx - 1);
        if (!previous || !previous.next) {
            return;
        }

        previous.next = previous.next.next;
    }

    insertAt(data, idx) {
        if (idx === 0) {
            if (!this.head){
                this.head = new Node(data);
                return;
            }
            this.head = new Node(data, this.head);           
            return;
        }

        let node = this.getAt(idx -1);
        
        let newNode = new Node(data, node.next);
        node.next = newNode;
        return;
    }
}

module.exports = { Node, LinkedList };
