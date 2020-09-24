/**
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var rotateRight = function(head, k) {
  var len = 0;
  var cur = head;
  while (cur) {
      len++;
      cur = cur.next;
  }

  k = k % len;
  if (head == null || k == 0) {
      return head;
  }    
  var dummy = new ListNode();
  dummy.next = head;
  var p = dummy, q = dummy;
  var conn = null;
  while(k >=0) {
      q = q.next;
      k--;
  }
  while(q != null) {
    if (q.next == null) {
        conn = q;
    }      
      p = p.next;
      q = q.next;
  }

  var pre = p.next;
  p.next = null
  conn.next = dummy.next;
  dummy.next = pre;
  
  return dummy.next;
};



// 输入: 1->2->3->4->5->NULL, k = 2
// 输出: 4->5->1->2->3->NULL
// 解释:
// 向右旋转 1 步: 5->1->2->3->4->NULL
// 向右旋转 2 步: 4->5->1->2->3->NULL
