/**
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

// 中间节点 + 反序 => 比较
var isPalindrome = function(head) {
    if (head === null) {
        return true
    }

    var reverse = (head) => {
        var prev = null, cur = head
        while(cur) {
            var tail = cur.next
            cur.next = prev
            prev = cur
            cur = tail
        }

        return prev
    }

    var slow = head, fast = head
    while(fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    var head2 = reverse(slow.next)
    slow.next = null
    while(head && head2) {
        if (head.val != head2.val) {
            return false
        }
        head = head.next
        head2 = head2.next
    }

    return true
};


// 递归写法
var isPalindrome = function(head) {
    var palindromeCheack = (head) => {
        if (head != null) {
            if (!palindromeCheack(head.next)) {
                return false
            }
            if (head.val != cur.val) {
                return false
            }
            cur = cur.next
        }
        return true
    }

    var cur = head
    return palindromeCheack(head)   
}
