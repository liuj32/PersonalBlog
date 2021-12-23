/**
 * 给定一个二叉树，检查它是否是镜像对称的。
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
var isSymmetric = function(root) {
  return help(root, root)
};

function help(p, q) {
  if(p == null && q == null) return true;
  if(p == null || q == null) return false;

  return p.val == q.val 
      && help(p.left, q.right) 
      &&  help(p.right, q.left)
}


// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
//  

// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3
