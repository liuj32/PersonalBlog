/**
 * 请判断一个链表是否为回文链表。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head ==  null) {
      return null;
  }
  var len = 0;
  var cur = head;
  while (cur != null) {
      len++;
      cur = cur.next;
  }
  var midIdx = Math.ceil(len / 2);
  cur = head;
  while (midIdx > 1) {
      cur = cur.next;
      midIdx--;
  }
  var rightHead = cur.next;
  rightHead = reverse(rightHead);
  cur = head;
  while (rightHead != null) {
      if (cur.val !== rightHead.val) {
          return false;
      }
      cur = cur.next;
      rightHead = rightHead.next;
  }

  return true;
};

function reverse(head) {
  var prev = null, cur = head, next;
  while(cur != null) {
      next = cur.next;

      cur.next = prev;
      prev = cur;
      cur = next;
  }
  return prev;
}


// 示例 1:

// 输入: 1->2
// 输出: false
// 示例 2:

// 输入: 1->2->2->1
// 输出: true