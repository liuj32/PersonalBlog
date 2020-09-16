/**
 * 删除链表中等于给定值 val 的所有节点。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head == null) {
        return head;
    }
    var dummyhead = new ListNode();
    dummyhead.next = head;
    var curNode = dummyhead;
    while(curNode.next != null) {
        if (curNode.next.val === val) {
            var delNode = curNode.next;
            curNode.next = delNode.next;
        } else {
            curNode = curNode.next;
        }
    }
    return dummyhead.next;
};

// 输入: 1->2->6->3->4->5->6, val = 6
// 输出: 1->2->3->4->5