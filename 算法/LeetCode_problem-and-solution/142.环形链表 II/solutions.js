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
var detectCycle = function(head) {
    if (head == null || head.next == null) {
        return null
    }
    var fast = head, slow = head
    var hasCycle = false
    while(fast != null && fast.next != null) {
        fast = fast.next.next
        slow = slow.next
        if (slow == fast) {
            hasCycle = true
            break
        }
    }
    if (hasCycle) {
        var cur = head
        while(cur != slow) {
            cur = cur.next
            slow = slow.next
        }
        return cur
    }
    return null
};