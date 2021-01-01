/**
 * 给出一个完全二叉树，求出该树的节点个数。
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
var countNodes = function(root) {
  if (root == null) {
      return 0;
  }

  var leftNum =  countNodes(root.left)
  var rightNum =  countNodes(root.right)

  return 1 + leftNum + rightNum;
};


// 示例:

// 输入: 
//     1
//    / \
//   2   3
//  / \  /
// 4  5 6

// 输出: 6