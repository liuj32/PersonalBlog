/**
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
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
  if (root == null) return true;

  var leftNum = depth(root.left)
  var rightNum = depth(root.right)
  return (Math.abs(leftNum - rightNum) <= 1)
      && isBalanced(root.left)
      && isBalanced(root.right)
};

function depth (root) {
  if (root == null) return 0;

  var leftNum = 1 + depth(root.left)
  var rightNum = 1 + depth(root.right)

  return Math.max(leftNum, rightNum)
}