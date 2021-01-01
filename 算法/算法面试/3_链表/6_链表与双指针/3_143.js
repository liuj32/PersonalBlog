/**
 * 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */


var reorderList = function(head) {
  if (head == null) {
      return null;
  }
  var len = 0;
  var cur = head;
  while(cur) {
      len++;
      cur = cur.next;
  }
  var isOdd = len % 2 === 1;
  var oddNum = null;
  cur = head;
  var leftHead = head, rightHead;
  var mid = Math.ceil(len / 2);
  while(mid > 1) {
      cur = cur.next;
      mid--;
  }
  // 奇数
  if (isOdd) {
      oddNum = cur;
  }
  rightHead = cur.next;
  cur.next = null;
  rightHead = reverse(rightHead);
  var dummy = new ListNode();
  cur = dummy;
  var pCur = head, qCur = rightHead;

  console.log(pCur)
  console.log(qCur)
  while (qCur != null) {
      cur.next = pCur;
      pCur = pCur.next;
      cur = cur.next;
      cur.next = qCur;
      qCur = qCur.next;
      cur = cur.next;

  }
  if (isOdd) {
      oddNum.next = null;
  }
 
  cur.next = oddNum;
  return dummy.next;
};

function reverse(head) {
  var prev = null;
  var cur = head;
  while(cur != null) {
      next = cur.next;

      cur.next = prev;
      prev = cur;
      cur = next;
  }

  return prev;
}


// 给定链表 1->2->3->4, 重新排列为 1->4->2->3.