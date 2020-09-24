/**
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root == null || root == p || root == q) {
      return root;
  }

  var left = lowestCommonAncestor(root.left, p, q)
  var right = lowestCommonAncestor(root.right, p, q)
  if (left != null && right !=null) {
      return root;
  }
  if (left != null) {
      return left;
  }
  if (right != null) {
      return right;
  }

  return null;
};


// 示例 1:

// 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// 输出: 3
// 解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
// 示例 2:

// 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// 输出: 5
// 解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
