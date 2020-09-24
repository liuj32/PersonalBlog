/**
 * 94. 二叉树的中序遍历
 * 
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

// 递归
var inorderTraversal = function(root) {
    if (root == null) {
        return []
    }
   var stack = []
   var res = []
   while(root || stack.length) {
       while(root) {
           stack.push(root)
           root = root.left
       }
       var root = stack.pop()
       res.push(root.val)
       root = root.right
   }

   return res
};