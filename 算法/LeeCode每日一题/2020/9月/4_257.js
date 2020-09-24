/**
 * 257. 二叉树的所有路径
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
    var dfs = (root, temp) => {
        if (root == null) {
            return
        }        
        if (root.left == null && root.right == null) {
            var path = [...temp, root.val]
            res.push(path.join('->'))
            return
        }

        dfs(root.left, [...temp, root.val])
        dfs(root.right,  [...temp, root.val])
    }
    var res = []
    dfs(root, [])
    return res
};