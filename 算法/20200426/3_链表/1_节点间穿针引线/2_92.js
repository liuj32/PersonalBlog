/**
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  
  if (head == null) {
      return null;
  }

  var cur = head, prev = null;
  while (m > 1) {
      prev = cur;
      cur = cur.next;
      m--;
      n--;
  }
  var con = prev, tail = cur;
  var next;
  while(n > 0) {

      next = cur.next;

      cur.next = prev;
      prev = cur;
      cur = next;
      n--;
  }

  if (con == null) {
      head = prev;
  } else {
      con.next = prev;
  }

  tail.next = cur;
  return head;


};


// 输入: 1->2->3->4->5->NULL, m = 2, n = 4
// 输出: 1->4->3->2->5->NULL