/**
 *  @typedef {(number|string)} AcceptedValues
 *  @exports @typedef {Object} LinkedListNode
 *  @property {AcceptedValues} value
 * @property {LinkedListNode} next
 * @property {LinkedListNode} prev
 *
 */
class LinkedListNode {
  /**
   *
   *
   * @param {AcceptedValues} value
   * @constructor {LinkedListNode}
   */
  constructor(value) {
    /**
     * @type {AcceptedValues} value
     */
    this.value = value;
    /**
     * @type {LinkedListNode|null} next
     */
    this.next = null;
    /**
     * @type {LinkedListNode|null} prev
     */
    this.prev = null;
  }
}

module.exports = LinkedListNode;
