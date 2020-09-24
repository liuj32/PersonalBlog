/**
 * 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。
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
  if (head == null || head.next == null) {
    return head;
  }

  var o = head;
  var p = head.next, e = head.next;
  while(o.next != null && e.next !=null) {
    o.next = e.next;
    o = e.next;
    e.next = o.next;
    e = e.next;
  }

  o.next = p;

  return head;
}


// 输入: 1->2->3->4->5->NULL
// 输出: 1->3->5->2->4->NULL