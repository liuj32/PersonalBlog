
/**
 * 并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if(lists.length == 0){
      return  null
  }
  var res = null;
  for (var i=0,ilen = lists.length; i<ilen; i++) {
     res = mergeKList(res, lists[i])
  }
  return res;
};

function mergeKList(l1, l2){
 var  dummy = new ListNode(0);
 var prev = dummy
 while(l1 && l2){
     if(l1.val <l2.val){
         prev.next = l1;
         l1 = l1.next;
     } else {
         prev.next = l2;
         l2 = l2.next;
     }
     prev = prev.next;
 }
 if(l1){
     prev.next = l1;
 }
 if(l2){
     prev.next = l2;
 }
 return dummy.next;
}


// 输入:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 输出: 1->1->2->3->4->4->5->6