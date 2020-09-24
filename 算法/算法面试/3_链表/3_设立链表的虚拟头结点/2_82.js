/**
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
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
var deleteDuplicates = function(head) {
  if (head == null) {
      return null;
  }

  var dummyHead = new ListNode();
  dummyHead.next = head;
  var curNode = dummyHead;
  var delValue = '';
  while (curNode.next != null && curNode.next.next != null) {
      if (curNode.next.val === curNode.next.next.val) {
          delValue = curNode.next.val;
          curNode.next = curNode.next.next.next;
      } else if (curNode.next.val === delValue){
          curNode.next = curNode.next.next;
      } else {
          curNode = curNode.next;
      }
  }
  if (curNode.next && curNode.next.val == delValue) {
      curNode.next = curNode.next.next;
  }

  return dummyHead.next;
};


// 输入: 1->2->3->3->4->4->5
// 输出: 1->2->5