/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
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
  var decade = 0;
  var head = new ListNode()
  var curNode = head;

  while(l1 && l2) {
      var sum = l1.val + l2.val + decade;
      if (sum >= 10) {
          decade = 1;
          sum -= 10;
          if (l1.next == null && l2.next == null) {
            l1.next = new ListNode(0);
          }
      } else {
          decade = 0;
      }
      curNode.next = new ListNode(sum)
      curNode = curNode.next;
      l1 = l1.next;
      l2 = l2.next;
  }

  while (l1) {
      var sum = l1.val + decade;
      if (sum >= 10) {
          if (l1.next == null) {
            l1.next = new ListNode(0);
          }
          decade = 1;
          sum -= 10;
      } else {
          decade = 0;
      }

      curNode.next = new ListNode(sum)
      curNode = curNode.next;
      l1 = l1.next;
  }
  while (l2) {
      var sum = l2.val + decade;
      if (sum >= 10) {
          if (l2.next == null) {
            l2.next = new ListNode(0);
          }
          decade = 1;
          sum -= 10;
      } else {
          decade = 0;
      }

      curNode.next = new ListNode(sum)
      curNode = curNode.next;
      l2 = l2.next;
  }    
 return head.next;
};


// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807