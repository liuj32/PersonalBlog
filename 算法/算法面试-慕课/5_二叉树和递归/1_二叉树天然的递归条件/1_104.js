/**
 * 给定一个二叉树，找出其最大深度。
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


var maxDepth = function(root) {
  if (root == null) {
      return 0;
  }
  var maxLeftDepth = maxDepth(root.left)
  var maxRightDepth =  maxDepth(root.right)

  return Math.max(maxLeftDepth, maxRightDepth) + 1;
};


// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7