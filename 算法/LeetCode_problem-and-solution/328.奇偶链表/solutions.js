/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var oddEvenList = function(head) {
    if (head == null) {
      return null
    }
    var oddTail = head
    var evenHead = head.next, evenTail = head.next
    while(oddTail.next != null && evenTail.next != null) {
      oddTail.next = evenTail.next
      oddTail = oddTail.next
      evenTail.next = oddTail.next
      evenTail = evenTail.next
    }
    oddTail.next = evenHead
    return head
  }