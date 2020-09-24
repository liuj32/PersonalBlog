/**
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (root == null) {
      return []
  }
  if (root.left == null && root.right == null) {
      return [root.val + '']
  }

  var leftPaths = binaryTreePaths(root.left)
  for(var i=0;i<leftPaths.length;i++) {
      leftPaths[i] = root.val + '->' + leftPaths[i]
  }
  var rightPath = binaryTreePaths(root.right)
  for(var j=0;j<rightPath.length;j++) {
      rightPath[j] = root.val + '->' + rightPath[j]
  }
  
  return [...leftPaths, ...rightPath];
};


// 示例:

// 输入:

//    1
//  /   \
// 2     3
//  \
//   5

// 输出: ["1->2->5", "1->3"]

// 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3