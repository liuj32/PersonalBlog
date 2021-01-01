/**
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

// 迭代
var swapPairs = function(head) {
    var dummy = new ListNode()
    dummy.next = head
    var cur = dummy
    while(cur.next && cur.next.next) {
        var conn = cur.next
        var tail = cur.next.next.next
        cur.next = cur.next.next
        cur.next.next = conn
        conn.next = tail
        cur = cur.next.next
    }
 
    return dummy.next
 };

 // 递归
 var swapPairs = function(head) {
    if (head == null || head.next == null) {
        return head
    }
    var next = head.next
    head.next = swapPairs(head.next.next)
    next.next = head
    return next
}; 