/**
 * 109. 有序链表转换二叉搜索树
 * 
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if (head == null) return null

  var arr = []
  while(head) {
      arr.push(head.val)
      head = head.next
  }

  var crateTree = (l, r) => {
      if (l > r) {
          return null
      }

      var mid = l + Math.floor((r - l) / 2)
      var root = new TreeNode(arr[mid])
      root.left = crateTree(l, mid-1)
      root.right = crateTree(mid+1, r)

      return root
  }
  
  var l = 0, r = arr.length-1
  var root = crateTree(l ,r)
  return root
};

//解法二：快慢指针

var sortedListToBST = function(head) {
  if (head == null) return null
  if (head.next == null) {
      return new TreeNode(head.val)
  }

  var prev, slow, fast
  slow = head
  fast = head
  prev = head
  while(fast && fast.next != null) {
      fast = fast.next.next
      slow = slow.next
  }
  while(prev.next != slow) {
      prev = prev.next
  }
  var headRight = slow.next
  prev.next = null
  var root = new TreeNode(slow.val)
  root.left = sortedListToBST(head)
  root.right = sortedListToBST(headRight)

  return root
};