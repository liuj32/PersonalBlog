/**
 * 501. 二叉搜索树中的众数
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
var findMode = function(root) {
    if (root == null) {
        return []
    }
    var map = {}

    var dfs = (root) => {
        if (root == null) {
            return
        }

        if (map[root.val] == null) {
            map[root.val] = 1
        } else {
            map[root.val]++
        }
        dfs(root.left)
        dfs(root.right)
    }

    var res = []
    dfs(root)
    var arr = Object.entries(map).sort((a, b) => b[1] - a[1])
    arr.forEach(([k, v]) => {
      if (v === arr[0][1]) {
          res.push(Number(k))
      }
    })

    return res
};