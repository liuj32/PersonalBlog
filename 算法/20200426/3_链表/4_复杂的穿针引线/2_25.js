/**
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (head == null) {
      return null;
  }


  var dummyHead = new ListNode();
  var conn = dummyHead;
  var prev = null, curNode = head, next;
  var index = 0;
  var len = 0;
  while (curNode) {
      len++;
      curNode = curNode.next;
  }

  curNode = head;
  while (curNode) {

    if (index > 0 && index % k === 0) {
        console.log(curNode)
          var num = k;
          conn.next = prev;
          while(num-- > 0) {
              conn = conn.next;
          }
          prev = null;            
          if (index + k > len) break;
    }      
      next = curNode.next;

      curNode.next = prev;
      prev = curNode;
      curNode = next;

      index++;

  }

  if (curNode != null) {
      conn.next = curNode;
  }
  if (prev != null) {
      conn.next = prev;
  }

  return dummyHead.next;
};



// 示例：

// 给你这个链表：1->2->3->4->5

// 当 k = 2 时，应当返回: 2->1->4->3->5

// 当 k = 3 时，应当返回: 3->2->1->4->5
