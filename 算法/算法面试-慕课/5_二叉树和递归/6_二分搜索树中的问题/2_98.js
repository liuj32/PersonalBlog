/**
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
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

var pre = null
var isValidBST = function(root) {
    pre = null;
    return help(root)
};

function help(root) {
    if (!root) return true;
    if(!help(root.left)){
       return false;
    }
    if (pre != null && root.val <= pre){
      return false;
    }
    pre = root.val;
    if(!help(root.right)) {
        return false
    }
    return true;
}



// 示例 1:

// 输入:
//     2
//    / \
//   1   3
// 输出: true
// 示例 2:

// 输入:
//     5
//    / \
//   1   4
//      / \
//     3   6
// 输出: false
// 解释: 输入为: [5,1,4,null,null,3,6]。
//      根节点的值为 5 ，但是其右子节点值为 4 。