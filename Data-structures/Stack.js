const getLinkedIterator = require("../Utilities/Iterator");
const LinkedListNode = require("./LinkedListNode");

/**
 * @typedef {(number|string)} AcceptedValues
 * @typedef {Object} Stack
 * @property {LinkedListNode} top
 * @property {number} length
 *
 */
class Stack {
  constructor() {
    /**
     * @type {LinkedListNode} top
     */
    this.top = null;

    /**
     *@type {number} length */
    this.length = 0;
  }

  /**
   * @export
   * @param {AcceptedValues} value
   * @returns boolean
   */
  push(value) {
    let newNode = new LinkedListNode(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return true;
  }

  /**
   * @param null
   * @returns {(LinkedListNode.AcceptedValues | null)}
   */
  pop() {
    let returnNode;

    if (!this.isEmpty()) {
      returnNode = this.top;
      this.top = this.top.next;
      this.length--;
      return returnNode.value;
    }

    return this.top?.value;
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
    return getLinkedIterator(this, this.top);
  }
}

module.exports = Stack;
