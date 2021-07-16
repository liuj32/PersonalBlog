/**
 * 快慢指针
 */

var hasCycle = function(head) {
    if (head == null || head.next == null) {
        return false
    }

    var slow = head, fast = head.next
    while(fast != slow) {
        if (fast == null || fast.next == null) {
            return false
        }
        slow = slow.next
        fast = fast.next.next
    }

    return true
};