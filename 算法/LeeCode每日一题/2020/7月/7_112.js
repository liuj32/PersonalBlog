/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (root == null) {
        return false
    }
 
    if (root.val == sum && root.left == null && root.right == null) {
        return true
    }
    if (hasPathSum(root.left, sum-root.val)) {
        return true
    }
    if (hasPathSum(root.right, sum-root.val)) {
        return true
    }
 
    return false
 };