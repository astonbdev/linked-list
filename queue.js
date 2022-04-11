/** Node: node for a queue. */

const LinkedList = require("./linked-list");

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;

  _linkedList = null;

  constructor() {
    this._linkedList = new LinkedList();
    this.first = this._linkedList.head;
    this.last = this._linkedList.tail;
    this.size = this._linkedList.length;
  }

  updateQueue() {
    this.first = this._linkedList.head;
    this.last = this._linkedList.tail;
    this.size = this._linkedList.length;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this._linkedList.push(val);
    this.updateQueue();
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {

  }
}

module.exports = Queue;
