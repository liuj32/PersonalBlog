/**
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
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
  if (root == null) {
      return null;
  }
  if (p.val > q.val) {
      var temp = p;
      p = q;
      q = temp;
  }

  if (p.val <= root.val && q.val >= root.val) {
      // 顶部
      return root;
  } else if (q.val < root.val) {
      // 左边
    return  lowestCommonAncestor(root.left, p, q)
  } else {
      // 右边
    return  lowestCommonAncestor(root.right, p, q)
  }
};



// 示例 1:

// 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// 输出: 6 
// 解释: 节点 2 和节点 8 的最近公共祖先是 6。
// 示例 2:

// 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// 输出: 2
// 解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
//  
