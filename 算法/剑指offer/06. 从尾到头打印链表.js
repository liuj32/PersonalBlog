/**
 * 从尾到头打印链表
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  if (head == null) return []

  var ans = []
  var cur = head
  while(cur) {
      ans.unshift(cur.val)
      cur = cur.next
  }
  return ans
};