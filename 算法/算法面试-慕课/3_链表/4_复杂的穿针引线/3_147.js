/**
 * 插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。
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
var insertionSortList = function(head) {
  var dummy = new ListNode(0);
  var prev = dummy;
  var node = head, cur;

  while(node != null) {
      cur = node;
      node = node.next;

      if (cur.val < prev.val) prev = dummy;

      while(prev.next !=null && prev.next.val < cur.val) prev = prev.next;

      cur.next = prev.next;
      prev.next = cur;
  }
  
  return dummy.next;
}


// 输入: 4->2->1->3
// 输出: 1->2->3->4