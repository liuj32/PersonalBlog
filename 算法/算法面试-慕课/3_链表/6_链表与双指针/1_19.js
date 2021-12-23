/**
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
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
var removeNthFromEnd1 = function(head, n) {
  var len = 0;
  var cur = head;
  var dummy = new ListNode();
  dummy.next = head;
  while(cur) {
      len++;
      cur = cur.next;
  }
  var deleteIndex = len - n;
  var prev = dummy;
  while(deleteIndex > 0) {   
      prev = prev.next;
      deleteIndex--;
  }

  prev.next = prev.next.next;
  return dummy.next;
};

var removeNthFromEnd2 = function(head, n) {
  var dummy = new ListNode()
  dummy.next = head;
  var p = dummy, q = dummy;
  while(n-- >= 0) {
      q = q.next;
  }

  while(q != null) {
      p = p.next;
      q = q.next;
  }

  p.next = p.next.next;
  return dummy.next;
};



// 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
