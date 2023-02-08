/**
 *
 * @typedef {Object} Iterable
 * @property {boolean} hasNext
 * @property {import("../Data-structures/LinkedListNode").LinkedListNode} next
 *
 * @typedef {Object} Iterator
 * @property {Iterable} Iterator.next()
 *
 * @param {import("../Data-structures/Queue").Queue | import("../Data-structures/Stack").Stack} context
 * @param {import("../Data-structures/LinkedListNode").LinkedListNode} initNode
 * @returns {Iterator}
 */
function getLinkedIterator(context, initNode) {
  let nextNode = initNode;
  let length = context.size();
  let that = context;
  const Iterator = {
    next() {
      if (length != that.size()) {
        nextNode = nextNode?.next;
      }
      length--;
      return {
        hasNext: nextNode?.next !== null && length >= 0,
        next: nextNode,
      };
    },
  };

  return Iterator;
}

module.exports = getLinkedIterator;
