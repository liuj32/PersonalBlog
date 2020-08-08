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
var reverseList = function(head) {
    var prev, cur, next;
    prev = null, cur = head
    while(cur) {
        next = cur.next;
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
};