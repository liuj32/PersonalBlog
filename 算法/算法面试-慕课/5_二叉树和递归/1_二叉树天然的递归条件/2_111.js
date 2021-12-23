/**
 * 给定一个二叉树，找出其最小深度。
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
var minDepth = function(root) {
  if (root == null) {
      return 0;
  }

  var leftMinDepth = minDepth(root.left)
  var rightMinDepth = minDepth(root.right)

  if (leftMinDepth && rightMinDepth) {
       return Math.min(leftMinDepth, rightMinDepth) + 1;
  }


  return (leftMinDepth || rightMinDepth) + 1;
};



// 示例:

// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7