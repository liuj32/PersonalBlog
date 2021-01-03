/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var head1 = new ListNode() // 小于x
    var head2 = new ListNode() // 大于等于x
    var curHead1 = head1
    var curHead2 = head2
    var cur = head
    while(cur) {
      if (cur.val < x) {
        curHead1.next = cur
        curHead1 = curHead1.next
      } else {
        curHead2.next = cur
        curHead2 = curHead2.next
      }
      cur = cur.next
    }
    curHead1.next = null
    curHead2.next = null
    curHead1.next = head2.next
    return head1.next
  };