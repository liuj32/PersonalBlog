/**
 * 给定一个二叉树，返回它的后序遍历。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  var rs = []
  traversal(root, rs)
  return rs
};


function traversal(root, arr){
    if (root) {
        traversal(root.left, arr)
        arr.push(root.val)
        traversal(root.right, arr)
    }
}