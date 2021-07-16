/**
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
    if(!l1) {
        return l2
    }
    if (!l2) {
        return l1
    }

    var head = new ListNode()
    var cur = head
    var mod = 0
    while(l1 && l2) {
        var value =  (l1.val + l2.val + mod) % 10
        mod = Math.floor((l1.val + l2.val + mod) / 10)
        var node = new ListNode(value)
        cur.next = node
        cur = cur.next
        l1 = l1.next
        l2 = l2.next
    }
    while(l1) {
        var value =  (l1.val + mod) % 10
        mod = Math.floor((l1.val + mod) / 10)
        var node = new ListNode(value)
        cur.next = node
        cur = cur.next
        l1 = l1.next
    }
    while(l2 ){
        var value =  (l2.val + mod) % 10
        mod = Math.floor((l2.val + mod) / 10)
        var node = new ListNode(value)
        cur.next = node
        cur = cur.next
        l2 = l2.next
    }

    if (mod) {
        cur.next = new  ListNode(mod)
    }
    return head.next;
};