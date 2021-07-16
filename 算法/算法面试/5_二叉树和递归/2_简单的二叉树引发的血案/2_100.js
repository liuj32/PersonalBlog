/**
 * 给定两个二叉树，编写一个函数来检验它们是否相同。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

  if (p == null && q == null) {
      return true;
  } else  if (p && q) {
      if(p.val !== q.val) return false;
  } else {
      return false;
  }

 var isSameLeft = isSameTree(p.left, q.left)
 if (!isSameLeft) return false;

 var isSameRight = isSameTree(p.right, q.right)
 if (!isSameRight) return false

 return true;
};