/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
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

    let current = this.head;

    //traverse
    while (current.next !== null) {
      current = current.next
    }

    current.next = newNode;
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

    while (current.next !== this.tail) {
      current = current.next;  
    }
    const poppedOff = current.next.val;
    current.next = null;
    this.tail = current;
    this.length -= 1;
    return poppedOff;
  }

  /** shift(): return & remove first item. */

  shift() {
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

    this.head = this.head.next;
    this.length -= 1;
    return current.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    // empty list
    if (this.head === null) {
      return null;
    }

    // If idx is greater than length of list
    if (idx > this.length - 1) {
      return null;
    }

    let targetNode = this.head;

    for (let i = 0; i < idx; i++) {
      targetNode = targetNode.next;
    }
    return targetNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    // empty list
    if (this.head === null) {
      return null;
    }

    // If idx is greater than length of list
    if (idx > this.length - 1) {
      return null;
    }

    let targetNode = this.head;

    for (let i = 0; i < idx; i++) {
      targetNode = targetNode.next;
    }
    targetNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);

    // empty list
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
      return;
    }

    // If idx is greater than length of list
    if (idx > this.length) {
      return null;
    }

    let targetNode = this.head;

    for (let i = 0; i < idx - 1; i++) {
      targetNode = targetNode.next;
    }

    if (targetNode === this.tail) {
      this.tail = newNode;
    }

    newNode.next = targetNode.next;
    targetNode.next = newNode;
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    
  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
