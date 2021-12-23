/**
 * 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  if (!l1) {
      return l2;
  }
  if (!l2) {
      return l1;
  }    
  var stack1 = [], stack2 = [];
  while(l1) {
      stack1.push(l1.val)
      l1 = l1.next;
  }
  while(l2) {
      stack2.push(l2.val)
      l2 = l2.next;
  }    
  var decade = 0;
  var head = null;
  while (stack1.length || stack2.length || decade > 0) {
    var sum = decade;
    sum += stack1.length === 0 ? 0 : stack1.pop();
    sum += stack2.length === 0 ? 0 : stack2.pop();
    var node = new ListNode(sum % 10);
    node.next = head;
    head = node;
    decade = Math.floor(sum / 10)
  }
  return head;
};


// 输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 8 -> 0 -> 7