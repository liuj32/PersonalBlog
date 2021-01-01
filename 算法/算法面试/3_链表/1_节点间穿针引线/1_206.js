/**
 * 反转一个单链表。
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
var reverseList = function(head) {
  var pre = null, cur = head, next;
  while(cur) {
      next = cur.next;

      cur.next = pre;
      pre = cur;
      cur = next;
  }

  return pre;
};

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL