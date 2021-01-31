/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) {
    return root
  }
  var mostLeft = root
  while(mostLeft.left) {
    var levelHead = mostLeft
    while(levelHead) {
      levelHead.left.next = levelHead.right
      if (levelHead.next) {
        levelHead.right.next = levelHead.next.left
      }
      levelHead = levelHead.next
    }

    mostLeft = mostLeft.left
  }
  return root
};