/**
 * 给定一个二叉树，它的每个结点都存放着一个整数值。
找出路径和等于给定数值的路径总数。
路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  if (root == null) {
      return 0;
  }

  var topNum = help(root, sum);
  var leftNum  = pathSum(root.left, sum)
  var rightNum  = pathSum(root.right, sum)

  return topNum + leftNum + rightNum;
}


var help = function(root, sum) {
  if (root == null) {
      return 0;
  }

  var res = 0;
  if (root.val === sum) {
      res++;
  }

  res += help(root.left, sum - root.val)
  
  res += help(root.right, sum - root.val)

  return res;
};