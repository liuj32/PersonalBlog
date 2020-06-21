/**
 * 计算给定二叉树的所有左叶子之和。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if(root == null) {
      return 0;
  }
  var pre = 0;
  if(root.left && root.left.left == null && root.left.right == null) {
      pre +=  root.left.val
  }
  
 var left = sumOfLeftLeaves(root.left)
 var right = sumOfLeftLeaves(root.right)
  return left + right + pre;
};