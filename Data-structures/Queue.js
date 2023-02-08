const getLinkedIterator = require("../Utilities/Iterator");
const LinkedListNode = require("./LinkedListNode");

/**
 *  @typedef {(number|string)} AcceptedValues
 * @typedef {Object} Queue
 * @property {LinkedListNode} front
 * @property {LinkedListNode} rear
 * @property {number} length
 *
 */

class Queue {
  constructor() {
    /** @type {LinkedListNode} front */
    this.front = null;
    /** @type {LinkedListNode} rear */
    this.rear = null;
    /** @type {number} length */
    this.length = 0;
  }

  /**
   * @param {AcceptedValues} value
   * @returns boolean
   */
  enqueue(value) {
    let newNode = new LinkedListNode(value);
    if (!this.length) {
      this.rear = newNode;
      this.front = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
    return true;
  }

  /**
   * @param null
   * @returns {(LinkedListNode.AcceptedValues | null)}
   */
  deque() {
    let returnNode;

    if (!this.isEmpty()) {
      returnNode = this.front;
      this.front = this.front.next;
      this.length--;
      return returnNode.value;
    }
    return this.front?.value;
  }

  /**
   *
   * @returns {boolean}
   */
  isEmpty() {
    return this.length == 0;
  }

  /**
   *
   * @returns {number}
   */
  size() {
    return this.length;
  }

  /**
   * @returns {import('../Utilities/Iterator').Iterator}
   */
  getIterator() {
    return getLinkedIterator(this, this.front);
  }
}

module.exports = Queue;
