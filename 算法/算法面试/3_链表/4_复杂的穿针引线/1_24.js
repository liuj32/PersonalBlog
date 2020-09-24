/**
 * 两两交换链表中的节点
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
var swapPairs = function(head) {
  if (head == null) {
      return null;
  }
  var dummyHead = new ListNode();
  dummyHead.next = head;
  var curNode = dummyHead;
  while(curNode.next != null && curNode.next.next) {
      var tail = curNode.next.next.next;
      var conn = curNode.next;
      curNode.next = curNode.next.next;
      curNode.next.next = conn;
      conn.next = tail;
      curNode = curNode.next.next;
  }

  return dummyHead.next;
};


// 给定 1->2->3->4, 你应该返回 2->1->4->3.