/**
 * 给定一个二叉搜索树，编写一个函数 kthSmallest 来查找其中第 k 个最小的元素。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

var num = 1
var kthSmallest = function(root, k) {
    num = 1;
    return help(root, k)
};

function  help(root, k) {
    if (root == null) {
        return null;
    }

    var left = help(root.left, k)
    if (left != null) {
        return left
    }
    if (num == k) {
        return root.val;
    }
    num++;
    var right = help(root.right, k)
    if (right != null) {
        return right
    } 
}