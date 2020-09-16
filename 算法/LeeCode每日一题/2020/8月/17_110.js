/**
 * 110. 平衡二叉树
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (root == null) {
      return true
  }
  var leftDepth = depth(root.left)
  var rightDepth = depth(root.right)
  return Math.abs(leftDepth - rightDepth) <=1 &&
          isBalanced(root.left) &&
          isBalanced(root.right)

};

function depth(root) {
  if (root == null) return 0
  
  return  1 + Math.max(depth(root.left), depth(root.right))
}