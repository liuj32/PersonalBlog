/**
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
// O(N)+O(N)
var reorderList = function(head) {
    var stack = []
    while(head) {
        stack.push(head)
        head = head.next
    }
    var dummy = new ListNode()
    var cur = dummy
    var i = 1
    while(stack.length) {
        var node = null
        if (i % 2 === 1) {
            node = stack.shift()
        } else {
            node = stack.pop()
        }
        i++
        cur.next = node
        cur = cur.next
    }
    cur.next = null
    return dummy.next
}


// 找中间节点 -> 反序后半部分 -> 前半部分和后半部分结合
var reorderList = function(head) {
    var reverse = (head) => {
        var prev = null, cur = head
        while(cur) {
            tail = cur.next
            cur.next = prev
            prev = cur
            cur = tail
        }
         return prev
    }
    if (head == null) {
        return null
    }
    var slow = head, fast = head
    while(fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    var head2 = slow.next
    head2 = reverse(slow.next)
    slow.next = null
    // 插入
    var dummy = new ListNode()
    var cur = dummy
    while(head || head2) {
         if (head) {
             cur.next = head
             head = head.next
             cur = cur.next
         }
         if (head2) {
             cur.next = head2
             cur = cur.next
             head2 = head2.next
         }
    }
 
    return dummy.next
 }