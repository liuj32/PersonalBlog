/**
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
var minDiffInBST = function(root) {
    var dfs = (root) => {
        if (root == null) {
            return
        }

        dfs(root.left)
        if (prev != null) {
            res = Math.min(res, root.val - prev)
        }
        prev = root.val
        dfs(root.right)
    }

    var res = Infinity
    var prev = -1
    dfs(root)

    return res
};