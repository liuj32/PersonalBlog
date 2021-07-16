/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode()
    dummy.next = head
    var prev = dummy, cur = dummy
    while(n >= 0) {
        cur = cur.next
        n--
    }
     while(cur) {
         cur = cur.next
         prev = prev.next
     }
     prev.next = prev.next.next
     return dummy.next
  };