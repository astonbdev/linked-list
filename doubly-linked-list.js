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

    /** unshift(val): add new value to start of list. */

    unshift(val) {
        const newNode = new Node(val);

        //empty case
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            this.length += 1;
            return;
        }

        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;
    }

    /** pop(): return & remove last item. */

    pop() {
        // empty list
        if (this.head === null) {
            return null;
        }

        let current = this.head;

        // Only one item in the list
        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
            this.length -= 1;
            return current.val;
        }

        const poppedOff = this.tail.val;

        this.tail.prev.next = null;
        this.tail = this.tail.prev;


        this.length -= 1;
        return poppedOff;
    }



}

module.exports = DoublyLinkedList;
