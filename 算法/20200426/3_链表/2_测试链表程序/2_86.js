/**
 * 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。你应当保留两个分区中每个节点的初始相对位置。
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
  if (head == null) {
      return null;
  }

  var left = new ListNode(), right = new ListNode();
  var conn  = left, tail = right;
  var curNode = head;
  while(curNode != null) {
      if (curNode.val < x) {
          left.next = curNode;
          left = left.next;
      } else {
          right.next = curNode;
          right = right.next;
      }

      curNode = curNode.next;
  }
  left.next = null;
  right.next = null;
  if (conn.next) {
      left.next = tail.next;
      return conn.next;
  } else {
     return tail.next;
  }
};


// 输入: head = 1->4->3->2->5->2, x = 3
// 输出: 1->2->2->4->3->5