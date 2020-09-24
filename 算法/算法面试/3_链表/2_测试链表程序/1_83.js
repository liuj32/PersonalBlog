/**
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
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
  var curNode = head;
  while (curNode != null && curNode.next != null) {
      var nextNode = curNode.next;
      if (curNode.val === nextNode.val) {
          curNode.next = nextNode.next;
      } else {
          curNode = nextNode;
      }
  }

  return head;
};


// 输入: 1->1->2
// 输出: 1->2