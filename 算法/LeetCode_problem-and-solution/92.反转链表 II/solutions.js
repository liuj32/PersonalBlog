/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    var cur = head
    var dummyHead = new ListNode()
    dummyHead.next = head
    var prev = dummyHead
    while(left > 1) {
      prev = prev.next
      left--
      right--
    }
    var cur = prev.next
    while(right > 1) {
      var next = cur.next
      cur.next = next.next
      next.next = prev.next
      prev.next = next
      right--
    }
    return dummyHead.next
  };