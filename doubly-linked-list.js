/** Node: node for a singly linked list. */

class Node {
    val = null;
    next = null;
    prev = null;

    constructor(val) {
        this.val = val;
    }
}

/** LinkedList: chained together nodes. */
class DoublyLinkedList {
    head = null;
    tail = null;
    length = 0;

    constructor(vals = []) {
        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */
    push(val) {
        const newNode = new Node(val);
        // empty list case
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            this.length += 1;
            return;
        }

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length += 1;
    }

    
}

module.exports = DoublyLinkedList;
